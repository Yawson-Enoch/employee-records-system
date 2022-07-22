import { useErsContext } from '../../store/ers/ErsContext';
import EmployeeData from './EmployeeData';
import { HomepageWrapper, TitlesContainer } from './HomePage.styles';
import Loader from './Loader';

const HomePage = () => {
  const { state } = useErsContext();

  if (state.loading || !state.employees) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  if (state.employees.length === 0) {
    return <p style={{ textAlign: 'center', fontSize: '2rem' }}>No Employee Available.</p>;
  }

  return (
    <main>
      <HomepageWrapper>
        <TitlesContainer>
          <li>Name</li>
          <li>Email</li>
          <li>Date Added</li>
          <li>Time Added</li>
          <li>Actions</li>
        </TitlesContainer>
        <EmployeeData />
      </HomepageWrapper>
    </main>
  );
};

export default HomePage;
