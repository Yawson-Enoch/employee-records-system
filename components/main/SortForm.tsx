const SortForm = () => {
  return (
    <form>
      <div>
        <label htmlFor='sort'>Sort by</label>
        <select name='sort' id='sort'>
          <option value=''></option>
          <option value='name'>name</option>
          <option value='email'>email</option>
        </select>
      </div>
    </form>
  );
};

export default SortForm;
