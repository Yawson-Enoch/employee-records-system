// import type { GetStaticProps } from 'next';
import Head from 'next/head';
import HomePage from '../components/main/HomePage';

const Home = () => {
  return (
    <>
      <Head>
        <meta name='description' content='home page' />
        <meta name='keywords' content='home page' />
        <title>Home</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
