import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

import { IngredientCard, TooltipContent } from '@/components/systemComponents';
import { addPizzaToCart, updatePizzaInCart } from '@/logic';
import type { Pizza, PizzaDough, PizzaIngredient, PizzaSize } from '@/utils/api';
import { doughsRu, ingredientsRu, sizesCm, sizesRu } from '@/utils/consts';
import { calculateTotalPizzaPrice, getImage, getShortenDoughName } from '@/utils/helpers';
import type { PizzaInCart } from '@/utils/types';

import type { ModalProps } from '../../uiKit';
import { Button, InfoIcon, Modal, Tabs, Tooltip, Typography } from '../../uiKit';

import styles from './PizzaModal.module.scss';

interface PizzaModalProps extends ModalProps {
  pizza: Pizza;
  pizzaInCart?: PizzaInCart;
}

export const PizzaModal = ({ pizza, isOpen, onClose, pizzaInCart }: PizzaModalProps) => {
  const [currentSize, setCurrentSize] = useState<PizzaSize>(pizzaInCart?.size ?? pizza.sizes[0]);
  const [currentDough, setCurrentDough] = useState<PizzaDough>(
    pizzaInCart?.dough ?? pizza.doughs[0]
  );
  const [currentPrice, setCurrentPrice] = useState<number>(
    pizzaInCart?.price ?? pizza.sizes[0].price
  );
  const [selectedIngredients, setSelectedIngredients] = useState<PizzaIngredient[]>(
    pizzaInCart?.toppings ?? []
  );

  useEffect(() => {
    if (!isOpen) {
      setCurrentSize(pizzaInCart?.size ?? pizza.sizes[0]);
      setCurrentDough(pizzaInCart?.dough ?? pizza.doughs[0]);
      setCurrentPrice(pizzaInCart?.price ?? pizza.sizes[0].price);
      setSelectedIngredients(pizzaInCart?.toppings ?? []);
    }
  }, [isOpen, pizza, pizzaInCart]);

  const updatePizza = () => {
    updatePizzaInCart(pizzaInCart, {
      toppings: selectedIngredients,
      dough: currentDough,
      size: currentSize,
      price: currentPrice
    });
    onClose();
  };

  const handleAddToCart = () => {
    const pizzaInCart: PizzaInCart = {
      pizza,
      toppings: selectedIngredients,
      dough: currentDough,
      size: currentSize,
      price: currentPrice
    };
    addPizzaToCart(pizzaInCart);
  };

  const handleSizeChange = (value: PizzaSize) => {
    setCurrentSize(value);
    setCurrentPrice(
      calculateTotalPizzaPrice({
        currentSize: value,
        currentDough,
        ingredients: selectedIngredients
      })
    );
  };

  const handleDoughChange = (value: PizzaDough) => {
    setCurrentDough(value);
    setCurrentPrice(
      calculateTotalPizzaPrice({
        currentSize,
        currentDough: value,
        ingredients: selectedIngredients
      })
    );
  };

  const handleIngredientClick = (ingredient: PizzaIngredient) => {
    const isSelected = selectedIngredients.some((selected) => selected.name === ingredient.name);
    if (isSelected) {
      setSelectedIngredients((prevIngredients) =>
        prevIngredients.filter((selected) => selected.name !== ingredient.name)
      );
      setCurrentPrice(
        calculateTotalPizzaPrice({
          currentSize,
          currentDough,
          ingredients: selectedIngredients.filter((selected) => selected.name !== ingredient.name)
        })
      );
    } else {
      setSelectedIngredients((prevIngredients) => [...prevIngredients, ingredient]);
      setCurrentPrice(
        calculateTotalPizzaPrice({
          currentSize,
          currentDough,
          ingredients: [...selectedIngredients, ingredient]
        })
      );
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <div className={styles.pizza_modal}>
        <div className={styles.image_container}>
          <img src={getImage(pizza.img)} alt={pizza.name} className={styles.image} />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <Typography variant='h4' className={styles.name}>
              {pizza.name}
            </Typography>
            <Tooltip
              className={styles.tooltip}
              content={
                <TooltipContent
                  allergens={pizza.allergens}
                  totalFat={pizza.totalFat}
                  carbohydrates={pizza.carbohydrates}
                  calories={pizza.calories}
                  protein={pizza.protein}
                />
              }
            >
              <InfoIcon />
            </Tooltip>
          </div>
          <Typography variant='p' className={styles.text}>
            {sizesRu[currentSize.name]}, {sizesCm[currentSize.name]}, {doughsRu[currentDough.name]}
          </Typography>
          <Tabs className={styles.tabs} selected={currentSize} onChange={handleSizeChange}>
            {pizza.sizes.map((size) => (
              <Tabs.Item
                key={size.name}
                label={sizesRu[size.name]}
                value={size}
                className={clsx(styles.tab, {
                  [styles.active]: size.name === currentSize.name
                })}
              />
            ))}
          </Tabs>
          <Tabs className={styles.tabs} selected={currentDough} onChange={handleDoughChange}>
            {pizza.doughs.map((dough) => (
              <Tabs.Item
                key={dough.name}
                label={getShortenDoughName(doughsRu[dough.name])}
                value={dough}
                className={clsx(styles.tab, {
                  [styles.active]: dough.name === currentDough.name
                })}
              />
            ))}
          </Tabs>
          <Typography variant='p' className={styles.ext}>
            Состав:{' '}
            {pizza.ingredients.map((ingredient, index) => (
              <span key={index}>
                {ingredientsRu[ingredient.name]}
                {index < pizza.ingredients.length - 1 ? ', ' : ''}
              </span>
            ))}
          </Typography>
          <div className={styles.ingredients_container}>
            {pizza.toppings.map((ingredient) => (
              <IngredientCard
                key={ingredient.name}
                ingredient={ingredient}
                selected={selectedIngredients.find((selected) => selected.name === ingredient.name)}
                onClick={() => handleIngredientClick(ingredient)}
              />
            ))}
          </div>
          {pizzaInCart ? (
            <Button className={styles.btn} variant='primary' onClick={updatePizza}>
              Изменить пиццу
            </Button>
          ) : (
            <Button className={styles.btn} variant='primary' onClick={handleAddToCart}>
              Добавить в корзину за {currentPrice} ₽
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};
