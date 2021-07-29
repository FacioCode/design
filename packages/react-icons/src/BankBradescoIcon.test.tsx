/* eslint-disable sort-imports */
import * as React from "react";
import { BankBradescoIcon } from "./BankBradescoIcon";
import { create } from "react-test-renderer";

describe("<BankBradescoIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<BankBradescoIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
