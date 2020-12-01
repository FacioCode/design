import * as React from "react";
import {
  PaperElement,
  PaperProps as Props,
  Paper as UnstyledPaper,
} from "@faciocode/react-unstyled";
import { StyledProps } from "../StyledProps";
import { useStyles } from "./Paper.styles";

export type PaperProps = StyledProps<Props>;

const renderer = (props: PaperProps, ref: PaperProps["ref"]) => (
  <UnstyledPaper {...props} ref={ref} classes={useStyles()} />
);

export const Paper = React.forwardRef<PaperElement, PaperProps>(renderer);
Paper.displayName = "Paper";

export default Paper;
