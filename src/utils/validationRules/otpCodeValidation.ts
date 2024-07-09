import type { ValidationRule } from 'react-hook-form';

export const otpCodeValidation: ValidationRule = {
  required: 'Обязательное поле',
  minLength: {
    value: 6,
    message: 'OTP код должен состоят из 6 символов'
  },
  maxLength: {
    value: 6,
    message: 'OTP код должен состоят из 6 символов'
  }
};
