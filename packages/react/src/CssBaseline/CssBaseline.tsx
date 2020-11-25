import "@faciocode/styles/dist/index.css";
import * as React from "react";
import { Props } from "./Props";
import { styles } from "./CssBaseline.styles";
import { withStyles } from "@material-ui/styles";

export { Props as CssBaselineProps } from "./Props";

const PureCssBaseline : React.FunctionComponent<Props> = (props: Props) => {
  const { children = null } = props;


  return <React.Fragment>{children}</React.Fragment>;
};

export const CssBaseline = withStyles(styles, { name: "FacioCssBaseline" })(PureCssBaseline);

export default CssBaseline;
