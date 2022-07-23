import { useErsContext } from '../../store/ers/ErsContext';
import EmployeeList from './EmployeeList';

const EmployeeData = () => {
  const { state } = useErsContext();
  return (
    <ul>
      {state.employees.map(employee => (
        <EmployeeList key={employee.id} {...employee} />
      ))}
    </ul>
  );
};

export default EmployeeData;
