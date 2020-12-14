import {
  TypographyOptions,
  TypographyStyleOptions,
} from "@material-ui/core/styles/createTypography";
import { customProperties } from "@faciocode/styles";

const { typographyStyles } = customProperties;

const getAllPropsExceptColor = (props: TypographyStyleOptions) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, ...otherProps } = props;


  return otherProps;
};

export const typography : TypographyOptions = {
  body1: getAllPropsExceptColor(typographyStyles.bodyText1 as TypographyStyleOptions),
  body2: getAllPropsExceptColor(typographyStyles.bodyText2 as TypographyStyleOptions),
  button: {
    ...getAllPropsExceptColor(typographyStyles.button as TypographyStyleOptions),
    textTransform: "none",
  },
  caption: getAllPropsExceptColor(typographyStyles.caption as TypographyStyleOptions),
  fontFamily: typographyStyles.root.fontFamily,
  h1: getAllPropsExceptColor(typographyStyles.headline1 as TypographyStyleOptions),
  h2: getAllPropsExceptColor(typographyStyles.headline2 as TypographyStyleOptions),
  h3: getAllPropsExceptColor(typographyStyles.headline3 as TypographyStyleOptions),
  h4: getAllPropsExceptColor(typographyStyles.headline4 as TypographyStyleOptions),
  h5: getAllPropsExceptColor(typographyStyles.headline5 as TypographyStyleOptions),
  h6: getAllPropsExceptColor(typographyStyles.headline6 as TypographyStyleOptions),
  subtitle1: getAllPropsExceptColor(typographyStyles.subtitle1 as TypographyStyleOptions),
  subtitle2: getAllPropsExceptColor(typographyStyles.subtitle2 as TypographyStyleOptions),
} as TypographyOptions;

export default typography;
