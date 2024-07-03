import { FC } from 'react';
import styles from './pizzaCard.module.scss';
import { BASE_URL } from '../../Consts';
import {IPizza} from "../../types";
import {Button, Typography} from "../../UiKit";

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
                <Typography variant="h5" className={styles.pizzaCard__name}>{pizza.name}</Typography>
                <Typography variant="p" className={styles.pizzaCard__description}>{pizza.description}</Typography>
                <Typography variant="p" bold className={styles.pizzaCard__price}>от {pizza.sizes[0].price}</Typography>
                <Button style={{width: "100%"}} variant="primary">Добавить</Button>
            </div>
        </div>
    );
};

export default PizzaCard;
