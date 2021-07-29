/* eslint-disable sort-imports */
import * as React from "react";
import { PigIcon } from "./PigIcon";
import { create } from "react-test-renderer";

describe("<PigIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<PigIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
