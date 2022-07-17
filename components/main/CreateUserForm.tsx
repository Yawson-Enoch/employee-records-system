import { ChangeEvent, FormEvent, useState } from 'react';
import { useEmployeesDbContext } from '../../store/context/EmployeesDbContext';
import { IApiDataProps } from '../../ts_ui';
import {
  Form,
  FormBtnContainer,
  FormContainer,
  FormContainerDetails,
  FormField,
} from './CreateUserForm.styles';

const CreateUserForm = () => {
  const { setEmployees } = useEmployeesDbContext();
  const [users, setUsers] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [focusRemove, setFocusRemove] = useState(false);

  const focusAndLeaveHandler = () => {
    setFocusRemove(true);
  };

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
      const response = await fetch('/api/feedback', {
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
        );
      }
      const data: IApiDataProps = await response.json();
      const { data: dataFromApi } = data;
      setEmployees(dataFromApi);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setUsers({ firstName: '', lastName: '', email: '' });
    }
  };

  return (
    <FormContainer>
      <FormContainerDetails>
        <p>Add New Employee</p>
      </FormContainerDetails>
      <Form onSubmit={submitHandler}>
        <FormField>
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
        </FormField>
        <FormBtnContainer>
          <button type='submit'>Submit</button>
        </FormBtnContainer>
      </Form>
    </FormContainer>
  );
};

export default CreateUserForm;
