import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class MediumContainedButton extends StatelessWidget {
  const MediumContainedButton({
    required final String title,
    final VoidCallback? onPressed,
    final bool isEnabled = true,
    final Key? key,
    final ContainedButtonColor color = ContainedButtonColor.brand,
  })  : _title = title,
        _onPressed = onPressed,
        _isEnabled = isEnabled,
        _key = key,
        _color = color;

  final String _title;
  final VoidCallback? _onPressed;
  final bool _isEnabled;
  final Key? _key;
  final ContainedButtonColor _color;

  @override
  Widget build(BuildContext context) {
    return Opacity(
      opacity: _isEnabled ? 1 : 0.5,
      child: Container(
        height: Sizes.baseSixfold,
        width: ButtonStyles.maxWidth,
        decoration: BoxDecoration(
          color: _color.backgroundColor,
          borderRadius: BorderRadius.circular(Sizes.baseSingle),
        ),
        child: TextButton(
          key: _key,
          onPressed: _isEnabled ? _onPressed : null,
          child: Text(
            _title,
            textAlign: TextAlign.center,
            style: TextStyles.button.copyWith(color: _color.fontColor),
          ),
        ),
      ),
    );
  }
}
