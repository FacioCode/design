import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class BaseChips extends StatelessWidget {
  const BaseChips({
    final Key key,
    @required final String title,
    final bool selected = false,
    final bool isLast = false,
    final VoidCallback onPressed,
  })  : assert(title != null),
        _title = title,
        _selected = selected,
        _last = isLast,
        _onPressed = onPressed,
        super(key: key);

  final String _title;
  final bool _selected;
  final bool _last;
  final VoidCallback _onPressed;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding:
          _last ? const EdgeInsets.all(0.0) : const EdgeInsets.only(right: 8.0),
      child: MaterialButton(
        elevation: 0,
        padding: const EdgeInsets.all(0.0),
        materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(30.0),
        ),
        color: _selected
            ? LegacyColorPalette.charcoalGreyTwo
            : LegacyColorPalette.whiteTwo,
        textColor:
            _selected ? Colors.white : LegacyColorPalette.charcoalGreyTwo,
        child: Text(
          _title.toUpperCase(),
        ),
        onPressed: _onPressed,
      ),
    );
  }
}
