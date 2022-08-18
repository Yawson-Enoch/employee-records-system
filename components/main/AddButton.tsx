import { useErsContext } from '../../store/ers/ErsContext';
import { EModalComponent, EBackdropToggleState } from '../../ts_ui';
import { StyledAddButton } from './AddButton.styles';

const AddButton = () => {
  const { backdropAndmodalsHandler } = useErsContext();
  return (
    <StyledAddButton
      onClick={() =>
        backdropAndmodalsHandler(EBackdropToggleState.show, EModalComponent.createUserForm)
      }
    >
      ADD
    </StyledAddButton>
  );
};

export default AddButton;
