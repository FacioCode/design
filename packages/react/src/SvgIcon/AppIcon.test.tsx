import * as React from "react";
import { AppIcon } from "@svg-icons/AppIcon";
import { create } from "react-test-renderer";

describe("<AppIcon /> component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<AppIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
