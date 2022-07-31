import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Backdrop from '../components/main/Backdrop';
import ConfirmDelete from '../components/main/ConfirmDeleteBox';
import CreateUserForm from '../components/main/CreateUserForm';
import ErrorMessageBox from '../components/main/ErrorMessageBox';
import HomePage from '../components/main/HomePage';
import { useErsContext } from '../store/ers/ErsContext';

const Home = () => {
  const { state } = useErsContext();
  return (
    <>
      <Head>
        <meta name='description' content='home page' />
        <meta name='keywords' content='home page' />
        <title>Ers</title>
      </Head>
      <main>
        <HomePage />
      </main>
      <AnimatePresence>
        {state.createUserFormActive && <CreateUserForm key='form' />}
        {state.confirmDeleteBoxActive && <ConfirmDelete key='delete' />}
        {state.backdropActive && <Backdrop key='backdrop' />}
        {state.error && <ErrorMessageBox key='error' />}
      </AnimatePresence>
    </>
  );
};

export default Home;
