import { BASE_URL } from '../consts';

export const getImage = (imagePath: string) => {
  return `${BASE_URL}${imagePath}`;
};
