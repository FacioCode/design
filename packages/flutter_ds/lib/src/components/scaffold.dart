import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class FacioScaffold extends StatelessWidget {
  const FacioScaffold({
    final Key? key,
    required final Widget child,
    final List<Widget>? appBarActions,
    final bool hasBackButton = true,
    final bool hasAppBarLogo = false,
    final Color appBarColor = Colors.transparent,
    final Widget? appBarLeading,
    final VoidCallback? appBarLogoutOnPressed,
    final Color? appBarShadowColor,
    final Widget? appBarTitle,
    final Color canvasColor = ColorPalette.baseWhite,
    final EdgeInsets canvasPadding = EdgeInsets.zero,
    final double elevation = 0.0,
    final bool keyboardPushScreen = true,
    final VoidCallback? onBackPressed,
  })  : assert(hasBackButton || (!hasBackButton && onBackPressed == null)),
        assert((hasAppBarLogo && appBarTitle == null) ||
            (!hasAppBarLogo && appBarTitle != null)),
        _child = child,
        _appBarActions = appBarActions,
        _hasBackButton = hasBackButton,
        _hasAppBarLogo = hasAppBarLogo,
        _appBarColor = appBarColor,
        _appBarLeading = appBarLeading,
        _appBarLogoutOnPressed = appBarLogoutOnPressed,
        _appBarShadowColor = appBarShadowColor,
        _appBarTitle = appBarTitle,
        _canvasColor = canvasColor,
        _canvasPadding = canvasPadding,
        _elevation = elevation,
        _keyboardPushScreen = keyboardPushScreen,
        _onBackPressed = onBackPressed,
        super(key: key);

  final Widget _child;
  final List<Widget>? _appBarActions;
  final bool _hasBackButton;
  final bool _hasAppBarLogo;
  final Color _appBarColor;
  final Widget? _appBarLeading;
  final VoidCallback? _appBarLogoutOnPressed;
  final Widget? _appBarTitle;
  final Color? _appBarShadowColor;
  final Color _canvasColor;
  final EdgeInsets _canvasPadding;
  final double _elevation;
  final bool _keyboardPushScreen;
  final VoidCallback? _onBackPressed;

  @override
  Widget build(BuildContext context) {
    final canvas = Scaffold(
      backgroundColor: _canvasColor,
      resizeToAvoidBottomInset: _keyboardPushScreen,
      appBar: AppBar(
        shadowColor: _appBarShadowColor,
        backgroundColor: _appBarColor,
        brightness: Brightness.light,
        elevation: _elevation,
        title: _hasAppBarLogo ? FacioSvgImages.logoDark : _appBarTitle,
        centerTitle: true,
        leading: _hasBackButton
            ? BackButton(
                key: const Key('app_bar_back_button'),
                color: ColorPalette.baseGrey90,
                onPressed: _onBackPressed,
              )
            : _appBarLeading,
        actions: _appBarLogoutOnPressed != null
            ? [
                SmallLinkButton(
                    title: 'Sair', onPressed: _appBarLogoutOnPressed!)
              ]
            : _appBarActions,
      ),
      body: SafeArea(
        minimum: _canvasPadding,
        child: _child,
      ),
    );

    if (!_hasBackButton) {
      return canvas;
    } else {
      // Overrides hardware back button behavior (Android)
      return WillPopScope(
        onWillPop: () {
          if (_onBackPressed != null) {
            _onBackPressed!();
          } else {
            Navigator.of(context).pop();
          }
          return Future<bool>.value(false);
        },
        child: canvas,
      );
    }
  }
}
