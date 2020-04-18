import {
  UserState,
  UserActionType,
  SIGNIN_FETCHING,
  SIGNOUT,
  SINGIN_SUCCESS,
  SIGNIN_ERROR,
} from "./types";

const initialState: UserState = {
  userToken: "",
  signinFetching: false,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActionType
): UserState => {
  switch (action.type) {
    case SIGNIN_FETCHING:
      return { ...state, signinFetching: true, error: "" };
    case SINGIN_SUCCESS:
      return {
        ...state,
        signinFetching: false,
        userToken: action.userToken,
        error: "",
      };
    case SIGNIN_ERROR:
      return { ...state, signinFetching: false, error: action.error };
    case SIGNOUT:
      return { ...state, userToken: "" };
    default:
      return state;
  }
};
