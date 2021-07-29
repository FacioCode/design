/* eslint-disable sort-imports */
import * as React from "react";
import { WarningIcon } from "./WarningIcon";
import { create } from "react-test-renderer";

describe("<WarningIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<WarningIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
