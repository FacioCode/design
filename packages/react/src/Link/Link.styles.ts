import { customProperties } from "@faciocode/styles";
import { makeStyles } from "@material-ui/core";

const styles = {
  colorDefault: {
    ...customProperties.linkButtonStyles.default,
  },
};

export const useStyles = makeStyles(styles, { name: "FacioLink" });
export default useStyles;
