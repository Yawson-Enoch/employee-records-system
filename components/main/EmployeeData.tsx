import { useErsContext } from '../../store/ers/ErsContext';
import EmployeeList from './EmployeeList';
import Loader from './Loader';

const EmployeeData = () => {
  const { state } = useErsContext();

  if (state.loading || !state.employees) {
    return <Loader />;
  }

  if (state.employees.length === 0) {
    return (
      <p style={{ textAlign: 'center', fontSize: '2rem', padding: '3rem 0' }}>
        No Employee Available.
      </p>
    );
  }

  return (
    <ul>
      {state.employees.map(employee => (
        <EmployeeList key={employee.id} {...employee} />
      ))}
    </ul>
  );
};

export default EmployeeData;
