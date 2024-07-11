import type { ReactElement, ReactNode } from 'react';
import { cloneElement, createContext, useContext } from 'react';
import type { FieldValues, SubmitHandler, UseFormReturn, ValidationRule } from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';
import clsx from 'clsx';

import styles from './Form.module.scss';

interface FormProps {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  className?: string;
  form?: UseFormReturn<FieldValues>;
}

interface FormContextProps {
  methods: UseFormReturn<FieldValues>;
  reset: () => void;
  setValue: (
    name: string,
    value: any,
    options?: Partial<{ shouldValidate: boolean; shouldDirty: boolean; shouldTouch: boolean }>
  ) => void;
}

const FormContext = createContext<FormContextProps | null>(null);

const FormComponent = ({ onSubmit, children, className, form }: FormProps) => {
  const methods = useForm();
  const actualMethods = form || methods;

  return (
    <FormContext.Provider
      value={{
        methods: actualMethods,
        reset: actualMethods.reset,
        setValue: actualMethods.setValue
      }}
    >
      <FormProvider {...actualMethods}>
        <form
          onSubmit={actualMethods.handleSubmit(onSubmit)}
          className={clsx(styles.form, className)}
        >
          {children}
        </form>
      </FormProvider>
    </FormContext.Provider>
  );
};

interface FormItemProps {
  name: string;
  label?: string;
  children: ReactNode;
  rules?: ValidationRule;
  className?: string;
}

const FormItem = ({ label, name, children, rules }: FormItemProps) => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('Form.Item must be used within a Form');
  }

  const { methods } = context;
  const {
    register,
    formState: { errors }
  } = methods;

  return (
    <div className={styles.form_item}>
      {label && <label className={styles.label}>{label}</label>}
      {cloneElement(children as ReactElement, { ...register(name, rules) })}
      {errors[name] && <span className={styles.error}>{errors[name]?.message}</span>}
    </div>
  );
};

interface FormComponentType extends FormProps {
  Item: typeof FormItem;
}

const Form = FormComponent as FormComponentType;
Form.Item = FormItem;

export { Form, FormContext };
