/* eslint-disable sort-imports */
import * as React from "react";
import { BankCaixaIcon } from "./BankCaixaIcon";
import { create } from "react-test-renderer";

describe("<BankCaixaIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<BankCaixaIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
