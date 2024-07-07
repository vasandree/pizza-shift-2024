import {CSSProperties, FC, ReactNode} from 'react';
import styles from './typography.module.scss';
import {getClassName} from "../../../utils/helpers";

interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    type?: "secondary" | "success" | "strong" | "warning" | "danger" | "italic" | "link";
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
    onClick?: () => void
}

export const Typography: FC<TypographyProps> = ({variant, type, className, style, children,onClick}) => {
    const Component = variant;
    return <Component onClick={onClick} className={
        getClassName([
            styles.typography,
            styles[variant],
            type ? styles[type] : '',
            className || '',])} style={style}>{children}
    </Component>;
};
