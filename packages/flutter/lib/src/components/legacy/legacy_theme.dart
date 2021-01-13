import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

// ignore: avoid_classes_with_only_static_members
class LegacyTheme {
  static final String packageName = 'components';

  static final Image logoAppBar = Image.asset(
    'assets/images/facio_logo_appbar.png',
    width: 57,
    height: 18,
    fit: BoxFit.fill,
  );

  static const String defaultFamilyFont = 'Open Sans';
  static const Color primaryColor = LegacyColorPalette.charcoalGrey;
  static const Color backgroundColor = LegacyColorPalette.whiteThree;

  static const EdgeInsets defaultPadding = EdgeInsets.all(16.0);
  static const EdgeInsets defaultSpacing = EdgeInsets.only(bottom: 24.0);
  static const EdgeInsets defaultBottomButtonPadding = EdgeInsets.fromLTRB(24, 0, 24, 24);

  static const LinearGradient buttonGradientGreen = LinearGradient(
    begin: Alignment.bottomLeft,
    end: Alignment.topRight,
    colors: <Color>[LegacyColorPalette.aquaMarine, LegacyColorPalette.greenBlue],
  );

  static const LinearGradient welcomeBackgroundGradient = LinearGradient(
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
    colors: <Color>[Color(0x19FFFFFF), Colors.transparent],
  );

  static ThemeData getThemeData([final BuildContext context]) => ThemeData(
        accentColor: LegacyColorPalette.greenBlue,
        primaryColor: primaryColor,
        backgroundColor: backgroundColor,
        textTheme: _getTextThemeForDevice(context),
      );

  static bool _isSmallDeviceCache;

  static const double _smallDeviceWidthBreakpoint = 360.0;

  static bool isSmallDevice(final BuildContext context) =>
      _isSmallDeviceCache ?? _checkBreakpointForDeviceViewport(context);

  static bool _checkBreakpointForDeviceViewport(final BuildContext context) {
    final deviceWidth = MediaQuery.of(context).size.width;
    bool isDeviceSmall = deviceWidth < _smallDeviceWidthBreakpoint;
    _isSmallDeviceCache = isDeviceSmall;
    return isDeviceSmall;
  }

  static TextTheme _getTextThemeForDevice(final BuildContext context) {
    if (context == null) {
      return _getTextTheme();
    }

    return isSmallDevice(context)
        ? _getTextTheme(
            display4FontSize: 32.0,
            display3FontSize: 28.0,
            display2FontSize: 24.0,
            display1FontSize: 20.0,
            headlineFontSize: 16.0,
            titleFontSize: 16.0,
            body1FontSize: 14.0,
            bodyText1FontSize: 12.0,
            buttonFontSize: 12.0,
            captionFontSize: 15.0,
          )
        : _getTextTheme();
  }

  static const FontWeight thinFont = FontWeight.w100;
  static const FontWeight extraLightFont = FontWeight.w200;
  static const FontWeight lightFont = FontWeight.w300;
  static const FontWeight regularFont = FontWeight.w400;
  static const FontWeight mediumFont = FontWeight.w500;
  static const FontWeight semiBoldFont = FontWeight.w600;
  static const FontWeight boldFont = FontWeight.w700;
  static const FontWeight extraBoldFont = FontWeight.w800;
  static const FontWeight blackFont = FontWeight.w900;

  static TextTheme _getTextTheme({
    final double display4FontSize = 40.0,
    final double display3FontSize = 36.0,
    final double display2FontSize = 32.0,
    final double display1FontSize = 24.0,
    final double headlineFontSize = 20.0,
    final double titleFontSize = 19.0,
    final double body1FontSize = 16.0,
    final double bodyText1FontSize = 14.0,
    final double buttonFontSize = 14.0,
    final double captionFontSize = 18.0,
  }) =>
      TextTheme(
        headline1: TextStyle(
          color: LegacyColorPalette.charcoalGrey,
          fontSize: display4FontSize,
          fontWeight: blackFont,
          fontFamily: defaultFamilyFont,
          package: packageName,
          letterSpacing: -1.25,
        ),
        headline2: TextStyle(
          color: LegacyColorPalette.charcoalGreyTwo,
          fontSize: display3FontSize,
          fontWeight: regularFont,
          fontFamily: defaultFamilyFont,
          package: packageName,
        ),
        headline3: TextStyle(
          color: LegacyColorPalette.charcoalGreyTwo,
          fontSize: display2FontSize,
          fontWeight: boldFont,
          fontFamily: defaultFamilyFont,
          package: packageName,
        ),
        headline4: TextStyle(
          color: LegacyColorPalette.charcoalGreyTwo,
          fontSize: display1FontSize,
          fontWeight: semiBoldFont,
          fontFamily: defaultFamilyFont,
          package: packageName,
        ),
        headline5: TextStyle(
          color: LegacyColorPalette.steelGrey,
          fontSize: headlineFontSize,
          fontWeight: regularFont,
          fontFamily: defaultFamilyFont,
          package: packageName,
          letterSpacing: 0.15,
        ),
        headline6: TextStyle(
          color: LegacyColorPalette.charcoalGreyTwo,
          fontSize: titleFontSize,
          fontWeight: boldFont,
          fontFamily: defaultFamilyFont,
          package: packageName,
        ),
        bodyText2: TextStyle(
          color: LegacyColorPalette.charcoalGreyTwo,
          fontSize: body1FontSize,
          fontWeight: regularFont,
          fontFamily: defaultFamilyFont,
          package: packageName,
          letterSpacing: 0.5,
        ),
        bodyText1: TextStyle(
          color: LegacyColorPalette.coolGrey,
          fontSize: bodyText1FontSize,
          fontWeight: regularFont,
          fontFamily: defaultFamilyFont,
          package: packageName,
          letterSpacing: 0.25,
        ),
        button: TextStyle(
          color: Colors.white,
          fontSize: buttonFontSize,
          fontWeight: boldFont,
          fontFamily: defaultFamilyFont,
          package: packageName,
          letterSpacing: 1.25,
        ),
        caption: TextStyle(
          color: LegacyColorPalette.charcoalGreyTwo,
          fontSize: captionFontSize,
          fontWeight: semiBoldFont,
          fontFamily: defaultFamilyFont,
          package: packageName,
        ),
      );
}

class LegacyColorPalette {
  /// Green
  static const Color aquaMarine = Color(0xFF4CD7B4);
  static const Color greenBlue = Color(0xFF00C27E);
  static const Color viridian = Color(0xFF1B856A);
  static const Color baseAquamarine70 = Color(0xFF068589);

  /// Grey
  static const Color whiteThree = Color(0xFFFAFAFA);
  static const Color whiteTwo = Color(0xFFEAEAEA);
  static const Color silver = Color(0xFFC5C9C8);
  static const Color coolGrey = Color(0xFF8A9193);
  static const Color blueGray = Color(0xFF8A9193);
  static const Color steelGrey = Color(0xFF7A8385);
  static const Color charcoalGreyTwo = Color(0xFF353739);
  static const Color charcoalGrey = Color(0xFF2E3238);

  /// Red
  static const Color lipstick = Color(0xFFCA1538);
}

class ThemeChanger with ChangeNotifier {
  ThemeChanger.defaultSize() : this._(theme: LegacyTheme.getThemeData());

  ThemeChanger._({
    final ThemeData theme,
  })  : _themeData = theme,
        _check = true;

  ThemeData _themeData;

  bool _check;

  ThemeData get theme => _themeData;

  set theme(final ThemeData theme) {
    _themeData = theme;
    notifyListeners();
  }

  void refresh(final BuildContext context) {
    if (_check && LegacyTheme.isSmallDevice(context)) {
      _themeData = LegacyTheme.getThemeData(context);
      notifyListeners();
      _check = false;
    }
  }
}
