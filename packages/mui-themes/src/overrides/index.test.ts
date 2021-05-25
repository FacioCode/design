import { theme } from "../index";

describe("MuiToolbar", () => {
  it("should override regular class", () => {
    expect(theme.overrides.MuiToolbar).toHaveProperty("regular");
  });
});
