import type { ValidationRule } from 'react-hook-form';

export const houseValidation: ValidationRule = {
  required: 'Обязательное поле',
  pattern: {
    value: /^[0-9\\.,/]*$/,
    message: 'Невалидное поле'
  }
};
