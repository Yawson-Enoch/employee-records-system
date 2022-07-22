import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import AddButton from '../components/main/AddButton';
import ConfirmDelete from '../components/main/ConfirmDeleteBox';
import CreateUserForm from '../components/main/CreateUserForm';
import ErrorMessageBox from '../components/main/ErrorMessageBox';
import HomePage from '../components/main/HomePage';
import Modal from '../components/main/Modal';
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
      <HomePage />
      <AddButton />
      <AnimatePresence>
        {state.createUserFormActive && <CreateUserForm key='form' />}
        {state.confirmDeleteBoxActive && <ConfirmDelete key='delete' />}
        {state.modalActive && <Modal key='modal' />}
        {state.error && <ErrorMessageBox key='error' />}
      </AnimatePresence>
    </>
  );
};

export default Home;
