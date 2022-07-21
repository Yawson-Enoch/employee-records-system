import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import AddButton from '../components/main/AddButton';
import ConfirmDelete from '../components/main/ConfirmDelete';
import CreateUserForm from '../components/main/CreateUserForm';
import HomePage from '../components/main/HomePage';
import Modal from '../components/main/Modal';
import { useEmsContext } from '../store/ems/EmsContext';

const Home = () => {
  const { state } = useEmsContext();
  return (
    <>
      <Head>
        <meta name='description' content='home page' />
        <meta name='keywords' content='home page' />
        <title>Home</title>
      </Head>
      <HomePage />
      <AddButton />
      <AnimatePresence>
        {state.createUserFormActive && <CreateUserForm key='form' />}
        {state.confirmDeleteBoxActive && <ConfirmDelete key='delete' />}
        {state.modalActive && <Modal key='modal' />}
      </AnimatePresence>
    </>
  );
};

export default Home;
