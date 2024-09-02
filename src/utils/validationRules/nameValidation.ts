import type { ValidationRule } from 'react-hook-form';

export const nameValidation: ValidationRule = {
  required: 'Обязательное поле',
  pattern: {
    value: /^[A-Za-zА-Яа-я\\-]+$/,
    message: 'Невалидное поле'
  }
};
