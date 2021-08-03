import 'package:facio_design_system/components.dart';
import 'package:facio_design_system/src/components/buttons/contained_button_color.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class SmallContainedButton extends StatelessWidget {
  const SmallContainedButton({
    final Key? key,
    required final String title,
    final VoidCallback? onPressed,
    final bool isEnabled = true,
    final ContainedButtonColor color = ContainedButtonColor.brand,
  })  : _color = color,
        _key = key,
        _isEnabled = isEnabled,
        _onPressed = onPressed,
        _title = title;

  final Key? _key;
  final String _title;
  final VoidCallback? _onPressed;
  final bool _isEnabled;
  final ContainedButtonColor _color;

  @override
  Widget build(BuildContext context) {

    final ButtonStyle style = ElevatedButton.styleFrom(
      padding: EdgeInsets.fromLTRB(
        ButtonStyles.sizeSmallPaddingLeft,
        ButtonStyles.sizeSmallPaddingTop,
        ButtonStyles.sizeSmallPaddingRight,
        ButtonStyles.sizeSmallPaddingBottom
      ),
      primary: _color.backgroundColor,
      shape: new RoundedRectangleBorder(
        borderRadius: new BorderRadius.circular(ButtonStyles.sizeSmallBorderRadius)
      )
    );

    return Opacity(
      // TODO: adopt solid background colors in favor of opacity
      opacity: _isEnabled ? ButtonStyles.opacity.toDouble() : 0.5,
      child: ConstrainedBox(
        constraints: BoxConstraints.tightFor(height: ButtonStyles.sizeSmallHeight),
        child: TextButton(
          key: _key,
          onPressed: _isEnabled ? _onPressed : null,
          style: style,
          child: Text(
            _title,
            textAlign: TextAlign.center,
            style: TextStyles.button.copyWith(color: _color.fontColor)
          ),
        ),
      )
    );
  }
}