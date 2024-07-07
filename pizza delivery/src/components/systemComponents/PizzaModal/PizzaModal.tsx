import {FC, useEffect, useState} from 'react';
import styles from './pizzaModal.module.scss';
import {DoughsType, Pizza, PizzaIngredient, Sizes} from "../../../types";
import {calculateTotalPizzaPrice, getImage} from "../../../utils/helpers";
import {doughsRu, ingredientsRu, sizesCm, sizesRu} from "../../../utils/consts";
import {InfoIcon, Modal, ModalProps, Tabs, Tooltip, Typography} from "../../uiKit";
import {IngredientCard, TooltipContent} from "../index.ts"

interface PizzaModalProps extends ModalProps {
    pizza: Pizza;
}

export const PizzaModal: FC<PizzaModalProps> = ({pizza, isOpen, onClose}) => {
    const [currentSize, setCurrentSize] = useState(pizza.sizes[0].name);
    const [currentDough, setCurrentDough] = useState(pizza.doughs[0].name);
    const [currentPrice, setCurrentPrice] = useState(pizza.sizes[0].price);
    const [selectedIngredients, setSelectedIngredients] = useState<PizzaIngredient[]>([]);

    useEffect(() => {
        if (!isOpen) {
            setCurrentSize(pizza.sizes[0].name);
            setCurrentDough(pizza.doughs[0].name);
            setCurrentPrice(pizza.sizes[0].price);
            setSelectedIngredients([]);
        }
    }, [isOpen, pizza]);

    const handleSizeChange = (value: Sizes) => {
        setCurrentSize(value);
        setCurrentPrice(
            calculateTotalPizzaPrice({
                sizes: pizza.sizes,
                doughs: pizza.doughs,
                currentSize: value,
                currentDough,
                ingredients: selectedIngredients
            })
        );
    };

    const handleDoughChange = (value: DoughsType) => {
        setCurrentDough(value);
        setCurrentPrice(
            calculateTotalPizzaPrice({
                sizes: pizza.sizes,
                doughs: pizza.doughs,
                currentSize,
                currentDough: value,
                ingredients: selectedIngredients
            })
        );
    };

    const handleIngredientClick = (ingredient: PizzaIngredient) => {
        const isSelected = selectedIngredients.some((selected) => selected.name === ingredient.name);
        if (isSelected) {
            setSelectedIngredients(selectedIngredients.filter((selected) => selected.name !== ingredient.name));
            setCurrentPrice(
                calculateTotalPizzaPrice({
                    sizes: pizza.sizes,
                    doughs: pizza.doughs,
                    currentSize,
                    currentDough,
                    ingredients: selectedIngredients.filter((selected) => selected.name !== ingredient.name),
                })
            );

        } else {
            setSelectedIngredients([...selectedIngredients, ingredient]);
            setCurrentPrice(
                calculateTotalPizzaPrice({
                    sizes: pizza.sizes,
                    doughs: pizza.doughs,
                    currentSize,
                    currentDough,
                    ingredients: [...selectedIngredients, ingredient],
                })
            );
        }

    };

    const sizes = pizza.sizes.map((size) => ({
        label: sizesRu[size.name].split(' ')[0],
        value: size.name,
        className: styles.pizza_modal__tabs__tab,
        activeClassName: styles.active,
    }));
    const doughs = pizza.doughs.map((dough) => ({
        label: doughsRu[dough.name].split(' ')[0],
        value: dough.name,
        className: styles.pizza_modal__tabs__tab,
    }));

    return (
        <Modal isOpen={isOpen} onClose={onClose} className={styles.modal}>
            <div className={styles.pizza_modal}>
                <div className={styles.pizza_modal__imageContainer}>
                    <img src={getImage(pizza.img)} alt={pizza.name} className={styles.pizza_modal__image}/>
                </div>
                <div className={styles.pizza_modal__content}>
                    <div className={styles.pizza_modal__header}>
                        <Typography variant="h4" className={styles.pizza_modal__name}>
                            {pizza.name}
                        </Typography>
                        <Tooltip className={styles.pizza_modal__tooltip}
                                 content={<TooltipContent allergens={pizza.allergens} totalFat={pizza.totalFat}
                                                          carbohydrates={pizza.carbohydrates} calories={pizza.calories}
                                                          protein={pizza.protein}/>}><InfoIcon/></Tooltip>
                    </div>
                    <Typography variant="p" className={styles.pizza_modal__text}>
                        {sizesRu[currentSize]}, {sizesCm[currentSize]}, {doughsRu[currentDough]}
                    </Typography>

                    <Typography variant="p" className={styles.pizza_modal__text}>
                        Состав:{' '}
                        {pizza.ingredients.map((ingredient, index) => (
                            <span key={index}>
                                {ingredientsRu[ingredient.name]}
                                {index < pizza.ingredients.length - 1 ? ', ' : ''}
                            </span>
                        ))}
                    </Typography>
                    <Tabs className={styles.pizza_modal__tabs} tabs={sizes} onChange={handleSizeChange}/>
                    <Tabs className={styles.pizza_modal__tabs} tabs={doughs} onChange={handleDoughChange}/>
                    <div className={styles.pizza_modal__ingredients_container}>
                        {pizza.toppings.map((ingredient, index) => (
                            <IngredientCard
                                key={index}
                                ingredient={ingredient}
                                onClick={() => handleIngredientClick(ingredient)}
                            />
                        ))}
                    </div>
                    Добавить в корзину за {currentPrice}₽
                </div>
            </div>
        </Modal>
    );
};