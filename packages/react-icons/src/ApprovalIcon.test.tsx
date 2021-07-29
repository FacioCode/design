/* eslint-disable sort-imports */
import * as React from "react";
import { ApprovalIcon } from "./ApprovalIcon";
import { create } from "react-test-renderer";

describe("<ApprovalIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<ApprovalIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
