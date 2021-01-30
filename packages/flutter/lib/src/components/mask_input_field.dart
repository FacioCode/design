import 'dart:math';

import 'package:flutter/services.dart';
import 'package:flutter/widgets.dart';
import 'package:intl/intl.dart';

class MaskInputField extends TextInputFormatter {
  MaskInputField(
      {String mask = '+# (###) ###-##-##', Map<String, RegExp> filter})
      : assert(mask != null),
        assert(mask.isNotEmpty) {
    updateMask(mask,
        filter: filter ??
            <String, RegExp>{'#': RegExp(r'[0-9]'), 'A': RegExp(r'[^0-9]')});
  }

  // All symbols on Android and iOS software keyboard.
  // https://www.regextester.com/106421
  // https://www.unicode.org/emoji/charts/full-emoji-list.html

  static const String _symbolsRegexText =
      r'''[@#$_&\-+()/*"':;!?,.№₱€¢£¥_&—_–·±★†‡„“”«»‚‘'‹›:;¡¿‽,~`|•√π÷×¶∆£¢€¥^°={}\\%©®™✓[\]<>♪ΩΠμ§←↑↓→′″∞≠≈‰℅«≤‹⟨⟩»≥›…’]''';
  static const String _emojisRegexText =
      r'(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])';

  static const String _cpfMask = '###.###.###-##';
  static const String _phoneMask = '(##) # #### ####';
  static const String _number = '######';

  static const String numbersRegexText = r'[\d]';
  static final RegExp numbers = RegExp(numbersRegexText);
  static final RegExp symbols = RegExp(_symbolsRegexText);
  static final RegExp emojis = RegExp(_emojisRegexText);

  static final Map<String, RegExp> _filterDigit = <String, RegExp>{
    '#': numbers
  };

  static TextInputFormatter get cpf =>
      MaskInputField(mask: _cpfMask, filter: _filterDigit);
  static TextInputFormatter get phone =>
      MaskInputField(mask: _phoneMask, filter: _filterDigit);
  static TextInputFormatter get currency => CurrencyTextInputFormatter();
  static TextInputFormatter get onlyNumber =>
      MaskInputField(mask: _number, filter: _filterDigit);

  String _mask;
  List<String> _maskChars;
  Map<String, RegExp> _maskFilter;

  int _maskLength;
  final List<String> _resultTextArray = <String>[];
  String _resultTextMasked = '';
  bool _waitForNext = true;

  void clear() {
    _resultTextArray.clear();
    _resultTextMasked = '';
  }

  set setResultTextMasked(String resultTextMasked) {
    _resultTextMasked = resultTextMasked;
  }

  TextEditingValue updateMask(String mask, {Map<String, RegExp> filter}) {
    _mask = mask;
    if (filter != null) {
      _updateFilter(filter);
    }
    _calcMaskLength();
    final unmaskedText = getUnmaskedText();
    _resultTextArray.clear();
    _resultTextMasked = '';
    return _formatUpdate(
        const TextEditingValue(),
        TextEditingValue(
            text: unmaskedText,
            selection: TextSelection(
                baseOffset: unmaskedText.length,
                extentOffset: unmaskedText.length)));
  }

  String getMaskedText() {
    return _resultTextMasked;
  }

  String getUnmaskedText() {
    return _resultTextArray.join();
  }

  bool isFill() {
    return _resultTextArray.length == _maskLength;
  }

  @override
  TextEditingValue formatEditUpdate(
      TextEditingValue oldValue, TextEditingValue newValue) {
    if (!_waitForNext) {
      return oldValue;
    } else {
      if (WidgetsBinding.instance != null) {
        _waitForNext = false;
        WidgetsBinding.instance.addPostFrameCallback((_) {
          _waitForNext = true;
        });
      }
      return _formatUpdate(oldValue, newValue);
    }
  }

  TextEditingValue _formatUpdate(
      TextEditingValue oldValue, TextEditingValue newValue) {
    final selectionBefore = oldValue.selection;

    final textBefore = oldValue.text;
    final textAfter = newValue.text;

    final startBefore = selectionBefore.start == -1 ? 0 : selectionBefore.start;
    final countBefore = selectionBefore.start == -1 || selectionBefore.end == -1
        ? 0
        : selectionBefore.end - selectionBefore.start;

    final after = textAfter.length - (textBefore.length - countBefore);
    final removed = after < 0 ? after.abs() : 0;

    final startAfter = startBefore + (after < 0 ? after : 0);
    final endAfter = startAfter + (after > 0 ? after : 0);

    final replaceStart = startBefore - removed;
    final replaceLength = countBefore + removed;

    var currentTotalText = _resultTextArray.length;
    var selectionStart = 0;
    var selectionLength = 0;
    for (var i = 0; i < replaceStart + replaceLength; i++) {
      if (_maskChars.contains(_mask[i]) && currentTotalText > 0) {
        currentTotalText -= 1;
        if (i < replaceStart) {
          selectionStart += 1;
        }
        if (i >= replaceStart) {
          selectionLength += 1;
        }
      }
    }

    final replacementText = textAfter.substring(startAfter, endAfter);
    var targetCursorPosition = selectionStart;
    if (replacementText.isEmpty) {
      _resultTextArray.removeRange(
          selectionStart, selectionStart + selectionLength);
    } else {
      if (selectionLength > 0) {
        _resultTextArray.removeRange(
            selectionStart, selectionStart + selectionLength);
      }
      _insertToResultText(selectionStart, replacementText);
      targetCursorPosition += replacementText.length;
    }

    var curTextPos = 0;
    var maskPos = 0;
    _resultTextMasked = '';
    var cursorPos = -1;
    var nonMaskedCount = 0;

    while (maskPos < _mask.length) {
      final curMaskChar = _mask[maskPos];
      final isMaskChar = _maskChars.contains(curMaskChar);

      var curTextInRange = curTextPos < _resultTextArray.length;

      String curTextChar;
      if (isMaskChar && curTextInRange) {
        while (curTextChar == null && curTextInRange) {
          final potentialTextChar = _resultTextArray[curTextPos];
          if (_maskFilter[curMaskChar].hasMatch(potentialTextChar)) {
            curTextChar = potentialTextChar;
          } else {
            _resultTextArray.removeAt(curTextPos);
            curTextInRange = curTextPos < _resultTextArray.length;
            if (curTextPos <= targetCursorPosition) {
              targetCursorPosition -= 1;
            }
          }
        }
      }

      if (isMaskChar && curTextInRange) {
        _resultTextMasked += curTextChar;
        if (curTextPos == targetCursorPosition && cursorPos == -1) {
          cursorPos = maskPos - nonMaskedCount;
        }
        nonMaskedCount = 0;
        curTextPos += 1;
      } else {
        if (curTextPos == targetCursorPosition &&
            cursorPos == -1 &&
            !curTextInRange) {
          cursorPos = maskPos;
        }

        if (!curTextInRange) {
          break;
        } else {
          _resultTextMasked += _mask[maskPos];
        }

        nonMaskedCount++;
      }

      maskPos += 1;
    }

    if (_resultTextArray.length > _maskLength) {
      _resultTextArray.removeRange(_maskLength, _resultTextArray.length);
    }

    final finalCursorPosition =
        cursorPos == -1 ? _resultTextMasked.length : cursorPos;
    return TextEditingValue(
        text: _resultTextMasked,
        selection: TextSelection(
            baseOffset: finalCursorPosition,
            extentOffset: finalCursorPosition));
  }

  void _insertToResultText(int start, String substring) {
    for (var i = 0; i < substring.length; i++) {
      _resultTextArray.insert(start + i, substring[i]);
    }
  }

  void _calcMaskLength() {
    _maskLength = 0;
    for (var i = 0; i < _mask.length; i++) {
      if (_maskChars.contains(_mask[i])) {
        _maskLength++;
      }
    }
  }

  void _updateFilter(Map<String, RegExp> filter) {
    _maskFilter = filter;
    _maskChars = _maskFilter.keys.toList(growable: false);
  }
}

/// The `symbol` argument is used to symbol of NumberFormat.
/// Put '\$' for symbol
///
/// The `locale` argument is used to locale of NumberFormat.
/// Put 'en' or 'es' for locale
///
/// The `decimalDigits` argument is used to decimalDigits of NumberFormat.
/// Defaults `decimalDigits` is 2.
class CurrencyTextInputFormatter extends TextInputFormatter {
  CurrencyTextInputFormatter({
    this.symbol = '',
    this.locale = 'pt-BR',
    this.decimalDigits = 2,
  });

  final String symbol;
  final String locale;
  final int decimalDigits;

  @override
  TextEditingValue formatEditUpdate(
      TextEditingValue oldValue, TextEditingValue newValue) {
    bool isRemovedCharacter =
        oldValue.text.length - 1 == newValue.text.length &&
            oldValue.text.startsWith(newValue.text);

    // bool isInsertedCharacter =
    //     oldValue.text.length + 1 == newValue.text.length && newValue.text.startsWith(oldValue.text);
    // Apparently, Flutter has a bug where the framework calls
    // formatEditUpdate twice, or even four times, after a backspace press (see
    // https://github.com/gtgalone/currency_text_input_formatter/issues/11).
    // However, only the first of these calls has inputs which are consistent
    // with a character insertion/removal at the end (which is the most common
    // use case of editing the TextField - the others being insertion/removal
    // in the middle, or pasting text onto the TextField). This condition
    // fixes a problem where a character wasn't properly erased after a
    // backspace press, when this Flutter bug was present. This comes at the
    // cost of losing insertion/removal in the middle and pasting text.
    // if (newValue.text.length - oldValue.text.length <= 1 && !isInsertedCharacter && !isRemovedCharacter) {
    //   return oldValue;
    // }

    final format = NumberFormat.currency(
        locale: locale, decimalDigits: decimalDigits, symbol: symbol);
    bool isNegative = newValue.text.startsWith('-');
    String newText = newValue.text.replaceAll(RegExp('[^0-9]'), '');

    // If the user wants to remove a digit, but the last character of the
    // formatted text is not a digit (for example, "1,00 €"), we need to remove
    // the digit manually.
    if (isRemovedCharacter && !_lastCharacterIsDigit(oldValue.text)) {
      int length = newText.length - 1;
      newText = newText.substring(0, length > 0 ? length : 0);
    }

    if (newText.trim() == '') {
      return newValue.copyWith(
          text: isNegative ? '-' : '',
          selection: TextSelection.collapsed(offset: isNegative ? 1 : 0));
    } else if (newText == '00' || newText == '000') {
      return TextEditingValue(
          text: isNegative ? '-' : '',
          selection: TextSelection.collapsed(offset: isNegative ? 1 : 0));
    }

    dynamic newInt;

    if (newValue.text.length - oldValue.text.length > 1) {
      // Is copying pasting
      String newText = newValue.text.replaceAll(
          RegExp(
              '[^0-9|${format.symbols.DECIMAL_SEP}|${format.symbols.GROUP_SEP}]'),
          '');
      newInt = format.parse(newText);
    } else {
      // Is typing
      newInt = int.parse(newText);
      if (decimalDigits > 0) {
        newInt /= pow(10, decimalDigits);
      }
    }

    String newString = (isNegative ? '-' : '') + format.format(newInt).trim();
    return TextEditingValue(
      text: newString,
      selection: TextSelection.collapsed(offset: newString.length),
    );
  }

  static bool _lastCharacterIsDigit(String text) {
    String lastChar = text.substring(text.length - 1);
    return RegExp('[0-9]').hasMatch(lastChar);
  }
}
