import { cloneElement, createContext, ReactElement, ReactNode, useContext } from 'react';
import {
  useForm,
  SubmitHandler,
  FormProvider,
  UseFormReturn,
  ValidationRule,
  FieldValues
} from 'react-hook-form';
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
  const methods = form || useForm();

  return (
    <FormContext.Provider value={{ methods, reset: methods.reset, setValue: methods.setValue }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={clsx(styles.form, className)}>
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
