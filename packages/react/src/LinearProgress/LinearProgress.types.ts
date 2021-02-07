import {
  LinearProgressProps as MaterialLinearProgressProps,
} from "@material-ui/core/LinearProgress";

export type LinearProgressProps = Omit<MaterialLinearProgressProps, "css">;
