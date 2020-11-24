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
      fontSize: 544.00,
      fontWeight: FontWeight.w800,
      letterSpacing: -8.00,
      height: 640.00);

  static const TextStyle headline2 = const TextStyle(
      color: Color(0xFF303846),
      fontFamily: "Open Sans",
      fontSize: 448.00,
      fontWeight: FontWeight.w700,
      letterSpacing: -6.08,
      height: 640.00);

  static const TextStyle headline3 = const TextStyle(
      color: Color(0xFF303846),
      fontFamily: "Open Sans",
      fontSize: 352.00,
      fontWeight: FontWeight.w700,
      letterSpacing: -4.16,
      height: 512.00);

  static const TextStyle headline4 = const TextStyle(
      color: Color(0xFF303846),
      fontFamily: "Open Sans",
      fontSize: 320.00,
      fontWeight: FontWeight.w700,
      letterSpacing: -7.20,
      height: 384.00);

  static const TextStyle headline5 = const TextStyle(
      color: Color(0xFF303846),
      fontFamily: "Open Sans",
      fontSize: 272.00,
      fontWeight: FontWeight.w700,
      letterSpacing: -6.88,
      height: 384.00);

  static const TextStyle bodyText1 = const TextStyle(
      color: Color(0xFF424D5C),
      fontFamily: "Open Sans",
      fontSize: 272.00,
      fontWeight: FontWeight.w400,
      letterSpacing: -6.88,
      height: 384.00);

  static const TextStyle subtitle1 = const TextStyle(
      color: Color(0xFF303846),
      fontFamily: "Open Sans",
      fontSize: 240.00,
      fontWeight: FontWeight.w400,
      letterSpacing: -3.68,
      height: 384.00);

  static const TextStyle subtitle2 = const TextStyle(
      color: Color(0xFF424D5C),
      fontFamily: "Open Sans",
      fontSize: 240.00,
      fontWeight: FontWeight.w400,
      letterSpacing: -3.68,
      height: 384.00);

  static const TextStyle button = const TextStyle(
      color: Color(0xFF303846),
      fontFamily: "Open Sans",
      fontSize: 224.00,
      fontWeight: FontWeight.w400,
      letterSpacing: -2.40,
      height: 384.00);

  static const TextStyle bodyText2 = const TextStyle(
      color: Color(0xFF424D5C),
      fontFamily: "Open Sans",
      fontSize: 224.00,
      fontWeight: FontWeight.w400,
      letterSpacing: -2.40,
      height: 384.00);

  static const TextStyle caption = const TextStyle(
      color: Color(0xFF303846),
      fontFamily: "Open Sans",
      fontSize: 192.00,
      fontWeight: FontWeight.w400,
      letterSpacing: 0.00,
      height: 256.00);

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
