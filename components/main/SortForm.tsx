import { ChangeEvent } from 'react';
import { useErsContext } from '../../store/ers/ErsContext';

const SortForm = () => {
  const { sortOptionHandler } = useErsContext();

  const onSelectOptionValueChange = (e: ChangeEvent<HTMLSelectElement>) => {
    sortOptionHandler(e.target.value);
  };

  return (
    <form>
      <div>
        <label htmlFor='sort'>Sort by</label>
        <select name='sort' id='sort' onChange={onSelectOptionValueChange}>
          <option value=''></option>
          <option value='name'>name</option>
          <option value='email'>email</option>
        </select>
      </div>
    </form>
  );
};

export default SortForm;
