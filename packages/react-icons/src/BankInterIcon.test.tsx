/* eslint-disable sort-imports */
import * as React from "react";
import { BankInterIcon } from "./BankInterIcon";
import { create } from "react-test-renderer";

describe("<BankInterIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<BankInterIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
