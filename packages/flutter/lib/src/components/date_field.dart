import 'package:facio_styles/facio_styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

class FDSDateField extends StatelessWidget {
  const FDSDateField({
    final Key key,
    @required final TextEditingController controller,
    @required final void Function(String) onChanged,
    final int maxLength,
    final bool autofocus = false,
    final FocusNode focusNode,
  })  : assert(controller != null),
        assert(onChanged != null),
        assert(autofocus != null),
        _key = key,
        _autofocus = autofocus,
        _controller = controller,
        _focusNode = focusNode,
        _maxLength = maxLength,
        _onChanged = onChanged,
        super();

  final Key _key;
  final TextEditingController _controller;
  final void Function(String) _onChanged;
  final int _maxLength;
  final bool _autofocus;
  final FocusNode _focusNode;

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      key: _key,
      autofocus: _autofocus,
      focusNode: _focusNode,
      controller: _controller,
      onChanged: _onChanged,
      autocorrect: false,
      inputFormatters: [
        FilteringTextInputFormatter.digitsOnly,
        LengthLimitingTextInputFormatter(_maxLength),
      ],
      textInputAction: TextInputAction.next,
      keyboardType: TextInputType.datetime,
      maxLengthEnforced: true,
      maxLength: _maxLength,
      maxLines: 1,
      decoration: const InputDecoration(
        filled: false,
        border: InputBorder.none,
        focusedBorder: InputBorder.none,
        enabledBorder: InputBorder.none,
        errorBorder: InputBorder.none,
        disabledBorder: InputBorder.none,
        counterText: '',
        counterStyle: TextStyle(
          height: double.minPositive,
        ),
        contentPadding: EdgeInsets.only(left: 15, bottom: 11, top: 11, right: 15),
      ),
      textAlign: TextAlign.center,
      style: TextStyles.bodyText1.copyWith(height: 1.25, fontSize: 22.0),
      cursorColor: Colors.black54,
    );
  }
}
