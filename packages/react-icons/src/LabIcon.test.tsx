/* eslint-disable sort-imports */
import * as React from "react";
import { LabIcon } from "./LabIcon";
import { create } from "react-test-renderer";

describe("<LabIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<LabIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
