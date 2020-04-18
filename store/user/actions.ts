import { UserActionType, SIGNIN, SIGNOUT } from "./types";

export const signin = (email: string, password: string): UserActionType => {
  return {
    type: SIGNIN,
    payload: { email, password, userToken: "dummy_token" },
  };
};

export const signout = (): UserActionType => {
  return {
    type: SIGNOUT,
  };
};
