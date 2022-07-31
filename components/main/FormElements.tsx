import { ChangeEvent } from 'react';
import { FormField } from './FormElements.styles';
interface IFormElements {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  id: string;
  labelText: string;
  errorMessage: string;
  pattern?: string;
  autofocus?: boolean;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}

const FormElements = (props: IFormElements) => {
  return (
    <FormField>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        id={props.id}
        required
        placeholder={props.placeholder}
        pattern={props.pattern}
        onChange={props.onChange}
        autoFocus={props.autofocus}
      />
      <label htmlFor={props.id}>{props.labelText}</label>
      <div>{props.errorMessage}</div>
    </FormField>
  );
};

export default FormElements;
