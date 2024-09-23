import { useState } from 'react';

import { PizzaModal } from '@/components/systemComponents';
import type { Pizza } from '@/utils/api';
import { getImage } from '@/utils/helpers';

import { Button, Card, Typography } from '../../uiKit';

import styles from './PizzaCard.module.scss';

interface PizzaCardProps {
  pizza: Pizza;
}

export const PizzaCard = ({ pizza }: PizzaCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddClick = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <Card className={styles.pizza_card} onClick={() => setIsOpen(true)}>
        <div className={styles.image_container}>
          <img src={getImage(pizza.img)} alt={pizza.name} className={styles.image} />
        </div>
        <div className={styles.content}>
          <Typography variant='h5' className={styles.name}>
            {pizza.name}
          </Typography>
          <Typography variant='p' className={styles.description}>
            {pizza.description}
          </Typography>
          <Typography variant='p' type='strong' className={styles.price}>
            от {pizza.sizes[0].price} ₽
          </Typography>
          <Button className={styles.btn} variant='primary' onClick={handleAddClick}>
            Добавить
          </Button>
        </div>
      </Card>
      <PizzaModal key={pizza.id} pizza={pizza} isOpen={isOpen} onClose={handleCloseModal} />
    </>
  );
};
