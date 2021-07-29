/* eslint-disable sort-imports */
import * as React from "react";
import { VideoIcon } from "./VideoIcon";
import { create } from "react-test-renderer";

describe("<VideoIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<VideoIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
