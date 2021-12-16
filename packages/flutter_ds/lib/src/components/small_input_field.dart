import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

class SmallInputField extends StatelessWidget {
  const SmallInputField({
    final Key? key,
    final String? hintText,
    final FocusNode? focusNode,
    final bool autofocus = false,
    final bool capitalize = false,
    final TextEditingController? controller,
    final List<TextInputFormatter>? inputFormatters,
    final TextInputType? keyboardType,
    final void Function(String)? onChanged,
    final String? label,
    final String? errorMessage,
    final bool enabled = true,
  })  : _key = key,
        _autofocus = autofocus,
        _controller = controller,
        _focusNode = focusNode,
        _hintText = hintText,
        _onChanged = onChanged,
        _capitalize = capitalize,
        _inputFormatters = inputFormatters,
        _keyboardType = keyboardType,
        _label = label,
        _errorMessage = errorMessage,
        _enabled = enabled,
        super();

  final Key? _key;
  final bool _autofocus;
  final TextEditingController? _controller;
  final void Function(String)? _onChanged;
  final String? _hintText;
  final FocusNode? _focusNode;
  final bool _capitalize;
  final List<TextInputFormatter>? _inputFormatters;
  final TextInputType? _keyboardType;
  final String? _label;
  final String? _errorMessage;
  final bool _enabled;

  bool get _hasHint => _hintText != null && _hintText!.isNotEmpty;

  Color _getBorderColor() {
    if (_errorMessage != null) {
      return ColorPalette.baseIndianRed40;
    }
    if (_focusNode?.hasFocus == true) {
      return ColorPalette.baseSkyBlue40;
    }
    return ColorPalette.baseGrey10;
  }

  Color _getLabelColor() {
    if (!_enabled) {
      return ColorPalette.baseGrey60;
    }
    if (_errorMessage != null) {
      return ColorPalette.baseIndianRed60;
    }
    return ColorPalette.baseGrey80;
  }

  double _getBorderWidth() {
    if (_errorMessage != null || _focusNode?.hasFocus == true) {
      return 3;
    }
    return 0;
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          padding: const EdgeInsets.fromLTRB(Sizes.baseDouble, Sizes.baseSingle,
              Sizes.baseDouble, Sizes.baseDouble),
          decoration: BoxDecoration(
            color: ColorPalette.baseGrey10,
            border:
                Border.all(color: _getBorderColor(), width: _getBorderWidth()),
            borderRadius: BorderRadius.circular(Sizes.baseSingle),
          ),
          child: Column(
            children: [
              if (_label != null)
                Align(
                    alignment: Alignment.centerLeft,
                    child: Text(_label!,
                        style: TextStyles.caption
                            .copyWith(color: _getLabelColor()))),
              TextField(
                key: _key,
                enabled: _enabled,
                autofocus: _autofocus,
                focusNode: _focusNode,
                controller: _controller,
                onChanged: _onChanged,
                autocorrect: false,
                textCapitalization: _capitalize
                    ? TextCapitalization.words
                    : TextCapitalization.none,
                inputFormatters: [
                  FilteringTextInputFormatter.singleLineFormatter,
                  if (_inputFormatters != null) ..._inputFormatters!,
                ],
                keyboardType: _keyboardType,
                decoration: InputDecoration(
                  isDense: true,
                  prefixStyle: TextStyles.bodyText1
                      .copyWith(fontWeight: FontWeight.w400),
                  hintText: _hintText,
                  hintStyle: _hasHint
                      ? TextStyles.bodyText1.copyWith(
                          fontWeight: FontWeight.w400,
                          color: ColorPalette.baseGrey50)
                      : null,
                  filled: false,
                  border: InputBorder.none,
                  focusedBorder: InputBorder.none,
                  enabledBorder: InputBorder.none,
                  errorBorder: InputBorder.none,
                  disabledBorder: InputBorder.none,
                  contentPadding: const EdgeInsets.only(top: Sizes.baseSingle),
                  errorStyle: TextStyles.bodyText1.copyWith(
                      fontWeight: FontWeight.w400,
                      color: ColorPalette.baseIndianRed70),
                ),
                textAlign: TextAlign.left,
                style:
                    TextStyles.bodyText1.copyWith(fontWeight: FontWeight.w400),
                cursorColor: Colors.black54,
              ),
            ],
          ),
        ),
        if (_errorMessage != null)
          Align(
              alignment: Alignment.centerLeft,
              child: Text(_errorMessage!,
                  style: TextStyles.bodyText2
                      .copyWith(color: ColorPalette.baseIndianRed60)))
      ],
    );
  }
}
