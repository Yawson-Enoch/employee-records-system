import { FormEvent, useRef } from 'react';
import { FormControl, FormPageWrapper, UserForm } from './FormPage.styles';

const FormPage = () => {
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
          name: nameRef.current?.value.trim(),
          email: emailRef.current?.value.trim(),
        }),
      });
      if (!response.ok) {
        console.log(
          'Something Went Wrong: Possible Server Error',
          response.status
        );
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      console.log('Thanks');
      nameRef.current!.value = '';
      emailRef.current!.value = '';
    }
  };

  return (
    <FormPageWrapper>
      <UserForm onSubmit={submitHandler}>
        <FormControl>
          <label htmlFor='name'>Name</label>
          <input ref={nameRef} type='text' name='name' id='name' />
        </FormControl>
        <FormControl>
          <label htmlFor='email'>Email</label>
          <input ref={emailRef} type='email' name='email' id='email' />
        </FormControl>
        <button type='submit'>SUBMIT</button>
      </UserForm>
    </FormPageWrapper>
  );
};

export default FormPage;
