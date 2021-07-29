/* eslint-disable sort-imports */
import * as React from "react";
import { CalendarIcon } from "./CalendarIcon";
import { create } from "react-test-renderer";

describe("<CalendarIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<CalendarIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
