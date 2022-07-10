import { useRouter } from 'next/router';
import { FaTrash } from 'react-icons/fa';
import { IUserInfo } from '../../../ts_ui';
import { DeleteButton, GoToDetailsButton } from './FeedbackPage.styles';

const FeedbackList = ({ id, name, email }: IUserInfo) => {
  const router = useRouter();

  const goToDetails = (id: string) => {
    router.push(`/feedback/${id}`);
  };

  const deleteHandler = async (id: string) => {
    await fetch(`/api/feedback/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
  };

  return (
    <li key={id}>
      <p>{name}</p>
      <p>{email}</p>

      <GoToDetailsButton type='button' onClick={() => goToDetails(id)}>
        Go To Details
      </GoToDetailsButton>

      <DeleteButton onClick={() => deleteHandler(id)}>
        <FaTrash />
      </DeleteButton>
    </li>
  );
};

export default FeedbackList;
