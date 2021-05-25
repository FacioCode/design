import { theme } from "../index";

describe("MuiToolbar", () => {
  it("should override root class", () => {
    expect(theme.overrides.MuiToolbar).toHaveProperty("root");
  });
});
