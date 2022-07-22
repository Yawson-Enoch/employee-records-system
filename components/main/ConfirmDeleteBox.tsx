import { useErsContext } from '../../store/ers/ErsContext';
import { EModalComponent, EModalToggleState } from '../../ts_ui';
import {
  ButtonsContainer,
  FormContent,
  NoButton,
  StyledConfirmDeleteBox,
  YesButton,
} from './ConfirmDeleteBox.styles';

const ConfirmDelete = () => {
  const { state, modalHandler, updateEmployeesWithNewUserData } = useErsContext();

  const userDeleteHandler = () => {
    const newData = state.employees.filter(employee => employee.id !== state.uniqueUserId);
    updateEmployeesWithNewUserData(newData);

    modalHandler(EModalToggleState.hide, EModalComponent.confirmDeleteBox);

    const deleteUserFromDb = async () => {
      try {
        const response = await fetch(`/api/employees/${state.uniqueUserId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          // 'Something Went Wrong: Log server error message: {message: ........provided by server from response.json()}',
          console.log(response.status);
        }
      } catch (error: any) {
        console.log(error.message);
      }
    };
    deleteUserFromDb();
  };

  return (
    <StyledConfirmDeleteBox>
      <form>
        <FormContent>
          <p>Are you sure you want to delete?</p>
          <ButtonsContainer>
            <NoButton
              type='button'
              onClick={() => modalHandler(EModalToggleState.hide, EModalComponent.confirmDeleteBox)}
            >
              no
            </NoButton>
            <YesButton type='button' onClick={userDeleteHandler}>
              yes
            </YesButton>
          </ButtonsContainer>
        </FormContent>
      </form>
    </StyledConfirmDeleteBox>
  );
};

export default ConfirmDelete;
