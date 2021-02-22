import { createStyles, makeStyles } from "@material-ui/core";
import { customProperties } from "@faciocode/styles";

const styles = createStyles({
  closeButton: {
    ...customProperties.dialogStyles.closeButton,
    position: "absolute",
  },
});

export const useStyles = makeStyles(styles, { name: "FacioDialog" });
