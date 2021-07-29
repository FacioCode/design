/* eslint-disable sort-imports */
import * as React from "react";
import { KeyboardArrowDownIcon } from "./KeyboardArrowDownIcon";
import { create } from "react-test-renderer";

describe("<KeyboardArrowDownIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<KeyboardArrowDownIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
