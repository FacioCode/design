import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';

import 'money_text.dart';

class FacioBottomSheet extends StatelessWidget {
  const FacioBottomSheet({
    @required String text,
    @required String buttonTitle,
    @required VoidCallback buttonTap,
    bool buttonEnabled = true,
  })  : _text = text,
        _buttonTitle = buttonTitle,
        _buttonTap = buttonTap,
        _buttonEnabled = buttonEnabled;

  final String _text;
  final String _buttonTitle;
  final VoidCallback _buttonTap;
  final bool _buttonEnabled;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: Sizes.baseSingle * 9,
      decoration: const BoxDecoration(
        color: Colors.white,
        boxShadow: [
          BoxShadow(blurRadius: 8.0, spreadRadius: -6),
          BoxShadow(color: Colors.white, offset: Offset(0, 16)),
        ],
      ),
      child: Row(
        children: [
          Padding(
              padding: const EdgeInsets.only(
                left: Sizes.baseDouble,
                top: Sizes.baseNone,
              ),
              child: MoneyText(text: _text, style: TextStyles.bodyText2)),
          const Spacer(),
          Padding(
            padding: const EdgeInsets.only(right: Sizes.baseDouble),
            child: SmallContainedButton(
                title: _buttonTitle,
                isEnabled: _buttonEnabled,
                onPressed: _buttonTap),
          ),
        ],
      ),
    );
  }
}
