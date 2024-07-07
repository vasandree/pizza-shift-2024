import {FC, ReactNode, useState} from 'react';
import styles from './tooltip.module.scss';
import {clsx} from "clsx";

interface TooltipProps {
    content?: ReactNode;
    children?: ReactNode;
    className?: string;
}

export const Tooltip: FC<TooltipProps> = ({content, children, className}) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className={styles.tooltip_container}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && <div className={clsx(styles.tooltip, className)}>{content}</div>}
        </div>
    );
};
