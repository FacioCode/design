import { createStyles, makeStyles } from "@material-ui/core";

const styles = createStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    whiteSpace: "nowrap",
  },
  label: {
    width: "100%",
    whiteSpace: "normal",
  },
  orientationHorizontal: {
    flexDirection: "row",
    width: "100%",
  },
  orientationVertical: {
    flexDirection: "column",
  },
});

export const useStyles = makeStyles(styles);
export default useStyles;
