import { createStyles } from "@material-ui/styles";

const html = {
  MozOsxFontSmoothing: "grayscale",
  MsTextSizeAdjust: "100%",
  WebkitFontSmoothing: "antialiased",
  WebkitTextSizeAdjust: "100%",
  boxSizing: "border-box",
  fontSize: "var(--component-baseline-html-font-size)",
  lineHeight: "var(--component-baseline-html-line-height)",
};

const body = {
  backgroundColor: "var(--component-baseline-body-background-color)",
  color: "var(--component-baseline-body-color)",
  fontFamily: "var(--component-baseline-body-font-family)",
  fontSize: "var(--component-baseline-body-font-size)",
  fontWeight: "var(--component-baseline-body-font-weight)",
  lineHeight: "var(--component-baseline-body-line-height)",
  "@media print": {
    backgroundColor: "var(--component-baseline-media-print-color)",
  },
};

export const styles = createStyles({
  "@global": {
    html,
    "*, *::before, *::after": {
      boxSizing: "inherit",
    },
    "b, strong": {
      fontWeight: "var(--component-baseline-bold-font-weight)",
    },
    body: {
      margin: "var(--component-baseline-body-margin)",
      minHeight: "100vh",
      scrollBehavior: "smooth",
      ...body,
      "&::backdrop": {
        backgroundColor: "var(--component-baseline-backdrop-background-color)",
      },
    },
    "@media (prefers-reduced-motion: reduce)": {
      "*": {
        animationDuration: "0.01ms !important",
        animationIterationCount: "1 !important",
        transitionDuration: "0.01ms !important",
        scrollBehavior: "auto !important",
      },
    },
  },
});
