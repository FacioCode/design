import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class MediumOutlinedButton extends StatelessWidget {
  const MediumOutlinedButton({
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
    return Container(
      height: Sizes.baseSixfold,
      width: ButtonStyles.maxWidth,
      child: OutlineButton(
        key: _key,
        onPressed: _isEnabled ? _onPressed : null,
        borderSide: const BorderSide(
          color: OutlinedButtonStyles.defaultBorderColor,
          width: OutlinedButtonStyles.borderWidth,
        ),
        splashColor: Colors.transparent,
        highlightColor: Colors.transparent,
        highlightedBorderColor: OutlinedButtonStyles.pressedBorderColor,
        shape: RoundedRectangleBorder(
          borderRadius:
              BorderRadius.circular(ButtonStyles.sizeMediumBorderRadius),
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
    );
  }
}
