import { createStyles, makeStyles } from "@material-ui/styles";
import getCssVarName from "../utils/getCssVarName";

const component = "Paper";

const styles = createStyles({
  root: {
    backgroundColor: getCssVarName({ classKey: "root", component, property: "backgroundColor" }),
    color: getCssVarName({ classKey: "root", component, property: "color" }),
  },
  rounded: {
    borderRadius: getCssVarName({ classKey: "rounded", component, property: "borderRadius" }),
  },
  square: {
    borderRadius: getCssVarName({ classKey: "square", component, property: "borderRadius" }),
  },
});

export const useStyles = makeStyles(styles, { name: "FacioPaper" });

export default useStyles;
