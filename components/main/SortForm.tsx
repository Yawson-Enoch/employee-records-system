const SortForm = () => {
  return (
    <form>
      <div>
        <select name='sort' id='sort'>
          <option value='name'>name</option>
          <option value='email'>email</option>
        </select>
      </div>
    </form>
  );
};

export default SortForm;
