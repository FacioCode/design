import { createStyles, makeStyles } from "@material-ui/styles";
import { styles as typographyStyles } from "../Typography/Typography.styles";

const style = createStyles({
  root: {
    // Mimics the default input display property used by browsers for an input.
    ...typographyStyles.bodyText1,
    alignItems: "center",
    boxSizing: "border-box",
    color: "var(--component-input-root-color)",
    cursor: "text",
    display: "inline-flex",
    lineHeight: "var(--component-input-root-line-height)",
    position: "relative",
  },
  input: {
    background: "none",
    border: "var(--component-input-input-border-width)",
    boxSizing: "border-box",
    color: "currentColor",
    display: "block",
    font: "inherit",
    height: "var(--component-input-input-height)",
    letterSpacing: "inherit",
    margin: "var(--component-input-input-margin)",
    paddingBottom: "calc(var(--component-input-input-padding-bottom) * 1px)",
    paddingLeft: "calc(var(--component-input-input-padding-left) * 1px)",
    paddingRight: "calc(var(--component-input-input-padding-right) * 1px)",
    paddingTop: "calc(var(--component-input-input-padding-top) * 1px)",
    WebkitTapHighlightColor: "transparent",
    width: "100%",
  },
});

export const useStyles = makeStyles(style, { name: "FacioInputBase" });

export default useStyles;
