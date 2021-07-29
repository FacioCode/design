/* eslint-disable sort-imports */
import * as React from "react";
import { TaxesIcon } from "./TaxesIcon";
import { create } from "react-test-renderer";

describe("<TaxesIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<TaxesIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
