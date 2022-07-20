import { useAnimation } from 'framer-motion';
import { FaTrash } from 'react-icons/fa';
import { useEmployeesDbContext } from '../../store/context/EmployeesDbContext';
import { IUserInfo } from '../../ts_ui';
import { DeleteButton, StyledEmployeeList } from './EmployeeList.styles';

const EmployeeList = ({ id, name, email, addedDate, addedTime }: IUserInfo) => {
  const { employees, updateEmployees } = useEmployeesDbContext();
  // framer-motion hook
  const control = useAnimation();

  // const router = useRouter();

  // const goToDetails = (id: string) => {
  //   router.push(`/employees/${id}`);
  // };

  const deleteHandler = async (id: string) => {
    const newData = employees.filter(employee => employee.id !== id);

    setTimeout(() => {
      updateEmployees(newData);
    }, 1000);

    control.start({
      x: '-100vw',
      transition: {
        duration: 0.7,
      },
    });

    try {
      const response = await fetch(`/api/employees/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        // 'Something Went Wrong: Log server error message: {message: ........provided by server from response.json()}',
        console.log(response.status);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <StyledEmployeeList animate={control}>
      <p>{name}</p>
      <p>{email}</p>
      <p>{addedDate}</p>
      <p>{addedTime}</p>

      {/* <GoToDetailsButton type='button' onClick={() => goToDetails(id)}>
        Go To Details
      </GoToDetailsButton> */}

      <DeleteButton onClick={() => deleteHandler(id)}>
        <FaTrash />
      </DeleteButton>
    </StyledEmployeeList>
  );
};

export default EmployeeList;
