import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class MediumLinkButton extends StatelessWidget {
  const MediumLinkButton({
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
    return Container(
        height: Sizes.baseSixfold,
        width: ButtonStyles.maxWidth,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(Sizes.baseSingle),
        ),
        child: TextButton(
          key: _key,
          onPressed: _isEnabled ? _onPressed : null,
          child: Text(
            _title,
            style: _isEnabled
                ? TextStyles.button
                    .copyWith(color: LinkButtonStyles.defaultColor)
                : TextStyles.button
                    .copyWith(color: LinkButtonStyles.disabledColor),
          ),
        ));
  }
}
