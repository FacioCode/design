import 'package:facio_design_system/components.dart';
import 'package:facio_design_system/src/components/buttons/contained_button_color.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class SmallContainedButton extends StatelessWidget {
  const SmallContainedButton({
    final Key key,
    @required final String title,
    final VoidCallback onPressed,
    final bool isEnabled = true,
    final EdgeInsets padding = const EdgeInsets.fromLTRB(
        Sizes.baseDouble, Sizes.baseNone, Sizes.baseDouble, Sizes.baseSingle),
    final ContainedButtonColor color = ContainedButtonColor.brand,
  })  : assert(title != null),
        assert(isEnabled != null),
        assert(padding != null),
        assert(color != null),
        _color = color,
        _key = key,
        _isEnabled = isEnabled,
        _onPressed = onPressed,
        _padding = padding,
        _title = title;

  final Key _key;
  final String _title;
  final VoidCallback _onPressed;
  final bool _isEnabled;
  final EdgeInsets _padding;
  final ContainedButtonColor _color;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: _padding,
      child: Container(
        height: ButtonStyles.sizeSmallHeight,
        decoration: BoxDecoration(
          color: _color.backgroundColor,
          borderRadius:
              BorderRadius.circular(ButtonStyles.sizeSmallBorderRadius),
        ),
        child: FlatButton(
          key: _key,
          onPressed: _isEnabled ? _onPressed : null,
          highlightColor: _color.pressedBackgroundColor,
          shape: RoundedRectangleBorder(
            borderRadius:
                BorderRadius.circular(ButtonStyles.sizeSmallBorderRadius),
          ),
          child: Text(_title,
              textAlign: TextAlign.center,
              style: TextStyles.button.copyWith(color: _color.fontColor)),
        ),
      ),
    );
  }
}
