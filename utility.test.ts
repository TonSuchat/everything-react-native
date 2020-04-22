import { toggleDrawer } from "./utility";
import expect from "expect";

describe("toggleDrawer", () => {
  it("should do nothing when navigation is null or undefined", () => {
    const result = toggleDrawer(null);
    expect(result).toBe(undefined);
  });

  it("should invoke toggle drawer in navigation props", () => {
    const toggleDrawerFn = jest.fn();
    const navigation = { toggleDrawer: toggleDrawerFn };
    toggleDrawer(navigation);
    expect(toggleDrawerFn.mock.calls.length).toBe(1);
  });
});
