import { FaEdit, FaTrash } from 'react-icons/fa';
import { useErsContext } from '../../store/ers/ErsContext';
import { IUserInfo } from '../../ts_ui';
import {
  ButtonsContainer,
  DeleteButton,
  EditButton,
  StyledEmployeeList,
} from './EmployeeList.styles';

const EmployeeList = ({ id, name, email, addedDate, addedTime }: IUserInfo) => {
  const { getUniqueUserIdForDeletion } = useErsContext();

  return (
    <StyledEmployeeList>
      <p>{name}</p>
      <p>{email}</p>
      <p>{addedDate}</p>
      <p>{addedTime}</p>

      <ButtonsContainer>
        <EditButton>
          <FaEdit />
        </EditButton>
        <DeleteButton onClick={() => getUniqueUserIdForDeletion(id)}>
          <FaTrash />
        </DeleteButton>
      </ButtonsContainer>
    </StyledEmployeeList>
  );
};

export default EmployeeList;
