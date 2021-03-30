import { createStyles, makeStyles } from "@material-ui/core";

const styles = createStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
  },
});

export const useStyles = makeStyles(styles);
export default useStyles;
