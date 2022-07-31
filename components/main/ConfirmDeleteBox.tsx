import { useErsContext } from '../../store/ers/ErsContext';
import { EModalComponent, EBackdropToggleState, IApiDataProps } from '../../ts_ui';
import {
  ButtonsContainer,
  FormContent,
  NoButton,
  StyledConfirmDeleteBox,
  YesButton,
} from './ConfirmDeleteBox.styles';

const ConfirmDelete = () => {
  const { state, backdropAndmodalsHandler, updateEmployeesWithNewUserData, errorHandler } =
    useErsContext();

  const userDeleteHandler = () => {
    const newData = state.employees.filter(employee => employee.id !== state.uniqueUserId);
    updateEmployeesWithNewUserData(newData);

    backdropAndmodalsHandler(EBackdropToggleState.hide, EModalComponent.confirmDeleteBox);

    const deleteUserFromDb = async () => {
      try {
        const response = await fetch(`/api/employees/${state.uniqueUserId}`, {
          method: 'DELETE',
        });

        const { message }: IApiDataProps = await response.json();

        if (!response.ok) {
          throw new Error(message);
        }
      } catch (error: any) {
        errorHandler(error.message);
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
              onClick={() =>
                backdropAndmodalsHandler(
                  EBackdropToggleState.hide,
                  EModalComponent.confirmDeleteBox
                )
              }
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
