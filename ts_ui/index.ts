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
