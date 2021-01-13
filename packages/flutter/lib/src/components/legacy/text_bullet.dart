import 'package:components/components.dart';
import 'package:flutter/widgets.dart';

class TextBullet extends StatelessWidget {
  const TextBullet([final bool colorful = true]) : _checked = colorful;

  final bool _checked;
  static const double _size = 10.0;
  static const BorderRadius _border = BorderRadius.all(Radius.circular(8.0));

  @override
  Widget build(BuildContext context) {
    return Container(
      width: _size,
      height: _size,
      decoration: BoxDecoration(
        borderRadius: _border,
        color: _checked ? LegacyColorPalette.aquaMarine : LegacyColorPalette.charcoalGrey,
      ),
    );
  }
}
