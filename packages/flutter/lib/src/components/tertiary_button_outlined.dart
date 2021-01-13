import 'package:facio_styles/facio_styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class TertiaryButtonOutlined extends StatelessWidget {
  const TertiaryButtonOutlined({
    final Key key,
    @required final String title,
    @required final VoidCallback onPressed,
    final bool isEnabled = true,
  })  : assert(title != null),
        assert(onPressed != null),
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
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: Sizes.baseSingle),
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
          borderRadius: BorderRadius.circular(OutlinedButtonStyles.sizeSmallBorderRadius),
        ),
        child: Text(
          _title,
          textAlign: TextAlign.center,
          style: _isEnabled ? TextStyles.button : TextStyles.button.copyWith(color: OutlinedButtonStyles.disabledColor),
        ),
      ),
    );
  }
}
