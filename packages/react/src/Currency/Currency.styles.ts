import { createStyles, makeStyles } from "@material-ui/core";
import type { CSSProperties } from "@material-ui/styles";
import { customProperties } from "@faciocode/styles";

const styles = createStyles({
  root: customProperties.currencyStyles.root as CSSProperties,
});
const useStyles = makeStyles(styles, { name: "Currency" });

export default useStyles;
