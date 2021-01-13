import 'package:flutter/widgets.dart';

/// Makes keyboard close on tap outside
class KeyboardHandler extends StatelessWidget {
  const KeyboardHandler({
    @required final Widget child,
  })  : assert(child != null),
        _child = child;

  final Widget _child;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => FocusScope.of(context).requestFocus(FocusNode()),
      child: _child,
    );
  }
}
