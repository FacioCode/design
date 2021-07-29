/* eslint-disable sort-imports */
import * as React from "react";
import { SafeIcon } from "./SafeIcon";
import { create } from "react-test-renderer";

describe("<SafeIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<SafeIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
