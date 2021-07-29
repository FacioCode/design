/* eslint-disable sort-imports */
import * as React from "react";
import { KeyboardArrowLeftIcon } from "./KeyboardArrowLeftIcon";
import { create } from "react-test-renderer";

describe("<KeyboardArrowLeftIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<KeyboardArrowLeftIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
