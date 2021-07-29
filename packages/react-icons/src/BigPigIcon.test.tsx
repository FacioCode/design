/* eslint-disable sort-imports */
import * as React from "react";
import { BigPigIcon } from "./BigPigIcon";
import { create } from "react-test-renderer";

describe("<BigPigIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<BigPigIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
