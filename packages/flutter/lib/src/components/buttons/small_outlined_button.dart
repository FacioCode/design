import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class SmallOutlinedButton extends StatelessWidget {
  const SmallOutlinedButton({
    final Key key,
    @required final String title,
    final VoidCallback onPressed,
    final bool isEnabled = true,
  })  : assert(title != null),
        assert(isEnabled != null),
        _isEnabled = isEnabled,
        _key = key,
        _title = title,
        _onPressed = onPressed;

  final Key _key;
  final bool _isEnabled;
  final String _title;
  final VoidCallback _onPressed;

  @override
  Widget build(BuildContext context) {
    return Opacity(
      opacity: _isEnabled ? 1 : 0.5,
      child: ButtonTheme(
        height: ButtonStyles.sizeSmallHeight,
        child: OutlineButton(
          key: _key,
          onPressed: _isEnabled ? _onPressed : null,
          borderSide: const BorderSide(
            color: OutlinedButtonStyles.defaultBorderColor,
            width: OutlinedButtonStyles.borderWidth,
          ),
          splashColor: Colors.transparent,
          highlightColor: OutlinedButtonStyles.pressedBackgroundColor,
          highlightedBorderColor: OutlinedButtonStyles.pressedBorderColor,
          shape: RoundedRectangleBorder(
            borderRadius:
                BorderRadius.circular(ButtonStyles.sizeSmallBorderRadius),
          ),
          child: Text(
            _title,
            textAlign: TextAlign.center,
            style: _isEnabled
                ? TextStyles.button
                : TextStyles.button
                    .copyWith(color: OutlinedButtonStyles.disabledColor),
          ),
        ),
      ),
    );
  }
}
