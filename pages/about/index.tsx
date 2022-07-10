import Head from 'next/head';
import AboutPage from '../../components/main/about/AboutPage';

const about = () => {
  return (
    <>
      <Head>
        <meta name='description' content='about page' />
        <meta name='keywords' content='about page' />
        <title>About</title>
      </Head>
      <AboutPage />
    </>
  );
};

export default about;
