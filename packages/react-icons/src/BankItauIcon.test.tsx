/* eslint-disable sort-imports */
import * as React from "react";
import { BankItauIcon } from "./BankItauIcon";
import { create } from "react-test-renderer";

describe("<BankItauIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<BankItauIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
