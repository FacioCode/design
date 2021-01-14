import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:meta/meta.dart';

class ExpandedButton extends StatelessWidget {
  const ExpandedButton({
    @required final String title,
    final TextStyle textStyle,
    final double height = 56.0,
    final bool enabled = true,
    final BoxDecoration boxDecoration = const BoxDecoration(
      gradient: LegacyTheme.buttonGradientGreen,
    ),
    final VoidCallback onPressed,
  })  : assert(title != null),
        _title = title,
        _textStyle = textStyle,
        _enabled = enabled,
        _height = height,
        _boxDecoration = boxDecoration,
        _onPressed = onPressed;

  final String _title;
  final TextStyle _textStyle;
  final bool _enabled;
  final BoxDecoration _boxDecoration;
  final VoidCallback _onPressed;
  final double _height;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: _height,
      decoration: _enabled
          ? _boxDecoration
          : const BoxDecoration(
              color: LegacyColorPalette.silver,
            ),
      child: SizedBox.expand(
        child: FlatButton(
          onPressed: _enabled ? _onPressed : null,
          child: Text(
            _title.toUpperCase(),
            textAlign: TextAlign.center,
            style: _textStyle ?? Theme.of(context).textTheme.button,
          ),
        ),
      ),
    );
  }
}

class GradientButton {
  GradientButton(this._context);

  static const double flatButtonHeight = 48.0;
  static const double flatButtonWidth = 300.0;
  static const double flatButtonRadius = 8.0;
  static final BorderRadiusGeometry flatBorderRadius = BorderRadius.circular(flatButtonRadius);

  final BuildContext _context;

  Widget flat(
    final String text,
    final Function onPressed, {
    final bool isEnabled = true,
  }) {
    return Container(
      height: flatButtonHeight,
      width: flatButtonWidth,
      decoration: BoxDecoration(
        gradient: LegacyTheme.buttonGradientGreen,
        borderRadius: flatBorderRadius,
      ),
      child: FlatButton(
        onPressed: isEnabled ? () => onPressed() : null,
        shape: RoundedRectangleBorder(borderRadius: flatBorderRadius),
        child: Text(
          text.toUpperCase(),
          textAlign: TextAlign.center,
          style: Theme.of(_context).textTheme.button,
        ),
      ),
    );
  }

  Widget rounded(final String text, final Function onPressed) {
    return OutlineButton(
      onPressed: () => onPressed,
      borderSide: const BorderSide(color: LegacyColorPalette.charcoalGrey, width: 2.0),
      textColor: LegacyColorPalette.charcoalGrey,
      highlightedBorderColor: LegacyColorPalette.charcoalGrey,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(30.0),
      ),
      child: Container(
        width: 200,
        height: 40,
        child: Center(
          child: Text(
            text,
            textAlign: TextAlign.center,
            style: Theme.of(_context).textTheme.bodyText1.copyWith(color: LegacyColorPalette.charcoalGrey),
          ),
        ),
      ),
    );
  }
}

class BaseGradientButton extends StatelessWidget {
  const BaseGradientButton({
    @required final String title,
    final VoidCallback onPressed,
    final bool isEnabled = true,
    final Key key,
  })  : assert(title != null),
        _title = title,
        _onPressed = onPressed,
        _isEnabled = isEnabled,
        _key = key;

  final String _title;
  final VoidCallback _onPressed;
  final bool _isEnabled;
  final Key _key;

  @override
  Widget build(BuildContext context) {
    return Opacity(
      opacity: _isEnabled ? 1 : 0.5,
      child: Container(
        height: 48,
        width: double.infinity,
        decoration: BoxDecoration(
          gradient: LegacyTheme.buttonGradientGreen,
          borderRadius: BorderRadius.circular(8.0),
        ),
        child: FlatButton(
          key: _key,
          onPressed: _isEnabled ? _onPressed : null,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8.0),
          ),
          child: Text(
            _title?.toUpperCase() ?? '',
            textAlign: TextAlign.center,
            style: Theme.of(context).textTheme.button,
          ),
        ),
      ),
    );
  }
}

class BaseTextButton extends StatelessWidget {
  const BaseTextButton({
    @required final String title,
    final VoidCallback onPressed,
    final double height = 48.0,
    final double width = 200.0,
  })  : assert(title != null),
        _title = title,
        _onPressed = onPressed,
        _height = height,
        _width = width;

  final String _title;
  final VoidCallback _onPressed;
  final double _height;
  final double _width;

  @override
  Widget build(BuildContext context) {
    return FlatButton(
      onPressed: _onPressed,
      child: Container(
        height: _height,
        width: _width,
        child: Center(
          child: Text(
            _title.toUpperCase(),
            style: Theme.of(context).textTheme.button.copyWith(
                  color: LegacyColorPalette.viridian,
                  fontWeight: FontWeight.w600,
                ),
          ),
        ),
      ),
    );
  }
}

class BaseOutlineButton extends StatelessWidget {
  const BaseOutlineButton({
    @required final String title,
    final VoidCallback onPressed,
    final bool isExpanded = false,
    final Key key,
  })  : assert(title != null),
        _title = title,
        _onPressed = onPressed,
        _isExpanded = isExpanded,
        _key = key;

  final String _title;
  final bool _isExpanded;
  final VoidCallback _onPressed;
  final Key _key;

  @override
  Widget build(BuildContext context) {
    return OutlineButton(
      key: _key,
      onPressed: _onPressed,
      borderSide: const BorderSide(
        color: ColorPalette.baseGrey30,
        width: 2.0,
      ),
      textColor: ColorPalette.baseGrey80,
      highlightedBorderColor: ColorPalette.baseGrey80,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(24.0),
      ),
      child: _expandContent(
        isExpanded: _isExpanded,
        child: Text(
          _title,
          textAlign: TextAlign.center,
          style: TextStyles.button.copyWith(
            color: _onPressed == null ? LegacyColorPalette.silver : LegacyColorPalette.charcoalGrey,
          ),
        ),
      ),
    );
  }

  Widget _expandContent({
    @required final bool isExpanded,
    @required final Widget child,
  }) =>
      isExpanded
          ? Container(
              width: double.infinity,
              height: 48,
              child: Center(
                child: child,
              ),
            )
          : child;
}
