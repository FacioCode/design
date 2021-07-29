/* eslint-disable sort-imports */
import * as React from "react";
import { LockIcon } from "./LockIcon";
import { create } from "react-test-renderer";

describe("<LockIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<LockIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
