import type { FC } from 'react';

import type { IconProps } from './IconProps.ts';

export const InfoIcon: FC<IconProps> = ({ color = '#141C24', ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    id='Outline'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      d='M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z'
      fill={color}
    />
    <path d='M12,10H11a1,1,0,0,0,0,2h1v6a1,1,0,0,0,2,0V12A2,2,0,0,0,12,10Z' fill={color} />
    <circle cx='12' cy='6.5' r='1.5' />
  </svg>
);
