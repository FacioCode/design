/* eslint-disable sort-imports */
import * as React from "react";
import { SearchIcon } from "./SearchIcon";
import { create } from "react-test-renderer";

describe("<SearchIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<SearchIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
