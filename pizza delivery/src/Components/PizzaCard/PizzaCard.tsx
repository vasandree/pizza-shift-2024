import {FC} from 'react';
import styles from './pizzaCard.module.scss';
import {BASE_URL} from '../../Consts';
import {Button, Card, Typography} from "../../UiKit";
import {Pizza} from "../../types";

interface PizzaCardProps {
    pizza: Pizza;
}

export const PizzaCard: FC<PizzaCardProps> = ({pizza}) =>
    (
        <Card className={styles.pizza_card}>
            <div className={styles.pizza_card__imageContainer}>
                <img src={`${BASE_URL}${pizza.img}`} alt={pizza.name} className={styles.pizza_card__image}/>
            </div>
            <div className={styles.pizza_card__content}>
                <Typography variant="h5" className={styles.pizza_card__content__name}>{pizza.name}</Typography>
                <Typography variant="p"
                            className={styles.pizza_card__content__description}>{pizza.description}</Typography>
                <Typography variant="p" type="strong"
                            className={styles.pizza_card__content__price}>от {pizza.sizes[0].price}</Typography>
                <Button className={styles.pizza_card__btn} variant="primary">Добавить</Button>
            </div>
        </Card>
    );