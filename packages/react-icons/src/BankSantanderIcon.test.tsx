/* eslint-disable sort-imports */
import * as React from "react";
import { BankSantanderIcon } from "./BankSantanderIcon";
import { create } from "react-test-renderer";

describe("<BankSantanderIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<BankSantanderIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
