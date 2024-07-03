import { FC, useState, useEffect, useMemo } from 'react';
import styles from './mainPage.module.scss';
import {PizzaCard} from "../../Components";
import {getPizzaCatalog} from "../../Api";
import {IPizza} from "../../types";

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
        return pizzas.map((pizza: IPizza) => (
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
