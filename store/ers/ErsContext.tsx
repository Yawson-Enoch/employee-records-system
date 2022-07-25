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
  error: boolean;
  errorMessage: string;
}

interface IErsContextProps {
  state: IErsAppState;
  dispatch: Dispatch<Actions>;
  updateEmployeesWithNewUserData(data: IUserInfo[]): void;
  modalHandler(toggleState: EModalToggleState, component: EModalComponent): void;
  getUniqueUserIdForDeletion(id: string): void;
  userEditHandler(argv: IEditInfo): void;
  errorHandler(text: string): void;
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
  error: false,
  errorMessage: '',
};

const ErsContextProvider = ({ children }: IErsContextProviderProps) => {
  const [state, dispatch] = useReducer(ersReducer, initialAppState);

  useEffect(() => {
    const fetchEmployees = async () => {
      dispatch({ type: EActions.Loading, payload: 'show' });
      try {
        const response = await fetch('/api/employees');
        const { data, message }: IApiDataProps = await response.json();

        if (!response.ok) {
          errorHandler(message);
        } else {
          dispatch({ type: EActions.FetchEmployees, payload: data });
        }
      } catch (error: any) {
        errorHandler(error.message);
      } finally {
        dispatch({ type: EActions.Loading, payload: 'hide' });
      }
    };
    fetchEmployees();
  }, []);

  // event handlers
  // update employees state after 'POST' | 'PATCH' | 'DELETE' operations
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

  const userEditHandler = (argv: IEditInfo) => {
    modalHandler(EModalToggleState.show, EModalComponent.createUserForm);
    dispatch({ type: EActions.Editing });
    dispatch({ type: EActions.EditInfo, payload: argv });
  };

  const errorHandler = (text: string) => {
    dispatch({ type: EActions.Error, payload: 'show' });
    dispatch({ type: EActions.ErrorMessage, payload: text });
    setTimeout(() => {
      dispatch({ type: EActions.Error, payload: 'hide' });
    }, 2500);
  };

  const ersContextValues = {
    state,
    dispatch,
    updateEmployeesWithNewUserData,
    modalHandler,
    getUniqueUserIdForDeletion,
    userEditHandler,
    errorHandler,
  };

  return <ErsContext.Provider value={ersContextValues}>{children}</ErsContext.Provider>;
};

const useErsContext = () => useContext(ErsContext);

export { useErsContext, ErsContextProvider };
