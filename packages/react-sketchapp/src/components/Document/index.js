import * as React from "react";
import { Artboard, Text } from "react-sketchapp";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Document = () => (
  <Artboard name={"Artboard"}>
    <Text>Hello Sketch</Text>
  </Artboard>
);

Document.propTypes = {};

export default Document;
