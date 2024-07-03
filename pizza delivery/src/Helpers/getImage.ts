import {BASE_URL} from "../Consts";

export function getImage(imagePath: string) {
    return `${BASE_URL}${imagePath}`
}