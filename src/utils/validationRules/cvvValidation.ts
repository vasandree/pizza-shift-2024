import type { ValidationRule } from 'react-hook-form';

export const cvvValidation: ValidationRule = {
  required: 'Обязательное поле',
  pattern: {
    value: /^\d\d\d*$/,
    message: 'Невалидное поле'
  }
};
