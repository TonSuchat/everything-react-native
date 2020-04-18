import {
  UserActionType,
  SIGNIN_FETCHING,
  SIGNOUT,
  SINGIN_SUCCESS,
  SIGNIN_ERROR,
} from "./types";
import { signinApi } from "../../apis/userApi";

export const signin = (email: string, password: string): ((d: any) => void) => {
  return async (dispatch) => {
    dispatch({ type: SIGNIN_FETCHING });
    // make an api call for signin user and get token back
    const result = await signinApi(email, password);
    if (result.success) {
      dispatch({ type: SINGIN_SUCCESS, userToken: result.data });
    } else {
      dispatch({ type: SIGNIN_ERROR, error: result.error });
    }
  };
};

export const signout = (): UserActionType => {
  return {
    type: SIGNOUT,
  };
};
