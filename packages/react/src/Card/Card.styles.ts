import { createStyles, makeStyles } from "@material-ui/styles";
import getCssVarName from "../utils/getCssVarName";
import { styles as typographyStyles } from "../Typography/Typography.styles";

const component = "Card";

const styles = createStyles({
  root: {
    ...typographyStyles.bodyText2,
    borderRadius: getCssVarName({ classKey: "root", component, property: "borderRadius" }),
    color: getCssVarName({ classKey: "root", component, property: "color" }),
    overflow: "hidden",
    padding: getCssVarName({ classKey: "root", component, property: "padding" }),
  },
  default: {
    backgroundColor: getCssVarName({ classKey: "default", component, property: "backgroundColor" }),
  },
  info: {
    backgroundColor: getCssVarName({ classKey: "info", component, property: "backgroundColor" }),
  },
});

export const useStyles = makeStyles(styles, { name: "FacioCard" });

export default useStyles;
