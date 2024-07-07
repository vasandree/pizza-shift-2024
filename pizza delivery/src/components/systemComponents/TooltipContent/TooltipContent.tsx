import styles from "./TooltipContent.module.scss";
import {FC} from "react";
import {Typography} from "../../uiKit";

interface TooltipContentProps {
    calories: number;
    carbohydrates: string;
    protein: string;
    totalFat: string;
    allergens: string[];
}

export const TooltipContent: FC<TooltipContentProps> = ({calories, carbohydrates, protein, totalFat, allergens}) => (
    <div className={styles.tooltip_content}>
        <div className={styles.header}>Пищевая ценность на 100 г</div>
        <div className={styles.text}>
            <span>Энерг. ценность</span>
            <span>{calories} ккал</span>
        </div>
        <div className={styles.text}>
            <span>Белки</span>
            <span>{protein}</span>
        </div>
        <div className={styles.text}>
            <span>Жиры</span>
            <span>{totalFat}</span>
        </div>
        <div className={styles.text}>
            <span>Углеводы</span>
            <span>{carbohydrates}</span>
        </div>
        <Typography type="danger" variant="p" className={styles.allergens}>
            Аллергены: {allergens.map((allergen, index) => (
            <span key={index}>
                    {allergen}
                {index < allergens.length - 1 ? ', ' : ''}
                </span>
        ))}
        </Typography>
    </div>
);
