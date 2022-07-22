import { useErsContext } from '../../store/ers/ErsContext';
import { StyledEmployeesData } from './EmployeeData.styles';
import EmployeeList from './EmployeeList';

const EmployeeData = () => {
  const { state } = useErsContext();
  return (
    <StyledEmployeesData>
      {state.employees.map(employee => (
        <EmployeeList key={employee.id} {...employee} />
      ))}
    </StyledEmployeesData>
  );
};

export default EmployeeData;
