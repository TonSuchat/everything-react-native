import { UserState, UserActionType, SIGNIN, SIGNOUT } from "./types";

const initialState: UserState = {
  userToken: "",
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActionType
): UserState => {
  switch (action.type) {
    case SIGNIN:
      return { ...state, userToken: action.payload.userToken };
    case SIGNOUT:
      return { ...state, userToken: "" };
    default:
      return state;
  }
};
