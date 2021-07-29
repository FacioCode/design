/* eslint-disable sort-imports */
import * as React from "react";
import { MegaphoneIcon } from "./MegaphoneIcon";
import { create } from "react-test-renderer";

describe("<MegaphoneIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<MegaphoneIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
