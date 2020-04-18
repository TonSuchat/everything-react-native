export interface Signin {
  email: string;
  password: string;
  userToken: string;
}

export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";

interface SigninAction {
  type: typeof SIGNIN;
  payload: Signin;
}

interface SignoutAction {
  type: typeof SIGNOUT;
}

export type UserActionType = SigninAction | SignoutAction;

export interface UserState {
  userToken: string;
}
