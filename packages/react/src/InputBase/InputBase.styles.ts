import { createStyles, makeStyles } from "@material-ui/core";
import { customProperties } from "@faciocode/styles";

const styles = createStyles({
  inputLarge: customProperties.inputBaseStyles.inputLarge,
  inputMedium: customProperties.inputBaseStyles.inputMedium,
  large: customProperties.inputBaseStyles.large,
  medium: customProperties.inputBaseStyles.medium,
});

export const useStyles = makeStyles(styles, { name: "FacioInputBase" });
export default useStyles;
