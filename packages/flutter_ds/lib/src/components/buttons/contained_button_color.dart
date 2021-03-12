import 'dart:ui';

import 'package:facio_design_system/styles.dart';

enum ContainedButtonColor { brand, colorDefault, danger, warning }

extension ContainedButtonColorsExtension on ContainedButtonColor {
  Color get backgroundColor {
    switch (this) {
      case ContainedButtonColor.colorDefault:
        return ContainedButtonStyles.defaultBackgroundColor;
      case ContainedButtonColor.brand:
        return ContainedButtonStyles.brandBackgroundColor;
      case ContainedButtonColor.danger:
        return ContainedButtonStyles.dangerBackgroundColor;
      case ContainedButtonColor.warning:
        return ContainedButtonStyles.warningBackgroundColor;
      default:
        return ContainedButtonStyles.defaultBackgroundColor;
    }
  }

  Color get fontColor {
    switch (this) {
      case ContainedButtonColor.colorDefault:
        return ContainedButtonStyles.defaultColor;
      case ContainedButtonColor.brand:
        return ContainedButtonStyles.brandColor;
      case ContainedButtonColor.danger:
        return ContainedButtonStyles.dangerColor;
      case ContainedButtonColor.warning:
        return ContainedButtonStyles.warningColor;
      default:
        return ContainedButtonStyles.defaultColor;
    }
  }

  Color get pressedBackgroundColor {
    switch (this) {
      case ContainedButtonColor.colorDefault:
        return ContainedButtonStyles.defaultPressedBackgroundColor;
      case ContainedButtonColor.brand:
        return ContainedButtonStyles.brandPressedBackgroundColor;
      case ContainedButtonColor.danger:
        return ContainedButtonStyles.dangerPressedBackgroundColor;
      case ContainedButtonColor.warning:
        return ContainedButtonStyles.warningPressedBackgroundColor;
      default:
        return ContainedButtonStyles.defaultPressedBackgroundColor;
    }
  }

  Color get pressedColor {
    switch (this) {
      case ContainedButtonColor.colorDefault:
        return ContainedButtonStyles.defaultPressedColor;
      case ContainedButtonColor.brand:
        return ContainedButtonStyles.brandPressedColor;
      case ContainedButtonColor.danger:
        return ContainedButtonStyles.dangerPressedColor;
      case ContainedButtonColor.warning:
        return ContainedButtonStyles.warningPressedColor;
      default:
        return ContainedButtonStyles.defaultPressedColor;
    }
  }
}
