/* eslint-disable sort-imports */
import * as React from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { create } from "react-test-renderer";

describe("<WhatsAppIcon component", () => {
  it("should match snapshot", () => {
    const testRenderer = create(<WhatsAppIcon />);

    expect(testRenderer).toMatchSnapshot();
  });
});
