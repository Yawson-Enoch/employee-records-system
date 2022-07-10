// import type { GetStaticProps } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import HomePage, { IApiData } from '../components/main/home/HomePage';
import { extractEmployeesDB, IUserInfo, pathToDB } from './api/feedback';

const Home = ({ data }: IApiData) => {
  return (
    <>
      <Head>
        <meta name='description' content='home page' />
        <meta name='keywords' content='home page' />
        <title>Home</title>
      </Head>
      <HomePage data={data} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const filePath = pathToDB();
  const data: IUserInfo = extractEmployeesDB(filePath);

  return {
    props: {
      data: data,
    },
  };
};

export default Home;
