import styles from "../TooltipContent/tooltipContent.module.scss";
import { FC } from "react";
import { Typography } from "../../UiKit";

interface TooltipContentProps {
    calories: number;
    carbohydrates: string;
    protein: string;
    totalFat: string;
    allergens: string[];
}

export const TooltipContent: FC<TooltipContentProps> = ({ calories, carbohydrates, protein, totalFat, allergens }) => (
    <div className={styles.tooltip_content}>
        <Typography variant="p" className={styles.tooltip_content__allergens}>
            Аллергены: {allergens.map((allergen, index) => (
            <span key={index}>
                    {allergen}
                {index < allergens.length - 1 ? ', ' : ''}
                </span>
        ))}
        </Typography>
        <div className={styles.tooltip_header}>Пищевая ценность на 100 г</div>
        <div className={styles.tooltip_content__text}>
            <span>Энерг. ценность</span>
            <span>{calories} ккал</span>
        </div>
        <div className={styles.tooltip_content__text}>
            <span>Белки</span>
            <span>{protein}</span>
        </div>
        <div className={styles.tooltip_content__text}>
            <span>Жиры</span>
            <span>{totalFat}</span>
        </div>
        <div className={styles.tooltip_content__text}>
            <span>Углеводы</span>
            <span>{carbohydrates}</span>
        </div>
    </div>
);
