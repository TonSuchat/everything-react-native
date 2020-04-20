import expect from "expect";
import { initialState, userReducer } from "./reducers";
import {
  UserState,
  SIGNIN_FETCHING,
  SINGIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNOUT,
} from "./types";

describe("user reducers", () => {
  describe("signin", () => {
    it("should get state properly when dispatch SIGNIN_FETCHING", () => {
      const expected = {
        ...initialState,
        signinFetching: true,
        error: "",
      } as UserState;
      const result = userReducer(undefined, {
        type: SIGNIN_FETCHING,
        userToken: "",
        error: "",
      });
      expect(result).toEqual(expected);
    });

    it("should get state properly when dispatch SIGNIN_SUCCESS", () => {
      const token = "test-token";
      const expected = {
        ...initialState,
        signinFetching: false,
        error: "",
        userToken: token,
      } as UserState;
      const result = userReducer(undefined, {
        type: SINGIN_SUCCESS,
        userToken: token,
      });
      expect(result).toEqual(expected);
    });

    it("should get state properly when dispatch SIGNIN_ERROR", () => {
      const errorMessage = "test error message";
      const expected = {
        ...initialState,
        signinFetching: false,
        error: errorMessage,
      } as UserState;
      const result = userReducer(undefined, {
        type: SIGNIN_ERROR,
        userToken: "",
        error: errorMessage,
      });
      expect(result).toEqual(expected);
    });
  });

  describe("signout", () => {
    it("should gets state properly when dispatch SIGNOUT", () => {
      const expected = { ...initialState, userToken: "" };
      const result = userReducer(undefined, { type: SIGNOUT });
      expect(result).toEqual(expected);
    });
  });
});
