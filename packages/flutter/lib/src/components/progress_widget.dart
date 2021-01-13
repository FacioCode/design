import 'package:facio_styles/facio_styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class ProgressWidget extends StatelessWidget {
  const ProgressWidget({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: CircularProgressIndicator(
          valueColor: AlwaysStoppedAnimation<Color>(ColorPalette.baseGrey50),
        ),
      ),
    );
  }
}
