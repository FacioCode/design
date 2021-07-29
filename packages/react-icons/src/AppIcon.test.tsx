/* eslint-disable sort-imports */
import * as React from "react";
import { AppIcon } from "./AppIcon";
import { create } from "react-test-renderer";

describe("<AppIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<AppIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
