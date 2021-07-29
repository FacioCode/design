/* eslint-disable sort-imports */
import * as React from "react";
import { MapIcon } from "./MapIcon";
import { create } from "react-test-renderer";

describe("<MapIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<MapIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
