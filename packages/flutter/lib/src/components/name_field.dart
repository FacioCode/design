import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

class FacioNameField extends StatelessWidget {
  const FacioNameField({
    final Key key,
    final String hintText,
    final FocusNode focusNode,
    final bool autofocus = false,
    final bool strictInput = true,
    @required final TextEditingController controller,
    @required final void Function(String) onChanged,
  })  : assert(controller != null),
        assert(onChanged != null),
        assert(autofocus != null),
        assert(strictInput != null),
        _key = key,
        _autofocus = autofocus,
        _controller = controller,
        _focusNode = focusNode,
        _hintText = hintText,
        _onChanged = onChanged,
        _strictInput = strictInput,
        super();

  final Key _key;
  final bool _autofocus;
  final TextEditingController _controller;
  final void Function(String) _onChanged;
  final String _hintText;
  final FocusNode _focusNode;
  final bool _strictInput;
  bool get _hasHint => _hintText != null && _hintText.isNotEmpty;

  static const String _numbersRegexText = r'[\d]';
  // All symbols on Android and iOS software keyboard.
  static const String _symbolsRegexText =
      r'''[@#$_&\-+()/*"':;!?,.№₱€¢£¥_&—_–·±★†‡„“”«»‚‘'‹›:;¡¿‽,~`|•√π÷×¶∆£¢€¥^°={}\\%©®™✓[\]<>♪ΩΠμ§←↑↓→′″∞≠≈‰℅«≤‹⟨⟩»≥›…’]''';
  // https://www.regextester.com/106421
  // https://www.unicode.org/emoji/charts/full-emoji-list.html
  static const String _emojisRegexText =
      r'(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])';
  static final RegExp _numbers = RegExp(_numbersRegexText);
  static final RegExp _symbols = RegExp(_symbolsRegexText);
  static final RegExp _emojis = RegExp(_emojisRegexText);

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      key: _key,
      autofocus: _autofocus,
      focusNode: _focusNode,
      controller: _controller,
      onChanged: _onChanged,
      autocorrect: false,
      textCapitalization: TextCapitalization.words,
      inputFormatters: [
        FilteringTextInputFormatter.singleLineFormatter,
        if (_strictInput) FilteringTextInputFormatter.deny(_numbers),
        if (_strictInput) FilteringTextInputFormatter.deny(_symbols),
        FilteringTextInputFormatter.deny(_emojis),
      ],
      keyboardType: TextInputType.name,
      decoration: InputDecoration(
        hintText: _hintText,
        hintStyle: _hasHint
            ? TextStyles.bodyText1.copyWith(
                height: 1.25, fontSize: 22.0, color: ColorPalette.baseGrey50)
            : null,
        filled: false,
        border: InputBorder.none,
        focusedBorder: InputBorder.none,
        enabledBorder: InputBorder.none,
        errorBorder: InputBorder.none,
        disabledBorder: InputBorder.none,
        contentPadding:
            const EdgeInsets.only(left: 15, bottom: 11, top: 11, right: 15),
      ),
      textAlign: TextAlign.left,
      style: TextStyles.bodyText1.copyWith(height: 1.25, fontSize: 22.0),
      cursorColor: Colors.black54,
    );
  }
}
