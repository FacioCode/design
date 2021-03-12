import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class SmallOutlinedButton extends StatelessWidget {
  const SmallOutlinedButton({
    final Key? key,
    required final String title,
    final VoidCallback? onPressed,
    final bool isEnabled = true,
  })  : _isEnabled = isEnabled,
        _key = key,
        _title = title,
        _onPressed = onPressed;

  final Key? _key;
  final bool _isEnabled;
  final String _title;
  final VoidCallback? _onPressed;

  @override
  Widget build(BuildContext context) {
    return Opacity(
      opacity: _isEnabled ? 1 : 0.5,
      child: ButtonTheme(
        height: ButtonStyles.sizeSmallHeight,
        child: OutlinedButton(
          key: _key,
          onPressed: _isEnabled ? _onPressed : null,
          style: OutlinedButton.styleFrom(
            primary: Colors.black87,
            minimumSize: Size(88, 36),
            padding: EdgeInsets.symmetric(horizontal: 16),
            side: BorderSide(
              color: OutlinedButtonStyles.defaultBorderColor,
              width: OutlinedButtonStyles.borderWidth,
            ),
            shape: RoundedRectangleBorder(
              borderRadius:
                  BorderRadius.circular(ButtonStyles.sizeSmallBorderRadius),
            ),
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
