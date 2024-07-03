import { FC } from 'react';
import styles from './pizzaCard.module.scss';
import {Button} from "../index.ts";

interface PizzaCardProps {
    name: string;
    image: string;
    description: string;
    price: number;
}

const PizzaCard: FC<PizzaCardProps> = ({ name, image, description, price }) => {
    return (
        <div className={styles.pizzaCard}>
            <img src={image} alt={name} className={styles.pizzaCard__image} />
            <div className={styles.pizzaCard__content}>
                <h3 className={styles.pizzaCard__name}>{name}</h3>
                <p className={styles.pizzaCard__description}>{description}</p>
                <div className={styles.pizzaCard__footer}>
                    <span className={styles.pizzaCard__price}>от {price}</span>
                    <Button label={"Добавить"} variant={"primary"}/>
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;
