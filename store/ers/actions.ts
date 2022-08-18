import { EModalComponent, EBackdropToggleState, IEditInfo, IUserInfo } from '../../ts_ui';

export const enum EActions {
  FetchEmployees = 'FETCH_EMPLOYEES',
  UpdateEmployees = 'UPDATE_EMPLOYEES',
  Loading = 'LOADING',
  BackdropActive = 'BACKDROP_ACTIVE',
  UniqueUserId = 'UNIQUE_USER_ID',
  Editing = 'EDITING',
  EditInfo = 'EDIT_INFO',
  Error = 'ERROR',
  ErrorMessage = 'ERROR_MESSAGE',
  SearchTerm = 'SEARCH_TERM',
  SortOption = 'SORT_OPTION',
}

export type Actions =
  | {
      type: EActions.FetchEmployees;
      payload: IUserInfo[];
    }
  | {
      type: EActions.UpdateEmployees;
      payload: IUserInfo[];
    }
  | {
      type: EActions.Loading;
      payload: 'show' | 'hide';
    }
  | {
      type: EActions.BackdropActive;
      payload: {
        toggleState: EBackdropToggleState;
        component: EModalComponent;
      };
    }
  | {
      type: EActions.UniqueUserId;
      payload: string;
    }
  | {
      type: EActions.Editing;
    }
  | {
      type: EActions.EditInfo;
      payload: IEditInfo;
    }
  | {
      type: EActions.Error;
      payload: 'show' | 'hide';
    }
  | {
      type: EActions.ErrorMessage;
      payload: string;
    }
  | {
      type: EActions.SearchTerm;
      payload: string;
    }
  | {
      type: EActions.SortOption;
      payload: string;
    };
