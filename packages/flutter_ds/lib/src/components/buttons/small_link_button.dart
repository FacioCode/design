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

    final ButtonStyle buttonStyle = TextButton.styleFrom(
      padding: EdgeInsets.fromLTRB(
        ButtonStyles.sizeSmallPaddingLeft,
        ButtonStyles.sizeSmallPaddingTop,
        ButtonStyles.sizeSmallPaddingRight,
        ButtonStyles.sizeSmallPaddingBottom
      ),
      shape: new RoundedRectangleBorder(
        borderRadius: new BorderRadius.circular(ButtonStyles.sizeSmallBorderRadius)
      )
    );

    final TextStyle textStyle = TextStyles.button.copyWith(
      color: _isEnabled ? LinkButtonStyles.defaultColor : LinkButtonStyles.disabledColor
    );

    return Opacity(
      // TODO: adopt solid background colors in favor of opacity
      opacity: _isEnabled ? ButtonStyles.opacity.toDouble() : 0.5,
      child: ConstrainedBox(
        constraints: BoxConstraints.tightFor(height: ButtonStyles.sizeSmallHeight),
        child: TextButton(
          key: _key,
          onPressed: _isEnabled ? _onPressed : null,
          style: buttonStyle,
          child: Text(
            _title,
            style: textStyle
          ),
        ),
      )
    );
  }
}
