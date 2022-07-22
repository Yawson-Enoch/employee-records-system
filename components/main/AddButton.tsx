import { useErsContext } from '../../store/ers/ErsContext';
import { EModalComponent, EModalToggleState } from '../../ts_ui';
import { StyledAddButton } from './AddButton.styles';

const AddButton = () => {
  const { modalHandler } = useErsContext();
  return (
    <StyledAddButton
      onClick={() => modalHandler(EModalToggleState.show, EModalComponent.createUserForm)}
    >
      ADD
    </StyledAddButton>
  );
};

export default AddButton;
