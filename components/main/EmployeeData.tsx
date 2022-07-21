import { useEmsContext } from '../../store/ems/EmsContext';
import { StyledEmployeesData } from './EmployeeData.styles';
import EmployeeList from './EmployeeList';

const EmployeeData = () => {
  const { state } = useEmsContext();
  return (
    <StyledEmployeesData>
      {state.employees.map(employee => (
        <EmployeeList key={employee.id} {...employee} />
      ))}
    </StyledEmployeesData>
  );
};

export default EmployeeData;
