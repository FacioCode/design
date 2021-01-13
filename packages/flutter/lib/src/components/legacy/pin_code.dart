import 'dart:async';

import 'package:components/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';

/// Pin code text fields which automatically changes focus and validates
class PinCodeTextField extends StatefulWidget {
  const PinCodeTextField({
    @required this.length,
    final Key key,
    this.obscureText = false,
    @required this.shouldTriggerFunctions,
    @required this.onDone,
    @required this.onErrorCheck,
    this.shape = PinCodeFieldShape.underline,
    this.textStyle = const TextStyle(fontSize: 18, color: Colors.black, fontWeight: FontWeight.bold),
  }) : super(key: key);

  /// length of how many cells there should be
  final int length;

  /// default value is false
  final bool obscureText;

  /// this stream will decide which functions to be called from [PinCodeEvent]
  final Stream<PinCodeEvent> shouldTriggerFunctions;

  /// callback which will be triggered if there is no error and will return the
  ///  complete string
  final ValueChanged<String> onDone;

  /// this callback will return value if there is any error or not
  final ValueChanged<bool> onErrorCheck;

  /// this defines the shape of the input fields. Default is underlined
  final PinCodeFieldShape shape;

  /// the style of the text, default is
  ///  [fontSize: 18, color: Colors.black, fontWeight: FontWeight.bold]
  final TextStyle textStyle;

  @override
  _PinCodeTextFieldState createState() => _PinCodeTextFieldState();
}

enum PinCodeEvent { submit, idle }

enum PinCodeFieldShape { box, underline, round }

class _PinCodeTextFieldState extends State<PinCodeTextField> {
  /// list of total [FocusNode] depending on the total length that the user put
  ///  in, which is obviously [widget.length]
  List<FocusNode> listOfFocusNodes;

  /// list of total [TextEditingController]
  List<TextEditingController> listOfControllers;

  /// error text for each of the cells
  List<String> errorTexts;

  /// this [StreamSubscription] will listen to the changes in our
  ///  [widget.shouldTriggerFunctions]
  StreamSubscription<PinCodeEvent> streamSubscription;
  InputBorder border;
  InputBorder focusedBorder;
  PinCodeFieldShape shape;

  @override
  void dispose() {
    streamSubscription.cancel();
    _disposeControllers();
    super.dispose();
  }

  void _disposeControllers() {
    for (var i = 0; i < listOfControllers.length; i++) {
      listOfControllers[i].dispose();
    }
  }

  final BorderSide _borderSideValue = const BorderSide(width: 1.5, color: LegacyColorPalette.charcoalGrey);

  void _setUpShape() {
    shape = widget.shape;

    if (shape == PinCodeFieldShape.box) {
      border = const OutlineInputBorder();
      focusedBorder = OutlineInputBorder(borderSide: _borderSideValue);
    } else if (shape == PinCodeFieldShape.underline) {
      border = const UnderlineInputBorder();
      focusedBorder = UnderlineInputBorder(borderSide: _borderSideValue);
    } else if (shape == PinCodeFieldShape.round) {
      border = OutlineInputBorder(borderRadius: BorderRadius.circular(25));
      focusedBorder = OutlineInputBorder(borderSide: _borderSideValue, borderRadius: BorderRadius.circular(25));
    }
  }

  @override
  void initState() {
    _setUpShape();
    assert(widget.length > 0);
    listOfFocusNodes = List<FocusNode>.generate(widget.length, (int index) => FocusNode());
    listOfControllers = List<TextEditingController>.generate(widget.length, (int index) => TextEditingController());
    errorTexts = List<String>.generate(widget.length, (int index) => null);
    streamSubscription = widget.shouldTriggerFunctions.listen(_onData);
    super.initState();
  }

  /// generating the [TextField]s
  List<Widget> _generateTextFields() {
    final resultList = <Widget>[];
    for (var i = 0; i < widget.length; i++) {
      resultList.add(
        Flexible(
          flex: 2,
          child: TextField(
            key: Key('key_pincode$i'),
            inputFormatters: <TextInputFormatter>[
              LengthLimitingTextInputFormatter(1),
              // this limits the input length of each TextField to be '1'
            ],
            onChanged: (String value) {
              if (value.length == 1) {
                if (errorTexts[i] != null) {
                  setState(() {
                    errorTexts[i] = null; // changing the state of the errorTexts
                  });
                }
                // changing focus after user enters an input
                if (i != widget.length - 1) {
                  FocusScope.of(context).requestFocus(listOfFocusNodes[i + 1]);
                } else {
                  FocusScope.of(context).requestFocus(FocusNode());
                }
              } else {
                if (i > 0) {
                  FocusScope.of(context).requestFocus(listOfFocusNodes[i - 1]);
                }
              }
            },
            obscureText: widget.obscureText,
            controller: listOfControllers[i],
            focusNode: listOfFocusNodes[i],
            textAlign: TextAlign.center,
            style: widget.textStyle,
            keyboardType: TextInputType.number,
            decoration: InputDecoration(
              border: border,
              errorText: errorTexts[i], // if null then no error, else will show error
              focusedBorder: focusedBorder,
            ),
          ),
        ),
      );
      if (i != widget.length - 1) {
        resultList.add(const Spacer());
      }
    }
    return resultList;
  }

  /// checks errors, will return true if there is any error. and also will
  ///  make the textField red.
  bool checkError() {
    var errorFound = false;
    for (var i = 0; i < listOfControllers.length; i++) {
      if (listOfControllers[i].text == null || listOfControllers[i].text.isEmpty) {
        errorFound = true;
        setState(() {
          errorTexts[i] = '';
        });
      } else {
        if (errorTexts[i] != null) {
          setState(() {
            errorTexts[i] = null;
          });
        }
      }
    }
    return errorFound;
  }

  /// will return the total string by appending all the strings of each cells
  String submitTotalString() {
    var result = '';
    for (var i = 0; i < listOfControllers.length; i++) {
      result += listOfControllers[i].text;
    }
    return result;
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      children: _generateTextFields(),
    );
  }

  /// listener function of [streamSubscription] and calling the callbacks
  Future<void> _onData(dynamic event) async {
    if (event == PinCodeEvent.submit) {
      if (checkError()) {
        widget.onErrorCheck(true);
      } else {
        widget.onErrorCheck(false);
        widget.onDone(submitTotalString());
      }
    }
  }
}
