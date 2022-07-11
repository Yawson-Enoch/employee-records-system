export interface IUserInfo {
  id: string;
  name: string;
  email: string;
}

export interface IUserInfoProp {
  employees: IUserInfo[];
}

export interface IApiDataProps {
  message: string;
  data: IUserInfo[];
}
