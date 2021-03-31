import { createStyles, makeStyles } from "@material-ui/core";
import { customProperties } from "@faciocode/styles";

const styles = createStyles({
  endAdornment: customProperties.currencyFieldStyles.endAdornment,
  startAdornment: customProperties.currencyFieldStyles.startAdornment,
});

export const useStyles = makeStyles(styles, { name: "CurrencyField" });
