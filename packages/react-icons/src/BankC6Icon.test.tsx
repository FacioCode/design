/* eslint-disable sort-imports */
import * as React from "react";
import { BankC6Icon } from "./BankC6Icon";
import { create } from "react-test-renderer";

describe("<BankC6Icon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<BankC6Icon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
