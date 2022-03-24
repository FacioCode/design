import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/svg.dart';

enum AlertVariant { filled, standard }

enum AlertColor { error, info, success, warning, neutral }

class Alert extends StatelessWidget {
  const Alert({
    final AlertVariant variant = AlertVariant.standard,
    required final AlertColor color,
    required SvgPicture icon,
    required String title,
    String? subtitle,
    VoidCallback? onTap,
    Key? key,
    Key? titleKey,
    Key? buttonKey,
    String? buttonTitle,
  })  : _key = key,
        _icon = icon,
        _titleKey = titleKey,
        _title = title,
        _subtitle = subtitle,
        _onTap = onTap,
        _variant = variant,
        _color = color,
        _buttonKey = buttonKey,
        _buttonTitle = buttonTitle;

  final Key? _key;
  final Key? _titleKey;
  final SvgPicture _icon;
  final String _title;
  final String? _subtitle;
  final VoidCallback? _onTap;
  final AlertVariant _variant;
  final AlertColor _color;
  final Key? _buttonKey;
  final String? _buttonTitle;

  @override
  Widget build(BuildContext context) {
    return BaseCard(
      key: _key,
      borderColor: Colors.transparent,
      elevation: 0,
      color: _backgroundColor,
      onTap: _onTap,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          _icon,
          const SizedBox(width: AlertStyles.iconMarginRight),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Text(_title, key: _titleKey, style: TextStyles.subtitle1),
                if (_subtitle != null)
                  Text(_subtitle!, style: TextStyles.bodyText2),
                if (_buttonTitle != null)
                  Padding(
                      padding: const EdgeInsets.only(top: Sizes.baseSingle),
                      child: _alertButton)
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget get _alertButton {
    switch (_color) {
      case AlertColor.neutral:
        return SmallOutlinedButton(
          title: _buttonTitle!,
          key: _buttonKey,
        );

      default:
        return SmallContainedButton(
            title: _buttonTitle!,
            key: _buttonKey,
            color: ContainedButtonColor.colorDefault);
    }
  }

  Color get _backgroundColor {
    switch (_color) {
      case AlertColor.error:
        return _variant == AlertVariant.standard
            ? AlertStyles.standardErrorBackgroundColor
            : AlertStyles.filledErrorBackgroundColor;
      case AlertColor.info:
        return _variant == AlertVariant.standard
            ? AlertStyles.standardInfoBackgroundColor
            : AlertStyles.filledInfoBackgroundColor;
      case AlertColor.success:
        return _variant == AlertVariant.standard
            ? AlertStyles.standardBrandBackgroundColor
            : AlertStyles.standardBrandBackgroundColor; // <-- missing
      case AlertColor.warning:
        return _variant == AlertVariant.standard
            ? AlertStyles.standardWarningBackgroundColor
            : AlertStyles.filledWarningBackgroundColor;
      case AlertColor.neutral:
        return AlertStyles.standardNeutralBackgroundColor;
      default:
        return AlertStyles.standardInfoBackgroundColor;
    }
  }
}
