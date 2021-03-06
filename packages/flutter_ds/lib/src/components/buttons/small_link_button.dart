import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class SmallLinkButton extends StatelessWidget {
  const SmallLinkButton({
    final Key? key,
    required final String title,
    required final VoidCallback onPressed,
    final bool isEnabled = true,
  })  : _isEnabled = isEnabled,
        _key = key,
        _title = title,
        _onPressed = onPressed;

  final Key? _key;
  final bool _isEnabled;
  final String _title;
  final VoidCallback _onPressed;

  @override
  Widget build(BuildContext context) {
    return Opacity(
      opacity: _isEnabled ? 1 : 0.5,
      child: TextButton(
        key: _key,
        onPressed: _isEnabled ? _onPressed : null,
        child: Text(
          _title,
          style: _isEnabled
              ? TextStyles.button.copyWith(color: LinkButtonStyles.defaultColor)
              : TextStyles.button
                  .copyWith(color: LinkButtonStyles.disabledColor),
        ),
      ),
    );
  }
}
