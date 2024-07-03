import { FC, useState, useEffect, useMemo } from 'react';
import styles from './mainPage.module.scss';
import { getPizzaCatalog } from '../../Api/getPizzaCatalog';
import {PizzaCard} from "../../Components";

const MainPage: FC = () => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        const fetchPizzas = async () => {
            let response = await getPizzaCatalog();
            setPizzas(response);
        };

        fetchPizzas();
    }, []);

    const pizzaCards = useMemo(() => {
        return pizzas.map((pizza: any) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
        ));
    }, [pizzas]);

    return (
        <div className={styles.mainPage}>
            {pizzaCards}
        </div>
    );
};

export default MainPage;
