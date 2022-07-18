import { useEmployeesDbContext } from '../../store/context/EmployeesDbContext';
import { useModalContext } from '../../store/context/ModalContext';
import AddButton from './AddButton';
import CreateUserForm from './CreateUserForm';
import EmployeeList from './EmployeeList';
import {
  EmployeesData,
  HomepageWrapper,
  TitlesContainer,
} from './HomePage.styles';
import Modal from './Modal';

const HomePage = () => {
  const { employees, isLoading } = useEmployeesDbContext();
  const { isModalOpen, isFormActive } = useModalContext();

  if (isLoading) {
    return <p style={{ textAlign: 'center' }}>Loading...Please Wait.</p>;
  }

  if (!employees) {
    return <p style={{ textAlign: 'center' }}>No data yet.</p>;
  }

  if (employees.length === 0) {
    return <p style={{ textAlign: 'center' }}>Data Is Empty.</p>;
  }

  return (
    <HomepageWrapper>
      {isFormActive && <CreateUserForm />}
      <TitlesContainer>
        <li>Name</li>
        <li>Email</li>
        <li>Date</li>
        <li>Time</li>
        <li>Actions</li>
      </TitlesContainer>
      <EmployeesData>
        {employees.map((employee) => {
          return <EmployeeList key={employee.id} {...employee} />;
        })}
      </EmployeesData>
      <AddButton />
      {isModalOpen && <Modal />}
    </HomepageWrapper>
  );
};

export default HomePage;
