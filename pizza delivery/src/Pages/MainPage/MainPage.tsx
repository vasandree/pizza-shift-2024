import styles from './mainPage.module.scss';
import { PizzaCard } from '../../Components';
import { Pizza } from '../../types';
import { useFetch } from '../../hooks';
import { getPizzaCatalog } from '../../Api';

export const MainPage = () => {
    const pizzas: Pizza[] | null = useFetch<Pizza[]>(getPizzaCatalog);

    return (
        <div className={styles.main_page}>
            {pizzas !== null && pizzas.map((pizza: Pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza}/>
            ))}
        </div>
    );
};
