import { FC, ReactNode, useState } from 'react';
import styles from '../Tooltip/tooltip.module.scss';

interface TooltipProps {
    content?: ReactNode;
    children?: ReactNode;
    className?: string;
}

export const Tooltip: FC<TooltipProps> = ({ content, children, className }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div
            className={`${styles.tooltip_container} ${className}`}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && <div className={styles.tooltip}>{content}</div>}
        </div>
    );
};
