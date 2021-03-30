import 'package:facio_design_system/styles.dart';
import 'package:flutter/material.dart';
import 'package:universal_io/io.dart';

class MoneyText extends StatelessWidget {
  const MoneyText({
    required this.text,
    required this.style,
    this.boldWeight = CurrencyStyles.fontWeight,
  });

  final String text;
  final TextStyle style;
  final FontWeight boldWeight;

  /// WORKAROUND(Nonaka): Temporary until official solution.
  /// Without this regex emojis have different sizes compared to fonts.
  /// Because of this bug it bounces the screen if you replace one to another such as we have in the home screen.
  /// For more details check this issue: https://github.com/flutter_ds/flutter/issues/28894
  static final emojiRegex = RegExp(
      '(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])');

  // Regex to match <b></b>
  static final boldRegex = RegExp(r'<b>(.*?)</b>');

  List<TextSpan> generateTextSpans(String text) {
    final List<TextSpan> spans = [];
    final TextStyle emojiStyle = style.copyWith(
      fontSize: style.fontSize! *
          (Platform.isAndroid ? 1.12 - 0.05 * 34 / style.fontSize! : 0.9),
      letterSpacing: 2,
    );

    final TextStyle boldStyle = style.copyWith(fontWeight: boldWeight);

    text.splitMapJoin(
      emojiRegex,
      onMatch: (m) {
        spans.add(
          TextSpan(
            text: m.group(0),
            style: emojiStyle,
          ),
        );
        return '';
      },
      onNonMatch: (s) {
        return s.splitMapJoin(
          boldRegex,
          onMatch: (m) {
            spans.add(
              TextSpan(
                text: m.group(1),
                style: boldStyle,
              ),
            );
            return '';
          },
          onNonMatch: (st) {
            spans.add(TextSpan(text: st));
            return '';
          },
        );
      },
    );
    return spans;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        child: RichText(
            text: TextSpan(children: generateTextSpans(text), style: style)));
  }
}
