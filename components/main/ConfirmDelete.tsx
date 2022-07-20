import { useModalContext } from '../../store/context/ModalContext';
import { EConfirmDelete } from '../../ts_ui';
import {
  ButtonsContainer,
  ConfirmDeleteBox,
  FormContent,
  NoButton,
  YesButton,
} from './ConfirmDelete.styles';

interface IDeleteHandler {
  deleteHandler(id: string): void;
}

const ConfirmDelete = ({ deleteHandler }: IDeleteHandler) => {
  const { confirmDeleteHandler } = useModalContext();

  return (
    <ConfirmDeleteBox>
      <form>
        <FormContent>
          <p>Are you sure you want to delete?</p>
          <ButtonsContainer>
            <NoButton type="button" onClick={() => deleteHandler}>
              no
            </NoButton>
            <YesButton type="button" onClick={() => confirmDeleteHandler(EConfirmDelete.yes)}>
              yes
            </YesButton>
          </ButtonsContainer>
        </FormContent>
      </form>
    </ConfirmDeleteBox>
  );
};

export default ConfirmDelete;
