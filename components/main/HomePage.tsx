import { useErsContext } from '../../store/ers/ErsContext';
import EmployeeData from './EmployeeData';
import { HomepageWrapper, StyledMain, TitlesContainer } from './HomePage.styles';
import Loader from './Loader';

const HomePage = () => {
  const { state } = useErsContext();

  if (state.loading || !state.employees) {
    return (
      <StyledMain>
        <Loader />
      </StyledMain>
    );
  }

  if (state.employees.length === 0) {
    return <p style={{ textAlign: 'center' }}>Data Is Empty.</p>;
  }

  return (
    <StyledMain>
      <HomepageWrapper>
        <TitlesContainer>
          <li>Name</li>
          <li>Email</li>
          <li>Date</li>
          <li>Time</li>
          <li>Actions</li>
        </TitlesContainer>
        <EmployeeData />
      </HomepageWrapper>
    </StyledMain>
  );
};

export default HomePage;
