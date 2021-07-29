/* eslint-disable sort-imports */
import * as React from "react";
import { ThunderboltIcon } from "./ThunderboltIcon";
import { create } from "react-test-renderer";

describe("<ThunderboltIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<ThunderboltIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
