import  { FC, useState } from 'react';
import {Card, ChosenIcon, Typography} from '../../uiKit';
import { ingredientsRu } from '../../../utils/consts';
import styles from './ingredientCard.module.scss';
import {PizzaIngredient} from "../../../types";
import {getImage} from "../../../utils/helpers";

interface IngredientCardProps {
    ingredient: PizzaIngredient;
    onClick: () => void;
}

export const IngredientCard: FC<IngredientCardProps> = ({ ingredient, onClick }) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
        onClick();
    };

    return (
        <Card className={`${styles.ingredient_card} ${selected ? styles.selected : ''}`} onClick={handleClick}>
            <div className={styles.ingredient_card__imageContainer}>
                <img className={styles.ingredient_card__image} src={getImage(ingredient.img)} alt={ingredientsRu[ingredient.name]} />
            </div>
            {selected && (
                <div className={styles.ingredient_card__icon}>
                    <ChosenIcon color={"#F4511E"}/>
                </div>
            )}
            <Typography variant="p" className={styles.ingredient_card__name}>
                {ingredientsRu[ingredient.name]}
            </Typography>
            <Typography variant="p" className={styles.ingredient_card__cost}>
                {ingredient.cost}₽
            </Typography>
        </Card>
    );
};
