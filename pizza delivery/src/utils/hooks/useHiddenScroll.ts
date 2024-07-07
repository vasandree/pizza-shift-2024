import {useEffect} from "react";

export const useHiddenScroll = (isOpen: boolean) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);
}