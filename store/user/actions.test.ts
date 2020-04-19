import * as actions from "./actions";
import { SIGNOUT } from "./types";

describe("signout action", () => {
  it("should return action properly", () => {
    const expected = { type: SIGNOUT };
    expect(actions.signout()).toEqual(expected);
  });
});
