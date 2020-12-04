import { CSSProperties, createStyles, makeStyles } from "@material-ui/styles";
import { FontWeightProperty } from "csstype";
import type { Props } from "./Typography.types";
import { getCssVarName } from "../utils/getCssVarName";

const component = "Typography";

type Args = {
  variant: Props["variant"]
}
type GetStyleByVariant = ({ variant }: Args) => CSSProperties;

const getStyleByVariant : GetStyleByVariant = ({ variant: classKey }) => ({
  color: getCssVarName({ component, classKey, property: "color" }),
  fontFamily: getCssVarName({ component, classKey, property: "fontFamily" }),
  fontSize: getCssVarName({ component, classKey, property: "fontSize" }),
  fontWeight: getCssVarName({ component, classKey, property: "fontWeight" }) as FontWeightProperty,
  letterSpacing: getCssVarName({ component, classKey, property: "letterSpacing" }),
  lineHeight: getCssVarName({ component, classKey, property: "lineHeight" }),
  marginBottom: getCssVarName({ component, classKey, property: "marginBottom" }),
  marginTop: getCssVarName({ component, classKey, property: "marginTop" }),
});

export const styles = createStyles({
  root: {
    margin: "var(--component-typography-root-margin)",
  },
  headline1: getStyleByVariant({ variant: "headline1" }),
  headline2: getStyleByVariant({ variant: "headline2" }),
  headline3: getStyleByVariant({ variant: "headline3" }),
  headline4: getStyleByVariant({ variant: "headline4" }),
  headline5: getStyleByVariant({ variant: "headline5" }),
  subtitle1: getStyleByVariant({ variant: "subtitle1" }),
  subtitle2: getStyleByVariant({ variant: "subtitle2" }),
  bodyText1: getStyleByVariant({ variant: "bodyText1" }),
  bodyText2: getStyleByVariant({ variant: "bodyText2" }),
  caption: getStyleByVariant({ variant: "caption" }),
});

export const useStyles = makeStyles(styles, { name: "FacioTypography" });

export default useStyles;
