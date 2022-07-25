import AddButton from './AddButton';
import EmployeeData from './EmployeeData';
import {
  EmployeesDetails,
  HomepageWrapper,
  SearchAndSortOptionsContainer,
  TitlesContainer,
} from './HomePage.styles';
import SearchForm from './SearchForm';
import SortForm from './SortForm';

const HomePage = () => {
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
