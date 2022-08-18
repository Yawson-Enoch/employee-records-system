import { ChangeEvent } from 'react';
import { useErsContext } from '../../store/ers/ErsContext';
import { StyledSearchForm } from './SearchForm.styles';

const SearchForm = () => {
  const { searchTermHandler } = useErsContext();

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    searchTermHandler(e.currentTarget.value);
  };

  return (
    <StyledSearchForm>
      <div>
        <input
          type='search'
          name='search'
          id='search'
          onChange={onInputChangeHandler}
          placeholder='search employee'
        />
      </div>
    </StyledSearchForm>
  );
};

export default SearchForm;
