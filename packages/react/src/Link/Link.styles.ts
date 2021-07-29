import { createStyles, makeStyles } from "@material-ui/core";
import { customProperties } from "@faciocode/styles";

const styles = createStyles({
  colorDefault: {
    ...customProperties.linkButtonStyles.default,
  },
});

export const useStyles = makeStyles(styles, { name: "FacioLink" });
export default useStyles;
