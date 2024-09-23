import type { FC, ReactElement, ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import styles from './Tabs.module.scss';

interface TabsItemProps {
  label: string;
  value: any;
  className?: string;
  children?: ReactNode;
}

export const TabsItem: FC<TabsItemProps> = ({ children }) => {
  return <>{children}</>;
};

interface TabsProps {
  children: ReactElement<TabsItemProps>[];
  onChange?: (value: any) => void;
  selected?: any;
  className?: string;
}

const TabsComponent: FC<TabsProps> = ({ children, selected, onChange, className }) => {
  const [selectedItem, setSelectedItem] = useState<any>(selected ?? children[0].props.value);

  useEffect(() => {
    if (selected !== undefined && selected !== null) {
      setSelectedItem(selected);
    }
  }, [selected]);

  const handleItemClick = (value: any) => {
    setSelectedItem(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={className}>
      <div className={styles.tabs}>
        {React.Children.map(children, (child) => {
          const { label, value, className } = child.props;
          const isActive = value === selectedItem;

          return (
            <div
              key={value}
              className={clsx(styles.item, isActive && styles.active, className)}
              onClick={() => handleItemClick(value)}
            >
              <p>{label}</p>
            </div>
          );
        })}
      </div>
      <div>
        {React.Children.map(children, (child) => {
          return child.props.value === selectedItem ? child : null;
        })}
      </div>
    </div>
  );
};

interface TabsComponentType extends TabsProps {
  Item: TabsItemProps;
}

const Tabs = TabsComponent as TabsComponentType;
Tabs.Item = TabsItem;

export { Tabs };
