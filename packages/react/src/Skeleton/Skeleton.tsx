import * as React from "react";
import { Skeleton as MaterialSkeleton } from "@material-ui/lab";
import { SkeletonProps } from "./Skeleton.types";

type Render = (props: SkeletonProps, ref: SkeletonProps["ref"]) => JSX.Element;

const render : Render = (props, ref) => (
  <MaterialSkeleton {...props} ref={ref} />
);

export const Skeleton = React.forwardRef<unknown, SkeletonProps>(render);
Skeleton.displayName = "Skeleton";

export default Skeleton;
