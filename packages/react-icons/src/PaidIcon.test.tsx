/* eslint-disable sort-imports */
import * as React from "react";
import { PaidIcon } from "./PaidIcon";
import { create } from "react-test-renderer";

describe("<PaidIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<PaidIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
