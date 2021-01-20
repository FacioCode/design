import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class LargeContainedButton extends StatelessWidget {
  const LargeContainedButton({
    @required final String title,
    final VoidCallback onPressed,
    final bool isEnabled = true,
    final Key key,
  })  : assert(title != null),
        _title = title,
        _onPressed = onPressed,
        _isEnabled = isEnabled,
        _key = key;

  final String _title;
  final VoidCallback _onPressed;
  final bool _isEnabled;
  final Key _key;

  @override
  Widget build(BuildContext context) {
    return Opacity(
      opacity: _isEnabled ? 1 : 0.5,
      child: Container(
        height: Sizes.baseSixfold,
        width: Sizes.baseSingle * 35,
        decoration: BoxDecoration(
          gradient: const LinearGradient(
            begin: Alignment.bottomLeft,
            end: Alignment.topRight,
            colors: <Color>[ColorPalette.baseAquamarine50, ColorPalette.baseAquamarine60],
          ),
          borderRadius: BorderRadius.circular(Sizes.baseSingle),
        ),
        child: FlatButton(
          key: _key,
          onPressed: _isEnabled ? _onPressed : null,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(Sizes.baseSingle),
          ),
          child: Text(
            _title,
            textAlign: TextAlign.center,
            style: TextStyles.button.copyWith(fontWeight: FontWeight.w700),
          ),
        ),
      ),
    );
  }
}
