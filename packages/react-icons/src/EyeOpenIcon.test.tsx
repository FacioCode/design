/* eslint-disable sort-imports */
import * as React from "react";
import { EyeOpenIcon } from "./EyeOpenIcon";
import { create } from "react-test-renderer";

describe("<EyeOpenIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<EyeOpenIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
