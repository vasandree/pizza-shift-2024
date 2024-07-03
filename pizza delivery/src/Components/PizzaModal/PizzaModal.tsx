import { FC } from 'react';
import { IPizza } from '../../types';
import Modal, { ModalProps } from '../../UiKit/Modal/Modal';
import styles from './pizzaModal.module.scss';
import {getImage} from "../../Helpers";

interface PizzaModalProps extends ModalProps {
    pizza: IPizza;
}

const PizzaModal: FC<PizzaModalProps> = ({ pizza, isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={styles.pizzaModal}>
                <div className={styles.pizzaModal__imageContainer}>
                    <img src={getImage(pizza.img)} alt={pizza.name} className={styles.pizzaModal__image} />
                </div>
                <div className={styles.pizzaModal__content}>
                    <h2 className={styles.pizzaModal__name}>{pizza.name}</h2>
                    <p className={styles.pizzaModal__description}>{pizza.description}</p>
                    <p className={styles.pizzaModal__price}>от {pizza.sizes[0].price}</p>
                </div>
            </div>
        </Modal>
    );
};

export default PizzaModal;
