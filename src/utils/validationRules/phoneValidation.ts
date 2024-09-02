import type { ValidationRule } from 'react-hook-form';

export const phoneValidation: ValidationRule = {
  required: 'Обязательное поле',
  pattern: {
    value: /^(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}))$/,
    message: 'Неверный номер телефона'
  }
};
