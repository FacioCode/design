import type { ContainerProps as MaterialContainerProps } from "@material-ui/core/Container";

export type ContainerProps = Omit<MaterialContainerProps, "css">;
