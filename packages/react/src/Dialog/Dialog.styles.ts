import { createStyles, makeStyles } from "@material-ui/core";
import { sizeTokens } from "@faciocode/styles";

const styles = createStyles({
  closeButton: {
    position: "absolute",
    right: sizeTokens.baseDoubleQuarter,
    top: sizeTokens.baseDoubleQuarter,
  },
});

export const useStyles = makeStyles(styles, { name: "FacioDialog" });
