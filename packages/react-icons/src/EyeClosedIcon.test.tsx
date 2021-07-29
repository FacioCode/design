/* eslint-disable sort-imports */
import * as React from "react";
import { EyeClosedIcon } from "./EyeClosedIcon";
import { create } from "react-test-renderer";

describe("<EyeClosedIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<EyeClosedIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
