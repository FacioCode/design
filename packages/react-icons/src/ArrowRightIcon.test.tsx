/* eslint-disable sort-imports */
import * as React from "react";
import { ArrowRightIcon } from "./ArrowRightIcon";
import { create } from "react-test-renderer";

describe("<ArrowRightIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<ArrowRightIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
