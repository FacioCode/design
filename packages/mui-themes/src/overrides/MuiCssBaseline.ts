import { customProperties } from "@faciocode/styles";

export const html = {
  ...customProperties.baselineStyles.html,
  MsTextSizeAdjust: "100%",
  WebkitTextSizeAdjust: "100%",
};

export const body = {
  "@media print": customProperties.baselineStyles.mediaPrint,
};

export const reducedMotion = {
  animationDuration: "0.01ms !important",
  animationIterationCount: "1 !important",
  transitionDuration: "0.01ms !important",
};

export const MuiCssBaseline = {
  "@global": {
    "@media (prefers-reduced-motion: reduce)": {
      "*, body": {
        ...reducedMotion,
        scrollBehavior: "auto",
      },
    },
    body: {
      ...body,
      minHeight: "100vh",
    },
    html,
    "strong, b": customProperties.baselineStyles.bold,
  },
};
