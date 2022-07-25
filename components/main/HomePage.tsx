import { useErsContext } from '../../store/ers/ErsContext';
import AddButton from './AddButton';
import EmployeeData from './EmployeeData';
import {
  EmployeesDetails,
  HomepageWrapper,
  SearchAndSortOptionsContainer,
  TitlesContainer,
} from './HomePage.styles';
import Loader from './Loader';
import SearchForm from './SearchForm';
import SortForm from './SortForm';

const HomePage = () => {
  const { state } = useErsContext();

  if (state.loading || !state.employees) {
    return <Loader />;
  }

  if (state.employees.length === 0) {
    return <p style={{ textAlign: 'center', fontSize: '2rem' }}>No Employee Available.</p>;
  }

  return (
    <HomepageWrapper>
      <SearchAndSortOptionsContainer>
        <SearchForm />
        <SortForm />
      </SearchAndSortOptionsContainer>
      <EmployeesDetails>
        <TitlesContainer>
          <li>Name</li>
          <li>Email</li>
          <li>Date Added</li>
          <li>Time Added</li>
          <li>Actions</li>
        </TitlesContainer>
        <EmployeeData />
      </EmployeesDetails>
      <AddButton />
    </HomepageWrapper>
  );
};

export default HomePage;
