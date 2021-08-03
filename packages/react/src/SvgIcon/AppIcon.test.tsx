import * as React from "react";

import { AppIcon } from "./AppIcon";

import { create } from "react-test-renderer";
import { expect } from "@jest/globals";

describe("<AppIcon /> component", () => {
  it("should have display name", () => {
    expect(AppIcon).toHaveProperty("displayName", "AppIcon");
  });

  it("should match snapshot", () => {
    const testRenderer = create(<AppIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
