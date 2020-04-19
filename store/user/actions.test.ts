import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { apiServerURL } from "../../configs";
import fetchMock from "fetch-mock";
import expect from "expect";
import * as actions from "./actions";
import {
  SIGNOUT,
  SIGNIN_FETCHING,
  SINGIN_SUCCESS,
  SIGNIN_ERROR,
} from "./types";

const mockStore = configureMockStore([thunk]);

describe("user actions", () => {
  describe("async actions", () => {
    afterEach(() => {
      fetchMock.restore();
    });

    describe("signin action", () => {
      it("create SIGNIN_SUCCESS when signin done", async () => {
        const token = "dummy-token";
        fetchMock.postOnce(`${apiServerURL}/auth/login`, {
          ok: true,
          token,
        });
        const expectedActions = [
          { type: SIGNIN_FETCHING },
          { type: SINGIN_SUCCESS, userToken: token },
        ];
        const store = mockStore({ userToken: null });
        await store.dispatch(actions.signin("test@mail.com", "test"));
        expect(store.getActions()).toEqual(expectedActions);
      });

      it("create SIGNIN_ERROR when signin rejected", async () => {
        const errorMessage = "some errors occured";
        fetchMock.postOnce(`${apiServerURL}/auth/login`, {
          status: 400,
          body: { message: errorMessage },
        });
        const expectedActions = [
          { type: SIGNIN_FETCHING },
          { type: SIGNIN_ERROR, error: errorMessage },
        ];
        const store = mockStore({});
        await store.dispatch(actions.signin("test@mail.com", "test"));
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("signout action", () => {
  it("should return action properly", () => {
    const expected = { type: SIGNOUT };
    expect(actions.signout()).toEqual(expected);
  });
});
