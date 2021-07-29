/* eslint-disable sort-imports */
import * as React from "react";
import { KeyboardArrowRightIcon } from "./KeyboardArrowRightIcon";
import { create } from "react-test-renderer";

describe("<KeyboardArrowRightIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<KeyboardArrowRightIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
