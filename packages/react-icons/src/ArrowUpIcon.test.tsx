/* eslint-disable sort-imports */
import * as React from "react";
import { ArrowUpIcon } from "./ArrowUpIcon";
import { create } from "react-test-renderer";

describe("<ArrowUpIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<ArrowUpIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
