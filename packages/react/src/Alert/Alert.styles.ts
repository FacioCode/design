import { createStyles, makeStyles } from "@material-ui/core";
import { customProperties } from "@faciocode/styles";

const styles = createStyles({
  gutters: customProperties.alertStyles.gutters,
});

export const useStyles = makeStyles(styles, { name: "FacioAlert" });

export default useStyles;
