/* eslint-disable sort-imports */
import * as React from "react";
import { FreeIcon } from "./FreeIcon";
import { create } from "react-test-renderer";

describe("<FreeIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<FreeIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
