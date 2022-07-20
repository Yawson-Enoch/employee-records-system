import { useEmsContext } from '../../store/ems/EmsContext';
import { EModalComponent, EModalToggleState } from '../../ts_ui';
import { StyledAddButton } from './AddButton.styles';

const AddButton = () => {
  const { modalHandler } = useEmsContext();
  return (
    <StyledAddButton
      onClick={() => modalHandler(EModalToggleState.show, EModalComponent.createUserForm)}
    >
      ADD
    </StyledAddButton>
  );
};

export default AddButton;
