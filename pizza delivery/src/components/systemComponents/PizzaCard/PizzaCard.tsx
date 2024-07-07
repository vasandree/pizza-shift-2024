import { FC, useState } from 'react';
import styles from './pizzaCard.module.scss';
import { Button, Card, Typography } from '../../uiKit';
import { Pizza } from '../../../types';
import { PizzaModal } from '../index.ts';
import { getImage } from "../../../utils/helpers";

interface PizzaCardProps {
    pizza: Pizza;
}

export const PizzaCard: FC<PizzaCardProps> = ({ pizza }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleAddClick = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);

    return (
        <>
            <Card className={styles.pizza_card}>
                <div className={styles.pizza_card__imageContainer}>
                    <img src={getImage(pizza.img)} alt={pizza.name} className={styles.pizza_card__image}/>
                </div>
                <div className={styles.pizza_card__content}>
                    <Typography variant="h5" className={styles.pizza_card__content__name}>{pizza.name}</Typography>
                    <Typography variant="p"
                                className={styles.pizza_card__content__description}>{pizza.description}</Typography>
                    <Typography variant="p" type="strong"
                                className={styles.pizza_card__content__price}>от {pizza.sizes[0].price}</Typography>
                    <Button className={styles.pizza_card__btn} variant="primary" onClick={handleAddClick}>Добавить</Button>
                </div>
            </Card>
            <PizzaModal pizza={pizza} isOpen={isOpen} onClose={handleCloseModal} />
        </>
    );
};
