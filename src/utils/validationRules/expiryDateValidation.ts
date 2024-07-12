import type { ValidationRule } from 'react-hook-form';

export const expiryDateValidation: ValidationRule = {
  required: 'Обязательное поле',
  pattern: {
    value: /^\d\d\/\d\d$/,
    message: 'Невалидное поле'
  }
};
