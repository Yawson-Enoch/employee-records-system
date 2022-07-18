import { ChangeEvent, FormEvent, useState } from 'react';
import { useEmployeesDbContext } from '../../store/context/EmployeesDbContext';
import { useModalContext } from '../../store/context/ModalContext';
import { IApiDataProps } from '../../ts_ui';
import {
  Form,
  FormBtnContainer,
  FormContainer,
  FormContainerDetails,
} from './CreateUserForm.styles';
import FormElements from './FormElements';

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}
type dynamicKey = keyof IFormValues;

const CreateUserForm = () => {
  const { closeFormAndModal } = useModalContext();
  const { updateEmployees } = useEmployeesDbContext();
  const [users, setUsers] = useState<IFormValues>({
    firstName: '',
    lastName: '',
    email: '',
  });

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/employees', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...users,
        }),
      });
      if (!response.ok) {
        console.log(
          'Something Went Wrong: Possible Server Error',
          response.status
          // add a div to bottom of form and display 'api' error message - message: {'could not insert data'}
        );
      }
      closeFormAndModal();
      const data: IApiDataProps = await response.json();
      const { data: dataFromApi } = data;
      updateEmployees(dataFromApi);
      // remove form modal
    } catch (error: any) {
      // add a div to bottom of form and display 'fetch' error message - network error
      console.log(error.message);
    } finally {
      setUsers({ firstName: '', lastName: '', email: '' });
      // remove finally
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
        <p>Add New Employee</p>
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
          <button type='button' onClick={closeFormAndModal}>
            Close
          </button>
          <button type='submit'>Submit</button>
        </FormBtnContainer>
      </Form>
    </FormContainer>
  );
};

export default CreateUserForm;

// type dynamicKey = keyof typeof users;
{
  /* <FormField>
          <input
            type='text'
            name='firstName'
            value={users.firstName}
            id='firstname'
            required
            pattern='^[A-Za-z0-9]{2,16}$'
            onChange={changeHandler}
            onBlur={focusAndLeaveHandler}
            placeholder='Your First Name'
          />
          <label htmlFor='firstname'>First Name</label>
          <div>
            Username should be 2-16 characters and shouldn't include any special
            characters.
          </div>
        </FormField>
        <FormField>
          <input
            type='text'
            name='lastName'
            value={users.lastName}
            id='lastname'
            required
            pattern='^[A-Za-z0-9]{2,16}$'
            onChange={changeHandler}
            onBlur={focusAndLeaveHandler}
            placeholder='Your Last Name'
          />
          <label htmlFor='lastname'>Last Name</label>
          <div>
            Username should be 2-16 characters and shouldn't include any special
            characters.
          </div>
        </FormField>
        <FormField>
          <input
            type='email'
            name='email'
            value={users.email}
            id='email'
            required
            onChange={changeHandler}
            onBlur={focusAndLeaveHandler}
            placeholder='name@gmail.com'
          />
          <label htmlFor='email'>Email</label>
          <div>Email is invalid.</div>
        </FormField> */
}
