import {FC} from "react";
import {IconProps} from "./IconProps.ts";

export const ExitIcon: FC<IconProps> = ({color = "#141C24", ...props}) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M14.4706 20.325C14.4706 19.9522 14.1684 19.65 13.7956 19.65H4.82353C4.54739 19.65 4.32353 19.4261 4.32353 19.15V4.85001C4.32353 4.57387 4.54739 4.35001 4.82353 4.35001H13.7956C14.1684 4.35001 14.4706 4.0478 14.4706 3.67501C14.4706 3.30222 14.1684 3.00001 13.7956 3.00001H5C3.89543 3.00001 3 3.89544 3 5.00001V19C3 20.1046 3.89543 21 5 21H13.7956C14.1684 21 14.4706 20.6978 14.4706 20.325ZM12.8947 11.64C12.5468 11.64 12.2647 11.9221 12.2647 12.27C12.2647 12.6179 12.5468 12.9 12.8947 12.9H18.4412L16.2698 15.1148C16.0056 15.3843 16.0056 15.8157 16.2698 16.0852C16.5415 16.3624 16.9879 16.3624 17.2596 16.0852L20.3137 12.9701C20.6949 12.5812 20.6949 11.9588 20.3137 11.5699L17.2596 8.45481C16.9879 8.17765 16.5415 8.17765 16.2698 8.45481C16.0056 8.72432 16.0056 9.1557 16.2698 9.42521L18.4412 11.64H12.8947Z"
            fill={color}/>
    </svg>

)
