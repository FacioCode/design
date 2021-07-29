/* eslint-disable sort-imports */
import * as React from "react";
import { BankBbIcon } from "./BankBbIcon";
import { create } from "react-test-renderer";

describe("<BankBbIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<BankBbIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
