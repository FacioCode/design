import { customProperties } from "@faciocode/styles";
import { makeStyles } from "@material-ui/core";

const styles = {
  colorInverse: customProperties.typographyStyles.colorInverse,
  flexGrow: { flexGrow: 1 },
};

export const useStyles = makeStyles(styles, { name: "FacioTypography" });
export default useStyles;
