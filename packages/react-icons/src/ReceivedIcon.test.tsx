/* eslint-disable sort-imports */
import * as React from "react";
import { ReceivedIcon } from "./ReceivedIcon";
import { create } from "react-test-renderer";

describe("<ReceivedIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<ReceivedIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
