import React, { useState } from 'react';
import styles from '../Tabs/tabs.module.scss';
import {Typography} from "../index.ts";

interface Tab {
    label: string;
    value: string;
}

interface TabsProps {
    tabs: Tab[];
    onChange?: (value: string) => void;
    selected?: number;
    className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, selected = 0, onChange, className }) => {
    const [selectedSegment, setSelectedSegment] = useState(tabs[selected].value);

    const handleTabClick = (value: string) => {
        setSelectedSegment(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className={`${styles.tabs} ${className}`}>
            {tabs.map((segment) => (
                <button
                    key={segment.value}
                    className={`${styles.tab}  ${segment.value === selectedSegment ? styles.active : ''}`}
                    onClick={() => handleTabClick(segment.value)}
                >
                    <Typography variant="p">{segment.label}</Typography>
                </button>
            ))}
        </div>
    );
};
