import type { ValidationRule } from 'react-hook-form';

export const cityValidation: ValidationRule = {
  required: 'Обязательное поле',
  pattern: {
    value: /^[A-Za-zА-Яа-яЁё\s.,-]*$/,
    message: 'Невалидное поле'
  }
};
