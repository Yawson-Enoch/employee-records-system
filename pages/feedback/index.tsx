import { GetStaticProps } from 'next';
import Head from 'next/head';
import FeedbackPage from '../../components/main/feedback/FeedbackPage';
import { IUserInfoProp, IUserInfo } from '../../ts_ui';
import { extractEmployeesDB, pathToDB } from '../../utils';

const FeedBack = ({ employees }: IUserInfoProp) => {
  return (
    <>
      <Head>
        <meta name='description' content='about page' />
        <meta name='keywords' content='about page' />
        <title>Feedback</title>
      </Head>
      <FeedbackPage employees={employees} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const filePath = pathToDB();
  const data: IUserInfo[] = extractEmployeesDB(filePath);

  return {
    props: {
      employees: data,
    },
  };
};

export default FeedBack;
