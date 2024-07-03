import { FC } from 'react';
import styles from './pizzaCard.module.scss';
import { Button } from '../index';
import IPizza from '../../types/IPizza';
import {BASE_URL} from "../../Consts";

interface PizzaCardProps {
    pizza: IPizza;
}

const PizzaCard: FC<PizzaCardProps> = ({ pizza }) => {
    return (
        <div className={styles.pizzaCard}>
            <div className={styles.pizzaCard__imageContainer}>
                <img src={`${BASE_URL}${pizza.img}`} alt={pizza.name} className={styles.pizzaCard__image} />
            </div>
            <div className={styles.pizzaCard__content}>
                <h3 className={styles.pizzaCard__name}>{pizza.name}</h3>
                <p className={styles.pizzaCard__description}>{pizza.description}</p>
                <span className={styles.pizzaCard__price}>от {pizza.sizes[0].price}</span>
                <Button label="Добавить" variant="primary" />
            </div>
        </div>
    );
};

export default PizzaCard;
