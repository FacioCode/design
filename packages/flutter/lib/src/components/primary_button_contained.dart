import 'package:facio_styles/facio_styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class PrimaryButtonContained extends StatelessWidget {
  const PrimaryButtonContained({
    final Key key,
    @required final String title,
    @required final VoidCallback onPressed,
    final bool isEnabled = true,
    final EdgeInsets padding = const EdgeInsets.fromLTRB(16.0, 0.0, 16.0, 8.0),
  })  : assert(title != null),
        assert(onPressed != null),
        assert(isEnabled != null),
        assert(padding != null),
        _key = key,
        _title = title,
        _padding = padding,
        _onPressed = onPressed,
        _isEnabled = isEnabled;

  final Key _key;
  final String _title;
  final VoidCallback _onPressed;
  final bool _isEnabled;
  final EdgeInsets _padding;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: _padding,
      child: Container(
        height: ButtonStyles.sizeMediumHeight,
        width: double.infinity,
        decoration: BoxDecoration(
          color: ContainedButtonStyles.brandBackgroundColor,
          borderRadius: BorderRadius.circular(ContainedButtonStyles.sizeMediumBorderRadius),
        ),
        child: FlatButton(
          key: _key,
          onPressed: _isEnabled ? _onPressed : null,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(ContainedButtonStyles.sizeMediumBorderRadius),
          ),
          child: Text(_title, textAlign: TextAlign.center, style: TextStyles.button),
        ),
      ),
    );
  }
}
