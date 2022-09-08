import { ChangeEvent, FormEvent, useState } from 'react';
import { useErsContext } from '../../store/ers/ErsContext';
import { EModalComponent, EBackdropToggleState, IApiDataProps, IFormValues } from '../../ts_ui';
import {
  CloseButton,
  Form,
  FormBtnContainer,
  FormContainer,
  FormContainerDetails,
  SubmitButton,
} from './CreateUserForm.styles';
import FormElements from './FormElements';

type dynamicKey = keyof IFormValues;

const CreateUserForm = () => {
  const { backdropAndmodalsHandler, updateEmployeesWithNewUserData, state, errorHandler } =
    useErsContext();

  let initialValues: IFormValues = { firstName: '', lastName: '', email: '' };
  let method: string = 'POST';
  let url: string = '/api/v1/employees';

  if (state.editing) {
    const { firstName, lastName, email } = state.editInfo;
    initialValues = { firstName, lastName, email };

    method = 'PATCH';
    url = `/api/v1/employees/${state.editInfo.id}`;
  }

  const [users, setUsers] = useState<IFormValues>(initialValues);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setUsers({
      ...users,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...users,
        }),
      });

      const { data, message }: IApiDataProps = await response.json();

      if (!response.ok) {
        throw new Error(message);
      }

      updateEmployeesWithNewUserData(data);
      backdropAndmodalsHandler(EBackdropToggleState.hide, EModalComponent.createUserForm);
    } catch (error: any) {
      errorHandler(error.message);
    }
  };

  const inputs = [
    {
      id: 'firstname',
      name: 'firstName',
      type: 'text',
      placeholder: 'Your First Name',
      pattern: '^[A-Za-z0-9]{2,16}$',
      autofocus: true,
      labelText: 'First Name',
      errorMessage: `Username should be 2-16 characters and shouldn't include any special
      characters.`,
    },
    {
      id: 'lastname',
      name: 'lastName',
      type: 'text',
      placeholder: 'Your Last Name',
      pattern: '^[A-Za-z0-9]{2,16}$',
      labelText: 'Last Name',
      errorMessage: `Username should be 2-16 characters and shouldn't include any special
      characters.`,
    },
    {
      id: 'email',
      name: 'email',
      type: 'email',
      placeholder: 'name@email.com',
      labelText: 'Email',
      errorMessage: 'Email is invalid.',
    },
  ];

  return (
    <FormContainer>
      <FormContainerDetails>
        <p>{state.editing ? 'Edit' : 'Add New'} Employee</p>
      </FormContainerDetails>
      <Form onSubmit={submitHandler}>
        {inputs.map((input, index) => {
          return (
            <FormElements
              key={index}
              {...input}
              onChange={changeHandler}
              value={users[input.name as dynamicKey]}
            />
          );
        })}
        <FormBtnContainer>
          <CloseButton
            type='button'
            onClick={() =>
              backdropAndmodalsHandler(EBackdropToggleState.hide, EModalComponent.createUserForm)
            }
            autoFocus
          >
            Close
          </CloseButton>
          <SubmitButton type='submit'>Submit</SubmitButton>
        </FormBtnContainer>
      </Form>
    </FormContainer>
  );
};

export default CreateUserForm;
