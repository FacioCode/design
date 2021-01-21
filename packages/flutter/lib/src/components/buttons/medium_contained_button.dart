import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class MediumContainedButton extends StatelessWidget {
  const MediumContainedButton({
    final Key key,
    @required final String title,
    final VoidCallback onPressed,
    final bool isEnabled = true,
    final EdgeInsets padding = const EdgeInsets.fromLTRB(
        Sizes.baseDouble, Sizes.baseNone, Sizes.baseDouble, Sizes.baseSingle),
  })  : assert(title != null),
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
        decoration: BoxDecoration(
          color: ContainedButtonStyles.brandBackgroundColor,
          borderRadius:
              BorderRadius.circular(ButtonStyles.sizeMediumBorderRadius),
        ),
        child: FlatButton(
          key: _key,
          onPressed: _isEnabled ? _onPressed : null,
          shape: RoundedRectangleBorder(
            borderRadius:
                BorderRadius.circular(ButtonStyles.sizeMediumBorderRadius),
          ),
          child: Text(_title,
              textAlign: TextAlign.center, style: TextStyles.button),
        ),
      ),
    );
  }
}
