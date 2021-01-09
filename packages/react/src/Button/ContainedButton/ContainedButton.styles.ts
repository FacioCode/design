import { createStyles, makeStyles } from "@material-ui/core";
import { customProperties } from "@faciocode/styles";

const styles = createStyles({

  /**
   * Styles applied to the root element if `color="danger"`
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
   * Styles applied to the root element if `color="warning"`
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

export const useStyles = makeStyles(styles, { name: "FacioContainedButton" });
export default useStyles;
