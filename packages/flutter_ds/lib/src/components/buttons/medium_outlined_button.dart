import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class MediumOutlinedButton extends StatelessWidget {
  const MediumOutlinedButton({
    final Key? key,
    required final String title,
    final VoidCallback? onPressed,
    final bool isEnabled = true,
    final Widget? icon,
  })  : _isEnabled = isEnabled,
        _key = key,
        _title = title,
        _onPressed = onPressed,
        _icon = icon;

  final Key? _key;
  final bool _isEnabled;
  final String _title;
  final VoidCallback? _onPressed;
  final Widget? _icon;

  @override
  Widget build(BuildContext context) {
    return Container(
        height: Sizes.baseSixfold,
        width: ButtonStyles.maxWidth,
        child: OutlinedButton(
          key: _key,
          onPressed: _isEnabled ? _onPressed : null,
          style: OutlinedButton.styleFrom(
            primary: Colors.black87,
            minimumSize: Size(88, 36),
            padding: EdgeInsets.symmetric(horizontal: 16),
            shape: const RoundedRectangleBorder(
              borderRadius: BorderRadius.all(Radius.circular(Sizes.baseSingle)),
            ),
          ),
          child: _icon != null
              ? Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                  _icon!,
                  SizedBox(width: Sizes.baseSingle),
                  Flexible(child: _text(), fit: FlexFit.loose),
                ])
              : _text(),
        ));
  }

  Widget _text() {
    return Text(
      _title,
      textAlign: TextAlign.center,
      style: _isEnabled
          ? TextStyles.button
          : TextStyles.button
              .copyWith(color: OutlinedButtonStyles.disabledColor),
    );
  }
}
