part of facio_styles;

/// # Text styles and theme for facio_styles
///
/// You can use [TextStyles] like this:
///
/// ```
/// TextStyles.textTheme
/// ```
///
/// See also [TextTheme API](https://api.flutter.dev/flutter/material/TextTheme-class.html).
///
class TextStyles {
  TextStyles._();

  static const TextStyle headline1 = const TextStyle(
      color: Color(0xFF1F252E),
      fontFamily: "Open Sans",
      fontSize: 34.00,
      fontWeight: FontWeight.w800,
      letterSpacing: -0.50,
      height: 40.00);

  static const TextStyle headline2 = const TextStyle(
      color: Color(0xFF303846),
      fontFamily: "Open Sans",
      fontSize: 28.00,
      fontWeight: FontWeight.w700,
      letterSpacing: -0.38,
      height: 40.00);

  static const TextStyle headline3 = const TextStyle(
      color: Color(0xFF303846),
      fontFamily: "Open Sans",
      fontSize: 22.00,
      fontWeight: FontWeight.w700,
      letterSpacing: -0.26,
      height: 32.00);

  static const TextStyle headline4 = const TextStyle(
      color: Color(0xFF303846),
      fontFamily: "Open Sans",
      fontSize: 20.00,
      fontWeight: FontWeight.w700,
      letterSpacing: -0.45,
      height: 24.00);

  static const TextStyle headline5 = const TextStyle(
      color: Color(0xFF303846),
      fontFamily: "Open Sans",
      fontSize: 17.00,
      fontWeight: FontWeight.w700,
      letterSpacing: -0.43,
      height: 24.00);

  static const TextStyle bodyText1 = const TextStyle(
      color: Color(0xFF424D5C),
      fontFamily: "Open Sans",
      fontSize: 17.00,
      fontWeight: FontWeight.w400,
      letterSpacing: -0.43,
      height: 24.00);

  static const TextStyle subtitle1 = const TextStyle(
      color: Color(0xFF303846),
      fontFamily: "Open Sans",
      fontSize: 15.00,
      fontWeight: FontWeight.w400,
      letterSpacing: -0.23,
      height: 24.00);

  static const TextStyle subtitle2 = const TextStyle(
      color: Color(0xFF424D5C),
      fontFamily: "Open Sans",
      fontSize: 15.00,
      fontWeight: FontWeight.w400,
      letterSpacing: -0.23,
      height: 24.00);

  static const TextStyle button = const TextStyle(
      color: Color(0xFF303846),
      fontFamily: "Open Sans",
      fontSize: 14.00,
      fontWeight: FontWeight.w400,
      letterSpacing: -0.15,
      height: 24.00);

  static const TextStyle bodyText2 = const TextStyle(
      color: Color(0xFF424D5C),
      fontFamily: "Open Sans",
      fontSize: 14.00,
      fontWeight: FontWeight.w400,
      letterSpacing: -0.15,
      height: 24.00);

  static const TextStyle caption = const TextStyle(
      color: Color(0xFF303846),
      fontFamily: "Open Sans",
      fontSize: 12.00,
      fontWeight: FontWeight.w400,
      letterSpacing: 0.00,
      height: 16.00);

  static const TextTheme textTheme = TextTheme(
      headline1: TextStyles.headline1,
      headline2: TextStyles.headline2,
      headline3: TextStyles.headline3,
      headline4: TextStyles.headline4,
      headline5: TextStyles.headline5,
      bodyText1: TextStyles.bodyText1,
      subtitle1: TextStyles.subtitle1,
      subtitle2: TextStyles.subtitle2,
      button: TextStyles.button,
      bodyText2: TextStyles.bodyText2,
      caption: TextStyles.caption);
}
