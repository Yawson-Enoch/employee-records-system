import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { IApiDataProps, IUserInfo } from '../../ts_ui';

interface IErrorState {
  isError: boolean;
  errorMessage: string;
}

interface IEmployeesDbContextProps {
  employees: IUserInfo[];
  updateEmployees(data: IUserInfo[]): void;
  isLoading: boolean;
  errorState: IErrorState;
}

interface IEmployeesDbContextProviderProps {
  children: ReactNode;
}

const EmployeesDbContext = createContext({} as IEmployeesDbContextProps);

const EmployeesDbContextProvider = ({ children }: IEmployeesDbContextProviderProps) => {
  const [employees, setEmployees] = useState<IUserInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorState, setErrorState] = useState<IErrorState>({
    isError: false,
    errorMessage: '',
  });

  /* CSR - fetch data stored in local employees.json file*/
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/employees');
        const { data, message }: IApiDataProps = await response.json();
        // if (!response.ok) {
        //   setErrorState({ isError: true, errorMessage: message });
        // } else {
        //   setEmployees(data);
        // }
        response.ok ? setEmployees(data) : setErrorState({ isError: true, errorMessage: message });
      } catch (error: any) {
        setErrorState({ isError: true, errorMessage: error.message });
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };
    fetchData();
  }, []);

  const updateEmployees = (data: IUserInfo[]) => {
    setEmployees(data);
  };

  return (
    <EmployeesDbContext.Provider
      value={{
        employees,
        updateEmployees,
        isLoading,
        errorState,
      }}
    >
      {children}
    </EmployeesDbContext.Provider>
  );
};

const useEmployeesDbContext = () => useContext(EmployeesDbContext);

export { EmployeesDbContextProvider, useEmployeesDbContext };
