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

  static const TextStyle largeTitle = TextStyle(
    color: Color(0xFF1F252E),
    fontFamily: "Open Sans",
    fontSize: 544.00,
    fontWeight: "800",
    letterSpacing: -8.00
  )

  static const TextStyle largeInput = TextStyle(
    fontFamily: "Open Sans",
    fontSize: 448.00,
    fontWeight: "400",
    letterSpacing: -6.08
  )

  static const TextStyle title1 = TextStyle(
    color: Color(0xFF1F252E),
    fontFamily: "Open Sans",
    fontSize: 448.00,
    fontWeight: "700",
    letterSpacing: -6.08
  )

  static const TextStyle body = TextStyle(
    color: Color(0xFF1F252E),
    fontFamily: "Open Sans",
    fontSize: 272.00,
    fontWeight: "400",
    letterSpacing: -6.88
  )

  static const TextTheme textTheme = TextTheme(
    largeTitle: TextStyles.largeTitle,
    largeInput: TextStyles.largeInput,
    title1: TextStyles.title1,
    body: TextStyles.body
  );

}
