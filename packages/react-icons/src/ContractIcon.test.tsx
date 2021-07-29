/* eslint-disable sort-imports */
import * as React from "react";
import { ContractIcon } from "./ContractIcon";
import { create } from "react-test-renderer";

describe("<ContractIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<ContractIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
