/* eslint-disable sort-imports */
import * as React from "react";
import { PlayIcon } from "./PlayIcon";
import { create } from "react-test-renderer";

describe("<PlayIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<PlayIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
