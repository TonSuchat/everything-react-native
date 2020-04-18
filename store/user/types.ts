export const SIGNIN_FETCHING = "SIGNIN_FETCHING";
export const SINGIN_SUCCESS = "SINGIN_SUCCESS";
export const SIGNIN_ERROR = "SIGNIN_ERROR";

export const SIGNOUT = "SIGNOUT";

interface SigninAction {
  type: typeof SIGNIN_FETCHING | typeof SINGIN_SUCCESS | typeof SIGNIN_ERROR;
  userToken: string;
  error?: string;
}

interface SignoutAction {
  type: typeof SIGNOUT;
}

export type UserActionType = SigninAction | SignoutAction;

export interface UserState {
  userToken: string;
  signinFetching: boolean;
  error?: string;
}
