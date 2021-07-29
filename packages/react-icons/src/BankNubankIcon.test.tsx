/* eslint-disable sort-imports */
import * as React from "react";
import { BankNubankIcon } from "./BankNubankIcon";
import { create } from "react-test-renderer";

describe("<BankNubankIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<BankNubankIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
