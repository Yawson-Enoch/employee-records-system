export interface IUserInfo {
  id: string;
  name: string;
  email: string;
  addedTime: string;
  addedDate: string;
}

export interface IUserInfoProp {
  employees: IUserInfo[];
}

export interface IApiDataProps {
  message: string;
  data: IUserInfo[];
}

export const enum EModalToggleState {
  hide = 'Hide',
  show = 'Show',
}

export const enum EModalComponent {
  createUserForm = 'CreateUserForm',
  confirmDeleteBox = 'ConfirmDeleteBox',
}
