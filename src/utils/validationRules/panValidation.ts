import type { ValidationRule } from 'react-hook-form';

export const panValidation: ValidationRule = {
  required: 'Обязательное поле',
  pattern: {
    value: /^\d\d\d\d\s\d\d\d\d$/,
    message: 'Невалидное поле'
  }
};
