/* eslint-disable sort-imports */
import * as React from "react";
import { WalletIcon } from "./WalletIcon";
import { create } from "react-test-renderer";

describe("<WalletIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<WalletIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
