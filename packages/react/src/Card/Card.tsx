import * as React from "react";
import { CardElement, CardProps as Props, Card as UnstyledCard } from "@faciocode/react-unstyled";
import { useStyles } from "./Card.styles";

export type CardProps = Omit<Props, "classes" | "className">;

const renderer = (props: CardProps, ref: CardProps["ref"]) => (
  <UnstyledCard {...props} ref={ref} classes={useStyles()} />
);

export const Card = React.forwardRef<CardElement, CardProps>(renderer);

export default Card;
