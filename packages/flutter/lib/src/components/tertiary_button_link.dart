import 'package:facio_styles/facio_styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class TertiaryButtonLink extends StatelessWidget {
  const TertiaryButtonLink({
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
    return FlatButton(
      key: _key,
      onPressed: _onPressed,
      splashColor: Colors.transparent,
      highlightColor: Colors.transparent,
      child: Text(
        _title,
        style: _isEnabled
            ? TextStyles.button.copyWith(color: LinkButtonStyles.defaultColor)
            : TextStyles.button.copyWith(color: OutlinedButtonStyles.disabledColor),
      ),
    );
  }
}
