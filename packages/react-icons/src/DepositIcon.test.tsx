/* eslint-disable sort-imports */
import * as React from "react";
import { DepositIcon } from "./DepositIcon";
import { create } from "react-test-renderer";

describe("<DepositIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<DepositIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
