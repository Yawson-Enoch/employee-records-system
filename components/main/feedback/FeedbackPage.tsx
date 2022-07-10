import { IUserInfoProp } from '../../../ts_ui';
import FeedbackList from './FeedbackList';
import { FeedbackPageWrapper } from './FeedbackPage.styles';

const FeedbackPage = ({ employees }: IUserInfoProp) => {
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
