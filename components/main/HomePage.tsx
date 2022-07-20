import { useEmsContext } from '../../store/ems/EmsContext';
import EmployeeList from './EmployeeList';
import { EmployeesData, HomepageWrapper, StyledMain, TitlesContainer } from './HomePage.styles';
import Loader from './Loader';

const HomePage = () => {
  const { state } = useEmsContext();

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
        <EmployeesData>
          {state.employees.map(employee => {
            return <EmployeeList key={employee.id} {...employee} />;
          })}
        </EmployeesData>
      </HomepageWrapper>
    </StyledMain>
  );
};

export default HomePage;
