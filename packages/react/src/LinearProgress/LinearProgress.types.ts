import {
  LinearProgressProps as MaterialLinearProgressProps,
} from "@material-ui/core/LinearProgress";
import { Omit } from "@material-ui/types";

export type LinearProgressProps = Omit<MaterialLinearProgressProps, "css">;
