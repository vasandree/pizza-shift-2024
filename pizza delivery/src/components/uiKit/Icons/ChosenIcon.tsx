import {FC} from 'react';
import {IconProps} from "./IconProps.ts";

export const ChosenIcon: FC<IconProps> = ({color = "#141C24", ...props}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
         fill="none"  {...props}>
        <path fill={color} fill-rule="evenodd"
              d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
              clip-rule="evenodd"></path>
        <path fill={color} fill-rule="evenodd"
              d="M16.602 7.864a1 1 0 0 1 .2 1.4l-4.576 6.101c-.061.082-.146.197-.23.29a1.35 1.35 0 0 1-.513.366c-.311.121-.656.121-.967 0a1.35 1.35 0 0 1-.513-.365c-.084-.094-.17-.209-.23-.29l-2.075-2.767a1 1 0 0 1 1.6-1.2l1.701 2.269 4.202-5.604a1 1 0 0 1 1.4-.2"
              clip-rule="evenodd"></path>
    </svg>
);
