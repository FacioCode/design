import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

import 'masks/currency_mask.dart';
import 'masks/magic_mask.dart';

enum InputType { currency, cpf, phone, personName }

class FacioInputField extends StatelessWidget {
  const FacioInputField({
    final Key? key,
    final String? hintText,
    final FocusNode? focusNode,
    final bool autofocus = false,
    final bool capitalize = false,
    final TextEditingController? controller,
    final List<TextInputFormatter>? inputFormatters,
    final TextInputType? keyboardType,
    final void Function(String)? onChanged,
    final InputType? inputType,
    final String? label,
    final Widget? hint,
  })  : _key = key,
        _autofocus = autofocus,
        _controller = controller,
        _focusNode = focusNode,
        _hintText = hintText,
        _onChanged = onChanged,
        _capitalize = capitalize,
        _inputFormatters = inputFormatters,
        _keyboardType = keyboardType,
        _inputType = inputType,
        _label = label,
        _hint = hint,
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
  final InputType? _inputType;
  final String? _label;
  final Widget? _hint;

  bool get _hasHint => _hintText != null && _hintText!.isNotEmpty;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        if (_label != null)
          Padding(
            padding: const EdgeInsets.only(bottom: 8.0),
            child: Align(
                alignment: Alignment.centerLeft,
                child: Text(_label!, style: TextStyles.subtitle1)),
          ),
        Container(
          height: Sizes.baseEightfold,
          decoration: BoxDecoration(
            color: ColorPalette.baseGrey10,
            borderRadius: BorderRadius.circular(Sizes.baseSingle),
          ),
          child: Center(
            child: TextField(
              key: _key,
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
                FilteringTextInputFormatter.deny(TextInputMask.emojis),
                if (_inputFormatters != null) ..._inputFormatters!,
                if (_inputType == InputType.personName)
                  FilteringTextInputFormatter.deny(TextInputMask.numbers),
                if (_inputType == InputType.personName)
                  FilteringTextInputFormatter.deny(TextInputMask.symbols),
                if (_inputType == InputType.cpf)
                  TextInputMask(mask: '999.999.999-99'),
                if (_inputType == InputType.currency) CurrencyMask(),
                if (_inputType == InputType.phone)
                  TextInputMask(mask: '(99) 9 9999 9999'),
              ],
              keyboardType: keyboardType(),
              decoration: InputDecoration(
                prefixText: _inputType == InputType.currency ? 'R\$ ' : '',
                prefixStyle:
                    TextStyles.headline2.copyWith(fontWeight: FontWeight.w400),
                hintText: _hintText,
                hintStyle: _hasHint
                    ? TextStyles.headline2.copyWith(
                        fontWeight: FontWeight.w400,
                        color: ColorPalette.baseGrey50)
                    : null,
                filled: false,
                border: InputBorder.none,
                focusedBorder: InputBorder.none,
                enabledBorder: InputBorder.none,
                errorBorder: InputBorder.none,
                disabledBorder: InputBorder.none,
                contentPadding: const EdgeInsets.only(
                    left: Sizes.baseDouble,
                    bottom: 12,
                    top: 12,
                    right: Sizes.baseDouble),
                errorStyle: TextStyles.headline2.copyWith(
                    fontWeight: FontWeight.w400,
                    color: ColorPalette.baseIndianRed70),
              ),
              textAlign: TextAlign.left,
              style: TextStyles.headline2.copyWith(fontWeight: FontWeight.w400),
              cursorColor: Colors.black54,
            ),
          ),
        ),
        AnimatedSwitcher(
          duration: const Duration(milliseconds: 200),
          child: _hint == null
              ? const SizedBox()
              : Padding(
                  padding: const EdgeInsets.only(top: Sizes.baseDouble),
                  child: Align(
                    alignment: Alignment.centerLeft,
                    child: _hint,
                  ),
                ),
        )
      ],
    );
  }

  TextInputType keyboardType() {
    if (_keyboardType != null) {
      return _keyboardType!;
    } else {
      switch (_inputType) {
        case InputType.cpf:
        case InputType.phone:
        case InputType.currency:
          return TextInputType.number;
        case InputType.personName:
        default:
          return TextInputType.name;
      }
    }
  }
}
