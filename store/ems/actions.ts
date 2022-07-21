import { EModalComponent, EModalToggleState, IUserInfo } from '../../ts_ui';

export const enum EActions {
  FetchEmployees = 'FETCH_EMPLOYEES',
  UpdateEmployees = 'UPDATE_EMPLOYEES',
  DeleteEmployee = 'DELETE_EMPLOYEE',
  Loading = 'LOADING',
  ModalActive = 'MODAL_ACTIVE',
  UniqueUserId = 'UNIQUE_USER_ID',
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
      type: EActions.DeleteEmployee;
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
    };