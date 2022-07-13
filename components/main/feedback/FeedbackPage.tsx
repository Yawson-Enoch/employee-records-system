import { useEmployeesDbContext } from '../../../store/context/EmployeesDbContext';
import FeedbackList from './FeedbackList';
import { FeedbackPageWrapper } from './FeedbackPage.styles';

const FeedbackPage = () => {
  const { employees, isLoading } = useEmployeesDbContext();

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
    <FeedbackPageWrapper>
      <h1>Feedback Page</h1>
      <ul>
        {employees.map((employee) => {
          return <FeedbackList key={employee.id} {...employee} />;
        })}
      </ul>
    </FeedbackPageWrapper>
  );
};

export default FeedbackPage;
