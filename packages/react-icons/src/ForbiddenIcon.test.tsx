/* eslint-disable sort-imports */
import * as React from "react";
import { ForbiddenIcon } from "./ForbiddenIcon";
import { create } from "react-test-renderer";

describe("<ForbiddenIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<ForbiddenIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
