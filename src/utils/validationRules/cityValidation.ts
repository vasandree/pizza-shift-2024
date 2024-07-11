import type { ValidationRule } from 'react-hook-form';

export const cityValidation: ValidationRule = {
  required: 'Обязательное поле',
  pattern: {
    value: /^[A-Za-zА-Яа-яЁё0-9\s.,-]*$/,
    message: 'Невалидное поле'
  }
};
