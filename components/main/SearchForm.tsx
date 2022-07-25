import { StyledSearchForm } from './SearchForm.styles';

const SearchForm = () => {
  return (
    <StyledSearchForm>
      <div>
        <input type='search' name='search' id='search' placeholder='search employee' />
      </div>
    </StyledSearchForm>
  );
};

export default SearchForm;
