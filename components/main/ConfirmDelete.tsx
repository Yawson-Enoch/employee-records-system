import { useErsContext } from '../../store/ers/ErsContext';
import { EModalComponent, EModalToggleState } from '../../ts_ui';
import {
  ButtonsContainer,
  ConfirmDeleteBox,
  FormContent,
  NoButton,
  YesButton,
} from './ConfirmDelete.styles';

const ConfirmDelete = () => {
  const { modalHandler, userDeleteHandler } = useErsContext();

  return (
    <ConfirmDeleteBox>
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
    </ConfirmDeleteBox>
  );
};

export default ConfirmDelete;
