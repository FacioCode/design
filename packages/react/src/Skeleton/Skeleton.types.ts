import { Omit } from "@material-ui/types";
import { SkeletonProps as MaterialSkeletonProps } from "@material-ui/lab/Skeleton";

export type SkeletonProps = Omit<MaterialSkeletonProps, "css">;
