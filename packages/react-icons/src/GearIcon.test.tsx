/* eslint-disable sort-imports */
import * as React from "react";
import { GearIcon } from "./GearIcon";
import { create } from "react-test-renderer";

describe("<GearIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<GearIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
