import {FC, useState} from 'react';
import styles from './pizzaCard.module.scss';
import {Button, Card, Typography} from "../../UiKit";
import {Pizza} from "../../types";
import {PizzaModal} from "../index.ts";
import {getImage} from "../../Helpers";

interface PizzaCardProps {
    pizza: Pizza;
}

const PizzaCard: FC<PizzaCardProps> = ({ pizza }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Card className={styles.pizzaCard}>
                <div className={styles.pizzaCard__imageContainer}>
                    <img src={getImage(pizza.img)} alt={pizza.name} className={styles.pizzaCard__image} />
                </div>
                <div className={styles.pizzaCard__content}>
                    <Typography variant="h5" className={styles.pizzaCard__content__name}>{pizza.name}</Typography>
                    <Typography variant="p" className={styles.pizzaCard__content__description}>{pizza.description}</Typography>
                    <Typography variant="p"  className={styles.pizzaCard__content__price}>от {pizza.sizes[0].price}₽</Typography>
                    <Button style={{width: "100%"}} variant="primary" onClick={()=> setIsOpen(true)}>Добавить</Button>
                </div>
            </Card>
            <PizzaModal pizza={pizza} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>

    );
}