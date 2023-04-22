import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Control, Controller, FieldValues, useForm } from 'react-hook-form';
import { Path } from 'react-router-dom';
import { InputFieldWrapper } from '../NewService/NewService.styles';

interface InputFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: string;
  label: string;
  type?: string;
  disabled?: boolean;
  placeHolder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = <T extends FieldValues>(props: InputFieldProps<T>) => {
  return (
    <Controller
      name={props.name as any}
      control={props.control}
      rules={{}}
      render={({ field, fieldState }) => (
        <>
          <label htmlFor="username">{props.label}</label>
          <InputFieldWrapper>
            <InputText
              id={props.name}
              value={field.value ?? ''}
              type={props.type ? props.type : 'text'}
              className={classNames({ 'p-invalid': fieldState.error })}
              disabled={props.disabled ? props.disabled : false}
              onChange={(e) => field.onChange(e.target.value)}
            />
            <small id="username-help">{props.placeHolder}</small>
          </InputFieldWrapper>
          <small>{fieldState.error?.message}</small>
        </>
      )}
    />
  );
};

export default InputField;
