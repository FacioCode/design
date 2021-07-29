/* eslint-disable sort-imports */
import * as React from "react";
import { DoubleIcon } from "./DoubleIcon";
import { create } from "react-test-renderer";

describe("<DoubleIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<DoubleIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
