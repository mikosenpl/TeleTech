import { Calendar } from 'primereact/calendar';
import { classNames } from 'primereact/utils';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { FieldWrapper } from '../MainTemplate/MainTemplate.styles';

interface CalendarFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: string;
  label: string;
  type?: string;
  disabled?: boolean;
  placeHolder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CalendarField = <T extends FieldValues>(props: CalendarFieldProps<T>) => {
  return (
    <Controller
      name={props.name as any}
      control={props.control}
      rules={{}}
      render={({ field, fieldState }) => (
        <>
          <label htmlFor={props.name}>{props.label}</label>
          <FieldWrapper>
            <Calendar
              inputId={field.name}
              value={field.value}
              onChange={field.onChange}
              view="year"
              dateFormat="yy"
              minDate={new Date()}
              className={classNames({ 'p-invalid': fieldState.error })}
            />
            <small id={`${props.name}-help`}>{props.placeHolder}</small>
          </FieldWrapper>
          <small>{fieldState.error?.message}</small>
        </>
      )}
    />
  );
};

export default CalendarField;
