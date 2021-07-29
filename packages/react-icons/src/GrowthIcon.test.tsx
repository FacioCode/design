/* eslint-disable sort-imports */
import * as React from "react";
import { GrowthIcon } from "./GrowthIcon";
import { create } from "react-test-renderer";

describe("<GrowthIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<GrowthIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
