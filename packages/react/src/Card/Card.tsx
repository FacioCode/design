import * as React from "react";
import {
  CardElement,
  CardProps as Props,
  Card as UnstyledCard,
} from "@faciocode/react-unstyled";
import { Paper } from "../Paper";
import type { StyledProps } from "../StyledProps";
import { useStyles } from "./Card.styles";

export type CardProps = StyledProps<Props>;

const renderer = (props: CardProps, ref: CardProps["ref"]) => {
  const classes = useStyles();


  return <UnstyledCard {...props} component={Paper} ref={ref} classes={classes} />;
};

export const Card = React.forwardRef<CardElement, CardProps>(renderer);
Card.displayName = "Card";

export default Card;
