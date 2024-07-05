import styles from './mainPage.module.scss';
import { PizzaCard } from '../../Components';
import { Pizza } from '../../types';
import { useFetchPizzas } from '../../hooks';
import {Typography} from "../../UiKit";

export const MainPage = () => {
    const pizzas = useFetchPizzas();

    if(pizzas.loading){return <Typography variant={"h1"}>Loading...</Typography>}
    if(pizzas.error){return <Typography variant={"h1"}>Error!</Typography>}

    return (
        <div className={styles.main_page}>
            {pizzas.data !== null && pizzas.data.map((pizza: Pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza}/>
            ))}
        </div>
    );
};
