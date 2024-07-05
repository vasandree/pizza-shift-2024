import {CSSProperties, FC} from 'react';
import styles from './typography.module.scss';
import {getClassName} from "../../helpers";

interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    type?: "secondary" | "success" | "strong" | "warning" | "danger" | "italic" | "link";
    className?: string;
    style?: CSSProperties;
    children: any;
}

export const Typography: FC<TypographyProps> = ({variant, type, className, style, children}) => {
    const Component = variant;
    return <Component className={
        getClassName([
            styles.typography,
            styles[variant],
            type ? styles[type] : '',
            className || '',])} style={style}>{children}
    </Component>;
};
