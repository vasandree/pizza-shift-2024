import {BASE_URL} from "../consts";

export function getImage(imagePath: string) {
    return `${BASE_URL}${imagePath}`
}