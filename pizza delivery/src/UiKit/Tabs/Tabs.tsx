import React, {useState} from 'react';
import styles from '../Tabs/tabs.module.scss';
import {Typography} from "../index.ts";

interface Tab {
    label: string;
    value: any;
    className?: string
    activeClassName?: string;
}

interface TabsProps {
    tabs: Tab[];
    onChange?: (value: any) => void;
    selected?: number;
    className?: string;
}

export const Tabs: React.FC<TabsProps> = ({tabs, selected = 0, onChange, className}) => {
    const [selectedTab, setSelectedTab] = useState(tabs[selected].value);

    const handleTabClick = (value: any) => {
        setSelectedTab(value);
        onChange && onChange(value) ;

    };

    return (
        <div className={`${styles.tabs} ${className}`}>
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    className={`${styles.tab}  ${tab.value === selectedTab ? styles.active : ''}
                     ${tab.className} ${tab.value === selectedTab && tab.activeClassName ? tab.activeClassName : ''}`} // не знаю как пофиксить, помогите пж
                    onClick={() => handleTabClick(tab.value)}
                >
                    <Typography variant="p">{tab.label}</Typography>
                </button>
            ))}
        </div>
    );
};
