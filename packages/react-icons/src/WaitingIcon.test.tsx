/* eslint-disable sort-imports */
import * as React from "react";
import { WaitingIcon } from "./WaitingIcon";
import { create } from "react-test-renderer";

describe("<WaitingIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<WaitingIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
