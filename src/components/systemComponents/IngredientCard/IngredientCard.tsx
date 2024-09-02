import { ingredientsRu } from '@/utils/consts';
import { getImage } from '@/utils/helpers';
import type { PizzaIngredient } from '@/utils/types';

import { Card, ChosenIcon, Typography } from '../../uiKit';

import styles from './IngredientCard.module.scss';

interface IngredientCardProps {
  ingredient: PizzaIngredient;
  onClick: () => void;
  selected: boolean;
}

export const IngredientCard = ({ ingredient, onClick, selected }: IngredientCardProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Card
      className={`${styles.ingredient_card} ${selected ? styles.selected : ''}`}
      onClick={handleClick}
    >
      <div className={styles.ingredient_card__imageContainer}>
        <img
          className={styles.ingredient_card__image}
          src={getImage(ingredient.img)}
          alt={ingredientsRu[ingredient.name]}
        />
      </div>
      {selected && (
        <div className={styles.ingredient_card__icon}>
          <ChosenIcon color='#F4511E' />
        </div>
      )}
      <Typography variant='p' className={styles.ingredient_card__name}>
        {ingredientsRu[ingredient.name]}
      </Typography>
      <Typography variant='p' className={styles.ingredient_card__cost}>
        {ingredient.cost} ₽
      </Typography>
    </Card>
  );
};
