import { createStyles, makeStyles } from "@material-ui/styles";

const styles = createStyles({
  root: {
    boxSizing: "border-box",
    "&:hover": {
      textDecoration: "none",
      "@media (hover:none)": {
        backgroundColor: "transparent",
      },
      "&$disabled": {
        backgroundColor: "transparent",
      },
    },
  },
  label: {
    alignItems: "inherit",
    display: "inherit",
    justifyContent: "inherit",
    width: "100%",
  },
});

export const useStyles = makeStyles(styles, { name: "FacioButton" });

export default useStyles;
