import { createContext, useContext, useState } from 'react';
import { EConfirmDelete } from '../../ts_ui';

interface IModalContext {
  isModalOpen: boolean;
  isFormActive: boolean;
  isConfirmDeleteBoxActive: boolean;
  isConfirmDelete: boolean;
  // errorState: IErrorState;
  openFormAndModal(): void;
  closeFormAndModal(): void;
  openConfirmDeleteBox(): void;
  confirmDeleteHandler(argv: EConfirmDelete): void;
}
// interface IErrorState {
//   isError: boolean;
//   errorMessage: string;
// }

interface IModalContextProviderProps {
  children: React.ReactNode;
}

const ModalContext = createContext({} as IModalContext);

const ModalContextProvider = ({ children }: IModalContextProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormActive, setIsFormOpen] = useState(false);
  // const [isDeleteConfirm, setIsDeleteConfirm] = useState<EConfirmDelete>(EConfirmDelete.no);
  const [isConfirmDeleteBoxActive, setIsConfirmDeleteBoxActive] = useState<boolean>(false);
  const [isConfirmDelete, setIsConfirmDelete] = useState<boolean>(false);
  // const [errorState, setErrorState] = useState<IErrorState>({
  //   isError: false,
  //   errorMessage: '',
  // });

  const openFormAndModal = () => {
    setIsModalOpen(true);
    setIsFormOpen(true);
  };

  const closeFormAndModal = () => {
    setIsModalOpen(false);
    setIsFormOpen(false);
  };

  const openConfirmDeleteBox = () => {
    setIsModalOpen(true);
    setIsConfirmDeleteBoxActive(true);
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const showModal = () => {
  //   setIsModalOpen(false);
  // };

  // const pageErrorMessageHandler = (isError = true, errorMessage: string) => {
  //   // remove after 10 seconds
  //   setIsModalOpen(true);
  //   setErrorState({ isError, errorMessage });
  // };

  const confirmDeleteHandler = (argv: EConfirmDelete) => {
    setIsModalOpen(false);
    setIsConfirmDeleteBoxActive(false);
    if (argv === EConfirmDelete.yes) {
      setIsConfirmDelete(true);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        isFormActive,
        isConfirmDelete,
        confirmDeleteHandler,
        isConfirmDeleteBoxActive,
        // errorState,
        openFormAndModal,
        closeFormAndModal,
        openConfirmDeleteBox,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => useContext(ModalContext);

export { ModalContextProvider, useModalContext };
