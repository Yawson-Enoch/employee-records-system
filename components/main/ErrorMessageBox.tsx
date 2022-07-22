import { useErsContext } from '../../store/ers/ErsContext';
import { capitalizeFirstLetter } from '../../utils';
import { StyledErrorMessageBox } from './ErrorMessageBox.styles';

const ErrorMessageBox = () => {
  const { state } = useErsContext();
  return (
    <StyledErrorMessageBox>
      <p>{capitalizeFirstLetter(state.errorMessage)}</p>
    </StyledErrorMessageBox>
  );
};

export default ErrorMessageBox;
