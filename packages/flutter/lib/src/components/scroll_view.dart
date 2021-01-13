import 'package:flutter/widgets.dart';

class FDSScrollView extends StatelessWidget {
  const FDSScrollView({
    final Key key,
    @required final Widget child,
  })  : assert(child != null),
        _child = child,
        super(key: key);

  final Widget _child;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraint) {
        return SingleChildScrollView(
          child: ConstrainedBox(
            constraints: BoxConstraints(minHeight: constraint.maxHeight),
            child: IntrinsicHeight(
              child: _child,
            ),
          ),
        );
      },
    );
  }
}
