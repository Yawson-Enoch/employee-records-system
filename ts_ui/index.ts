export interface IUserInfo {
  id: string;
  name: string;
  email: string;
}

export interface IUserInfoProp {
  employees: IUserInfo[];
}
