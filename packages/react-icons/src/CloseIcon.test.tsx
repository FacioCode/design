/* eslint-disable sort-imports */
import * as React from "react";
import { CloseIcon } from "./CloseIcon";
import { create } from "react-test-renderer";

describe("<CloseIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<CloseIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
