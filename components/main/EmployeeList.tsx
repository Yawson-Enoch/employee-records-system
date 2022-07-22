import { FaEdit, FaTrash } from 'react-icons/fa';
import { useErsContext } from '../../store/ers/ErsContext';
import { IUserInfo } from '../../ts_ui';
import { capitalizeFirstLetterOfWords } from '../../utils';
import {
  ButtonsContainer,
  DeleteButton,
  EditButton,
  StyledEmployeeList,
} from './EmployeeList.styles';

const EmployeeList = ({ id, firstName, lastName, email, addedDate, addedTime }: IUserInfo) => {
  const { getUniqueUserIdForDeletion, userEditHandler } = useErsContext();

  const concatAndCapitalizeNames = capitalizeFirstLetterOfWords(`${firstName} ${lastName}`);

  return (
    <StyledEmployeeList>
      <p>{concatAndCapitalizeNames}</p>
      <p>{email}</p>
      <p>{addedDate}</p>
      <p>{addedTime}</p>

      <ButtonsContainer>
        <EditButton onClick={() => userEditHandler({ id, firstName, lastName, email })}>
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
