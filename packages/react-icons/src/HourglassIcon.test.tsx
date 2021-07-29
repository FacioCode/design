/* eslint-disable sort-imports */
import * as React from "react";
import { HourglassIcon } from "./HourglassIcon";
import { create } from "react-test-renderer";

describe("<HourglassIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<HourglassIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
