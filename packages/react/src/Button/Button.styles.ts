import { createStyles, makeStyles } from "@material-ui/core";
import { customProperties } from "@faciocode/styles";

const styles = createStyles({

  /**
   * Styles applied to the root element if `variant="contained"` and `color="danger"`
   */
  containedDanger: {
    ...customProperties.containedButtonStyles.danger,
    "&:hover": customProperties.containedButtonStyles.dangerHover,

    /**
     * Active must always be after hover
     */
    "&:active": customProperties.containedButtonStyles.dangerPressed,
  },

  /**
   * Styles applied to the root element if `variant="contained"` and `color="warning"`
   */
  containedWarning: {
    ...customProperties.containedButtonStyles.warning,
    "&:hover": customProperties.containedButtonStyles.warningHover,

    /**
     * Active must always be after hover
     */
    "&:active": customProperties.containedButtonStyles.warningPressed,
  },
});

export const useStyles = makeStyles(styles, { name: "FacioButton" });
export default useStyles;
