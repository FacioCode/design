import * as React from "react";
import {
  PaperElement,
  PaperProps as Props,
  Paper as UnstyledPaper,
} from "@faciocode/react-unstyled";
import { StyledProps } from "../StyledProps";
import { useStyles } from "./Paper.styles";

export type PaperProps = StyledProps<Props>;

const render = (props: PaperProps, ref: PaperProps["ref"]) => {
  const classes = useStyles();


  return <UnstyledPaper {...props} ref={ref} classes={classes} />;
};

export const Paper = React.forwardRef<PaperElement, PaperProps>(render);
Paper.displayName = "Paper";

export default Paper;
