import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from 'react';
import {
  EModalComponent,
  EModalToggleState,
  IApiDataProps,
  IEditInfo,
  IUserInfo,
} from '../../ts_ui';
import { Actions, EActions } from './actions';
import { ersReducer } from './reducer';

export interface IErsAppState {
  employees: IUserInfo[];
  loading: boolean;
  modalActive: boolean;
  createUserFormActive: boolean;
  confirmDeleteBoxActive: boolean;
  uniqueUserId: string;
  editing: boolean;
  editInfo: IEditInfo;
}

interface IErsContextProps {
  state: IErsAppState;
  dispatch: Dispatch<Actions>;
  updateEmployeesWithNewUserData(data: IUserInfo[]): void;
  modalHandler(toggleState: EModalToggleState, component: EModalComponent): void;
  getUniqueUserIdForDeletion(id: string): void;
  userDeleteHandler(): void;
  userEditHandler(argv: IEditInfo): void;
}

interface IErsContextProviderProps {
  children: ReactNode;
}

const ErsContext = createContext({} as IErsContextProps);

// initial app state
const initialAppState: IErsAppState = {
  employees: [] as IUserInfo[],
  loading: false,
  modalActive: false,
  createUserFormActive: false,
  confirmDeleteBoxActive: false,
  uniqueUserId: '',
  editing: false,
  editInfo: {} as IEditInfo,
};

const ErsContextProvider = ({ children }: IErsContextProviderProps) => {
  const [state, dispatch] = useReducer(ersReducer, initialAppState);

  useEffect(() => {
    const fetchEmployees = async () => {
      dispatch({ type: EActions.Loading });
      try {
        const response = await fetch('/api/employees');
        const { data }: IApiDataProps = await response.json();
        if (!response.ok) {
          console.log('log error from db: message');
        } else {
          // delay data loading - not ideal, but my lecturers love loaders: haha
          setTimeout(() => {
            dispatch({ type: EActions.FetchEmployees, payload: data });
          }, 500);
        }
        // response.ok ? setEmployees(data) : setErrorState({ isError: true, errorMessage: message });
      } catch (error: any) {
        console.log('error from the fetch api - network, unreachable server...');
        // setErrorState({ isError: true, errorMessage: error.message });
        // no need to change loading state since it is a thrown error from fetch: auto terminate...handle with a state-wide message
      }
    };
    fetchEmployees();
  }, []);

  // event handlers
  // update with newly added user after 'POST' operation
  const updateEmployeesWithNewUserData = (data: IUserInfo[]) => {
    dispatch({ type: EActions.UpdateEmployees, payload: data });
  };

  const modalHandler = (toggleState: EModalToggleState, component: EModalComponent) => {
    dispatch({
      type: EActions.ModalActive,
      payload: {
        toggleState,
        component,
      },
    });
  };

  const getUniqueUserIdForDeletion = async (id: string) => {
    modalHandler(EModalToggleState.show, EModalComponent.confirmDeleteBox);
    dispatch({ type: EActions.UniqueUserId, payload: id });
  };

  const userDeleteHandler = () => {
    modalHandler(EModalToggleState.hide, EModalComponent.confirmDeleteBox);
    setTimeout(() => {
      dispatch({ type: EActions.DeleteEmployee });
    }, 500);
    const deleteUserFromDb = async () => {
      try {
        const response = await fetch(`/api/employees/${state?.uniqueUserId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          // 'Something Went Wrong: Log server error message: {message: ........provided by server from response.json()}',
          console.log(response.status);
        }
      } catch (error: any) {
        console.log(error.message);
      }
    };
    deleteUserFromDb();
  };

  const userEditHandler = (argv: IEditInfo) => {
    modalHandler(EModalToggleState.show, EModalComponent.createUserForm);
    dispatch({ type: EActions.Editing });
    dispatch({ type: EActions.EditInfo, payload: argv });
  };

  // export current state values
  const ersContextValues = {
    state,
    dispatch,
    updateEmployeesWithNewUserData,
    modalHandler,
    getUniqueUserIdForDeletion,
    userDeleteHandler,
    userEditHandler,
  };

  return <ErsContext.Provider value={ersContextValues}>{children}</ErsContext.Provider>;
};

const useErsContext = () => useContext(ErsContext);

export { useErsContext, ErsContextProvider };
