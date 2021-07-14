import { createStyles, makeStyles } from "@material-ui/core";
import { customProperties } from "@faciocode/styles";

const styles = createStyles({
  colorError: customProperties.listItemIconStyles.colorError,
});

export const useStyles = makeStyles(styles, { name: "FacioListItemIcon" });
