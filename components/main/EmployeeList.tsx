import { FaTrash } from 'react-icons/fa';
import { useEmsContext } from '../../store/ems/EmsContext';
import { IUserInfo } from '../../ts_ui';
import { DeleteButton, StyledEmployeeList } from './EmployeeList.styles';

const EmployeeList = ({ id, name, email, addedDate, addedTime }: IUserInfo) => {
  const { getUniqueUserIdForDeletion } = useEmsContext();

  return (
    <StyledEmployeeList>
      <p>{name}</p>
      <p>{email}</p>
      <p>{addedDate}</p>
      <p>{addedTime}</p>

      {/* <GoToDetailsButton type='button' onClick={() => goToDetails(id)}>
        Go To Details
      </GoToDetailsButton> */}

      <DeleteButton onClick={() => getUniqueUserIdForDeletion(id)}>
        <FaTrash />
      </DeleteButton>
    </StyledEmployeeList>
  );
};

export default EmployeeList;
