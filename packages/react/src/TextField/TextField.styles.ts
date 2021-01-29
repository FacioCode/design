import { createStyles, makeStyles } from "@material-ui/core";
import type { CSSProperties } from "@material-ui/styles";
import { customProperties } from "@faciocode/styles";

const styles = createStyles({
  labelLarge: {
    ...customProperties.formLabelStyles.root as CSSProperties,
    pointerEvents: "auto",
    position: "static",
  },
  large: customProperties.inputBaseStyles.large,
  inputLarge: {
    ...customProperties.inputBaseStyles.inputLarge,
    ...customProperties.filledInputStyles.inputLarge,
  },
});

export const useStyles = makeStyles(styles, { name: "FacioTextField" });
export default useStyles;
