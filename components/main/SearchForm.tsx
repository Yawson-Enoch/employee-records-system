import { useRef } from 'react';
import { useErsContext } from '../../store/ers/ErsContext';
import { StyledSearchForm } from './SearchForm.styles';

const SearchForm = () => {
  const { updateEmployeesWithNewUserData, searchTermHandler } = useErsContext();

  const inputRef = useRef<HTMLInputElement>(null);

  const onInputChangeHandler = () => {
    searchTermHandler(inputRef.current!.value);
  };

  // useEffect(() => {
  //   if (!searchTerm) {
  //     // fetch all data else fetch data matching search
  //     return;
  //   } else {
  //     const fetchEmployees = async () => {
  //       try {
  //         const response = await fetch(`/api/employees/search/${searchTerm}`);
  //         const { data, message }: IApiDataProps = await response.json();

  //         if (!response.ok) {
  //           errorHandler(message);
  //         } else {
  //           // console.log(data);
  //           updateEmployeesWithNewUserData(data);
  //         }
  //       } catch (error: any) {
  //         errorHandler(error.message);
  //       }
  //     };
  //     fetchEmployees();
  //   }
  // }, [searchTerm]);

  return (
    <StyledSearchForm>
      <div>
        <input
          type='search'
          name='search'
          id='search'
          ref={inputRef}
          onChange={onInputChangeHandler}
          placeholder='search employee'
        />
      </div>
    </StyledSearchForm>
  );
};

export default SearchForm;
