import type { IconProps } from '@ui/icons/IconProps.ts';

export const OrderStatus = ({ ...props }: IconProps) => (
  <svg width='8' height='9' viewBox='0 0 8 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='4' cy='4.14203' r='4' fill={props.color} />
  </svg>
);
