import { customProperties } from "@faciocode/styles";
import { makeStyles } from "@material-ui/core";

const styles = {
  focusVisible: customProperties.iconButtonStyles.focusVisible,
};

export const useStyles = makeStyles(styles, { name: "FacioIconButton" });
export default useStyles;
