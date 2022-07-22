import { EModalComponent, EModalToggleState, IEditInfo, IUserInfo } from '../../ts_ui';

export const enum EActions {
  FetchEmployees = 'FETCH_EMPLOYEES',
  UpdateEmployees = 'UPDATE_EMPLOYEES',
  Loading = 'LOADING',
  ModalActive = 'MODAL_ACTIVE',
  UniqueUserId = 'UNIQUE_USER_ID',
  Editing = 'EDITING',
  EditInfo = 'EDIT_INFO',
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
    }
  | {
      type: EActions.ModalActive;
      payload: {
        toggleState: EModalToggleState;
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
    };
