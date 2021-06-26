import { createStyles, makeStyles } from "@material-ui/core";

const styles = createStyles({
  root: {
    whiteSpace: "nowrap",
  },
});

export const useStyles = makeStyles(styles, { name: "Time" });
