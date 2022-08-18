export interface IUserInfo {
  id: string;
  firstName: string;
  lastName: string;
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

export const enum EBackdropToggleState {
  hide = 'Hide',
  show = 'Show',
}

export const enum EModalComponent {
  createUserForm = 'CreateUserForm',
  confirmDeleteBox = 'ConfirmDeleteBox',
}

export interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IEditInfo extends IFormValues {
  id: string;
}
