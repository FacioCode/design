/* eslint-disable sort-imports */
import * as React from "react";
import { HealthIcon } from "./HealthIcon";
import { create } from "react-test-renderer";

describe("<HealthIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<HealthIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
