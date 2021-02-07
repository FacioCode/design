import { createStyles, makeStyles } from "@material-ui/core";
import { customProperties } from "@faciocode/styles";

const styles = createStyles({
  colorGrey: customProperties.containerStyles.colorGrey,
});

export const useStyles = makeStyles(styles, { name: "FacioContainer" });
