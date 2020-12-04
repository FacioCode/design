import { createStyles, makeStyles } from "@material-ui/styles";

const styles = createStyles({
  root: {

    /**
     * Reset
     */
    "-moz-appearance": "none",

    /**
     * Reset
     */
    "-webkit-appearance": "none",
    alignItems: "center",

    /**
     * Reset default value
     */
    backgroundColor: "transparent",
    border: 0,
    borderRadius: 0,
    color: "inherit",
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",

    /**
     * Remove the margin in Safari
     */
    margin: 0,

    /**
     * Disable the focus ring for mouse, touch and keyboard users
     */
    outline: 0,
    padding: 0,
    position: "relative",
    textDecoration: "none",
    userSelect: "none",
    verticalAlign: "middle",
    WebkitTapHighlightColor: "transparent",
    "&::-moz-focus-inner": {

      /**
       * Remove Firefox dotted outline.
       */
      borderStyle: "none",
    },
    "&$disabled": {
      cursor: "default",

      /**
       * Disable link interactions
       */
      pointerEvents: "none",
    },
    "@media print": {
      colorAdjust: "exact",
    },
  },
});

export const useStyles = makeStyles(styles, { name: "FacioButtonBase" });

export default useStyles;
