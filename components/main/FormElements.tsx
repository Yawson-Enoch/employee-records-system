import { ChangeEvent, useState } from 'react';
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
  onChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
}

const FormElements = (props: IFormElements) => {
  const [focusRemove, setFocusRemove] = useState(false);

  const focusAndLeaveHandler = () => {
    setFocusRemove(true);
  };

  return (
    <FormField focused={focusRemove}>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        id={props.id}
        required
        placeholder={props.placeholder}
        pattern={props?.pattern}
        onChange={props.onChange}
        onBlur={focusAndLeaveHandler}
        autoFocus={props.autofocus}
      />
      <label htmlFor={props.id}>{props.labelText}</label>
      <div>{props.errorMessage}</div>
    </FormField>
  );
};

export default FormElements;
