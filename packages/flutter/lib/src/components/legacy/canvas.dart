import 'package:components/components.dart';
import 'package:facio_styles/facio_styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

import 'base_app_bar.dart';

class BaseCanvas extends StatelessWidget {
  const BaseCanvas({
    final PreferredSizeWidget appBar,
    @required final Widget child,
    final EdgeInsets padding = LegacyTheme.defaultPadding,
    final VoidCallback onBackPressed,
    final bool keyboardPushScreen = true,
    final Color backgroundColor = LegacyTheme.backgroundColor,
  })  : assert(child != null),
        _appBar = appBar,
        _backgroundColor = backgroundColor,
        _child = child,
        _padding = padding,
        _onBackPressed = onBackPressed,
        _keyboardPushScreen = keyboardPushScreen;

  final PreferredSizeWidget _appBar;
  final EdgeInsets _padding;
  final Color _backgroundColor;
  final Widget _child;
  final bool _keyboardPushScreen;
  final VoidCallback _onBackPressed;

  @override
  Widget build(BuildContext context) {
    final defaultAppBar = BaseAppBar(context);

    return _backButtonPressedListener(
      overrideActionWith: _onBackPressed,
      child: Scaffold(
        appBar: _appBar ?? defaultAppBar,
        backgroundColor: _backgroundColor,
        resizeToAvoidBottomInset: _keyboardPushScreen,
        body: SafeArea(
          minimum: _padding,
          child: _child,
        ),
      ),
    );
  }

  Widget _backButtonPressedListener({
    final VoidCallback overrideActionWith,
    final Widget child,
  }) =>
      overrideActionWith == null
          ? child
          : WillPopScope(
              onWillPop: () {
                overrideActionWith();
                return Future<bool>.value(false);
              },
              child: child,
            );
}

class LoadingOverlay extends StatelessWidget {
  const LoadingOverlay({
    @required final Widget child,
    @required final bool isLoading,
    final Widget appendableStackChild,
  })  : assert(child != null),
        _child = child,
        _isLoading = isLoading,
        _stackChild = appendableStackChild;

  final bool _isLoading;
  final Widget _child;
  final Widget _stackChild;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(color: LegacyTheme.backgroundColor),
      child: Stack(
        children: <Widget>[
          Opacity(opacity: _isLoading ? 0.2 : 1.0, child: _child),
          if (_stackChild != null) _stackChild,
          Visibility(
            visible: _isLoading,
            child: const ProgressWidget(),
          ),
        ],
      ),
    );
  }
}

class ProgressWidget extends StatelessWidget {
  const ProgressWidget({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: CircularProgressIndicator(
          valueColor: AlwaysStoppedAnimation<Color>(ColorPalette.baseGrey50),
        ),
      ),
    );
  }
}
