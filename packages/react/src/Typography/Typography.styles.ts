import { CSSProperties, createStyles, makeStyles } from "@material-ui/styles";
import { TypographyProps } from "./Typography";
import { kebabCase } from "lodash";

const getStyleByVariant = (variant: TypographyProps["variant"]) => {
  const key = kebabCase(variant);


  return {
    color: `var(--component-typography-${key}-color)`,
    fontFamily: `var(--component-typography-${key}-font-family)`,
    fontSize: `var(--component-typography-${key}-font-size)`,
    fontWeight: `var(--component-typography-${key}-font-weight)`,
    letterSpacing: `var(--component-typography-${key}-letter-spacing)`,
    lineHeight: `var(--component-typography-${key}-line-height)`,
    marginBottom: `var(--component-typography-${key}-margin-bottom)`,
    marginTop: `var(--component-typography-${key}-margin-top)`,
  } as CSSProperties;
};

export const styles = createStyles({
  root: {
    margin: "var(--component-typography-root-margin)",
  },
  headline1: getStyleByVariant("headline1"),
  headline2: getStyleByVariant("headline2"),
  headline3: getStyleByVariant("headline3"),
  headline4: getStyleByVariant("headline4"),
  headline5: getStyleByVariant("headline5"),
  subtitle1: getStyleByVariant("subtitle1"),
  subtitle2: getStyleByVariant("subtitle2"),
  bodyText1: getStyleByVariant("bodyText1"),
  bodyText2: getStyleByVariant("bodyText2"),
  caption: getStyleByVariant("caption"),
});

export const useStyles = makeStyles(styles, { name: "FacioTypography" });

export default useStyles;
