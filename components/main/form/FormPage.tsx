import { FormEvent, useRef } from 'react';
import { useEmployeesDbContext } from '../../../store/context/EmployeesDbContext';
import { IApiDataProps } from '../../../ts_ui';
import { FormControl, FormPageWrapper, UserForm } from './FormPage.styles';

const FormPage = () => {
  const { setEmployees } = useEmployeesDbContext();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/feedback', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameRef.current?.value.trim().toLowerCase(),
          email: emailRef.current?.value.trim().toLowerCase(),
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
      nameRef.current!.value = '';
      emailRef.current!.value = '';
    }
  };

  return (
    <FormPageWrapper>
      <UserForm onSubmit={submitHandler}>
        <FormControl>
          <label htmlFor='name'>Name</label>
          <input ref={nameRef} type='text' name='name' id='name' required />
        </FormControl>
        <FormControl>
          <label htmlFor='email'>Email</label>
          <input ref={emailRef} type='email' name='email' id='email' required />
        </FormControl>
        <button type='submit'>SUBMIT</button>
      </UserForm>
    </FormPageWrapper>
  );
};

export default FormPage;
