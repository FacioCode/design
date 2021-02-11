import { body, html, reducedMotion } from "./MuiCssBaseline";
import { customProperties } from "@faciocode/styles";

export const MuiScopedCssBaseline = {
  root: {
    ...html,
    ...body,
    "& strong, & b": customProperties.baselineStyles.bold,
    "@media (prefers-reduced-motion: reduce)": {
      "&, & *": reducedMotion,
    },
  },
};
