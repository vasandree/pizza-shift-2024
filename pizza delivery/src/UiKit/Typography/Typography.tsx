import { CSSProperties, FC, ReactNode } from 'react';
import styles from './typography.module.scss';

interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    bold?: boolean;
    italic?: boolean;
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
}

const Typography: FC<TypographyProps> = ({ variant, bold, italic, className, style, children }) => {
    const Component = variant;
    const classNames = [
        className || "",
        styles.typography,
        styles[variant],
        bold ? styles.bold : '',
        italic ? styles.italic : '',

    ].join(' ').trim();

    return <Component className={classNames} style={style}>{children}</Component>;
};

export default Typography;
