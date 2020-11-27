import * as React from "react";
import Document from "./components/Document";
import { render } from "react-sketchapp";

export default () => {
  // eslint-disable-next-line no-undef
  render(<Document />, context.document.currentPage());
};
