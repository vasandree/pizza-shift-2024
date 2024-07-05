import {FC, useEffect, useState} from 'react';
import styles from './pizzaModal.module.scss';
import {calculateTotalPizzaPrice, getImage} from '../../Helpers';
import {Button, Modal, ModalProps, Tabs, Tooltip, Typography} from '../../UiKit';
import {IPizza, IPizzaIngredient} from '../../types';
import {doughsRu, ingredientsRu, sizesCm, sizesRu} from '../../Consts';
import {IngredientCard} from '../IngredientCard/IngredientCard';
import {TooltipContent} from "../TooltipContent/TooltipContent.tsx";
import {InfoIcon} from "../../Icons";

interface PizzaModalProps extends ModalProps {
    pizza: IPizza;
}

export const PizzaModal: FC<PizzaModalProps> = ({pizza, isOpen, onClose}) => {
    const [currentSize, setCurrentSize] = useState(pizza.sizes[0].name);
    const [currentDough, setCurrentDough] = useState(pizza.doughs[0].name);
    const [currentPrice, setCurrentPrice] = useState(pizza.sizes[0].price);
    const [selectedIngredients, setSelectedIngredients] = useState<IPizzaIngredient[]>([]);

    useEffect(() => {
        if (!isOpen) {
            setCurrentSize(pizza.sizes[0].name);
            setCurrentDough(pizza.doughs[0].name);
            setCurrentPrice(pizza.sizes[0].price);
            setSelectedIngredients([]);
        }
    }, [isOpen, pizza]);

    const handleSizeChange = (value: any) => {
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

    const handleDoughChange = (value: any) => {
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

    const handleIngredientClick = (ingredient: IPizzaIngredient) => {
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
                    <Button
                        variant="primary"
                        onClick={() => {
                            console.log('Selected Ingredients:', selectedIngredients);
                        }}
                    >
                        Добавить в корзину за {currentPrice}₽
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

