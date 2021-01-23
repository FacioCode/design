import { createStyles, makeStyles } from "@material-ui/core";
import { customProperties } from "@faciocode/styles";

const styles = createStyles({
  root: {
    ...customProperties.bottomSheetStyles.root,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
});

export const useStyles = makeStyles(styles, { name: "BottomSheet" });
export default useStyles;
