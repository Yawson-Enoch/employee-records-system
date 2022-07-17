import { useRouter } from 'next/router';
import { FaTrash } from 'react-icons/fa';
import { useEmployeesDbContext } from '../../store/context/EmployeesDbContext';
import { IUserInfo } from '../../ts_ui';
import { DeleteButton, GoToDetailsButton } from './HomePage.styles';

const EmployeeList = ({ id, name, email, addedDate, addedTime }: IUserInfo) => {
  const { employees, setEmployees } = useEmployeesDbContext();
  // const router = useRouter();

  // const goToDetails = (id: string) => {
  //   router.push(`/feedback/${id}`);
  // };

  const deleteHandler = async (id: string) => {
    const newData = employees.filter((employee) => employee.id !== id);
    setEmployees(newData);

    try {
      const response = await fetch(`/api/feedback/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        // 'Something Went Wrong: Log server error message: {message: ........provided by server from response.json()}',
        console.log(response.status);
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      console.log('User Deleted');
    }
  };

  return (
    <li key={id}>
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
    </li>
  );
};

export default EmployeeList;
