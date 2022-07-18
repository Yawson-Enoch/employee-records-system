import { useModalContext } from '../../store/context/ModalContext';
import { StyledAddButton } from './AddButton.styles';

const AddButton = () => {
  const { openFormAndModal } = useModalContext();
  return <StyledAddButton onClick={openFormAndModal}>ADD</StyledAddButton>;
};

export default AddButton;
