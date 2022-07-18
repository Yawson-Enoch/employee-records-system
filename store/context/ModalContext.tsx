import { createContext, useContext, useState } from 'react';

interface IModalContext {
  isModalOpen: boolean;
  isFormActive: boolean;
  openFormAndModal(): void;
  closeFormAndModal(): void;
}

interface IModalContextProviderProps {
  children: React.ReactNode;
}

const ModalContext = createContext({} as IModalContext);

const ModalContextProvider = ({ children }: IModalContextProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormActive, setIsFormOpen] = useState(false);

  const openFormAndModal = () => {
    setIsModalOpen(true);
    setIsFormOpen(true);
  };

  const closeFormAndModal = () => {
    setIsModalOpen(false);
    setIsFormOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        isFormActive,
        openFormAndModal,
        closeFormAndModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => useContext(ModalContext);

export { ModalContextProvider, useModalContext };
