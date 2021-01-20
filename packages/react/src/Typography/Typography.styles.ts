import { customProperties } from "@faciocode/styles";
import { makeStyles } from "@material-ui/core";

const styles = {
  colorInverse: customProperties.typographyStyles.colorInverse,
};

export const useStyles = makeStyles(styles, { name: "FacioTypography" });
export default useStyles;
