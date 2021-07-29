/* eslint-disable sort-imports */
import * as React from "react";
import { BankVotorantimIcon } from "./BankVotorantimIcon";
import { create } from "react-test-renderer";

describe("<BankVotorantimIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<BankVotorantimIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
