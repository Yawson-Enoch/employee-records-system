import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from 'react';
import {
  EModalComponent,
  EBackdropToggleState,
  IApiDataProps,
  IEditInfo,
  IUserInfo,
} from '../../ts_ui';
import { Actions, EActions } from './actions';
import { ersReducer } from './reducer';

export interface IErsAppState {
  employees: IUserInfo[];
  loading: boolean;
  backdropActive: boolean;
  createUserFormActive: boolean;
  confirmDeleteBoxActive: boolean;
  uniqueUserId: string;
  editing: boolean;
  editInfo: IEditInfo;
  error: boolean;
  errorMessage: string;
  searchTerm: string;
  sortOption: string;
}

interface IErsContextProps {
  state: IErsAppState;
  dispatch: Dispatch<Actions>;
  updateEmployeesWithNewUserData(data: IUserInfo[]): void;
  backdropAndmodalsHandler(toggleState: EBackdropToggleState, component: EModalComponent): void;
  getUniqueUserIdForDeletion(id: string): void;
  userEditHandler(argv: IEditInfo): void;
  errorHandler(text: string): void;
  searchTermHandler(text: string): void;
  sortOptionHandler(text: string): void;
}

interface IErsContextProviderProps {
  children: ReactNode;
}

const ErsContext = createContext({} as IErsContextProps);

// initial app state
const initialAppState: IErsAppState = {
  employees: [] as IUserInfo[],
  loading: false,
  backdropActive: false,
  createUserFormActive: false,
  confirmDeleteBoxActive: false,
  uniqueUserId: '',
  editing: false,
  editInfo: {} as IEditInfo,
  error: false,
  errorMessage: '',
  searchTerm: '',
  sortOption: '',
};

const ErsContextProvider = ({ children }: IErsContextProviderProps) => {
  const [state, dispatch] = useReducer(ersReducer, initialAppState);

  let url: string = '/api/employees';
  if (state.searchTerm) {
    url = `/api/employees/search/${state.searchTerm}`;
  }
  if (state.sortOption) {
    url = `/api/employees/sort/${state.sortOption}`;
  }

  useEffect(() => {
    const fetchEmployees = async () => {
      dispatch({
        type: EActions.Loading,
        payload: `${state.searchTerm || state.sortOption ? 'hide' : 'show'}`,
      });
      try {
        const response = await fetch(url);

        const { data, message }: IApiDataProps = await response.json();

        if (!response.ok) {
          throw new Error(message);
        }

        dispatch({ type: EActions.FetchEmployees, payload: data });
      } catch (error: any) {
        errorHandler(error.message);
      } finally {
        dispatch({ type: EActions.Loading, payload: 'hide' });
      }
    };
    fetchEmployees();
  }, [state.searchTerm, state.sortOption]);

  // event handlers
  // update employees state after 'POST' | 'PATCH' | 'DELETE' operations
  const updateEmployeesWithNewUserData = (data: IUserInfo[]) => {
    dispatch({ type: EActions.UpdateEmployees, payload: data });
  };

  const backdropAndmodalsHandler = (
    toggleState: EBackdropToggleState,
    component: EModalComponent
  ) => {
    dispatch({
      type: EActions.BackdropActive,
      payload: {
        toggleState,
        component,
      },
    });
  };

  const getUniqueUserIdForDeletion = async (id: string) => {
    backdropAndmodalsHandler(EBackdropToggleState.show, EModalComponent.confirmDeleteBox);
    dispatch({ type: EActions.UniqueUserId, payload: id });
  };

  const userEditHandler = (argv: IEditInfo) => {
    backdropAndmodalsHandler(EBackdropToggleState.show, EModalComponent.createUserForm);
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

  const searchTermHandler = (text: string) => {
    dispatch({ type: EActions.SearchTerm, payload: text });
  };

  const sortOptionHandler = (text: string) => {
    dispatch({ type: EActions.SortOption, payload: text });
  };

  const ersContextValues = {
    state,
    dispatch,
    updateEmployeesWithNewUserData,
    backdropAndmodalsHandler,
    getUniqueUserIdForDeletion,
    userEditHandler,
    errorHandler,
    searchTermHandler,
    sortOptionHandler,
  };

  return <ErsContext.Provider value={ersContextValues}>{children}</ErsContext.Provider>;
};

const useErsContext = () => useContext(ErsContext);

export { useErsContext, ErsContextProvider };
