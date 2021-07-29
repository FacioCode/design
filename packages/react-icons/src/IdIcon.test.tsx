/* eslint-disable sort-imports */
import * as React from "react";
import { IdIcon } from "./IdIcon";
import { create } from "react-test-renderer";

describe("<IdIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<IdIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
