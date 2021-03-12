import 'dart:ui';

import 'package:facio_design_system/components.dart';
import 'package:facio_design_system/src/components/buttons/small_link_button.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class BaseAppBarButton {
  BaseAppBarButton({
    this.iconData,
    this.title,
    this.key,
    required this.onPressed,
  }) : assert(iconData != null || title != null);

  final IconData? iconData;
  final String? title;
  final VoidCallback onPressed;
  final Key? key;
}

class BaseAppBar extends AppBar {
  BaseAppBar(
    final BuildContext context, {
    final Key? key,
    final String title = '',
    final bool logo = false,
    final bool centerTitle = true,
    final bool hasBackButton = true,
    final VoidCallback? onBackPressed,
    final BaseAppBarButton? rightBarButton,
    final Color backgroundColor = Colors.transparent,
  }) : super(
          backgroundColor: backgroundColor,
          brightness: Brightness.light,
          elevation: 0,
          key: key,
          title: logo
              ? LegacyTheme.logoAppBar
              : Text(
                  title,
                  style: TextStyles.headline4,
                ),
          centerTitle: centerTitle,
          leading: hasBackButton
              ? IconButton(
                  key: const Key('app_bar_back_button'),
                  icon: const Icon(
                    Icons.arrow_back_ios,
                    color: LegacyTheme.primaryColor,
                  ),
                  onPressed: onBackPressed ?? () => Navigator.of(context).pop(),
                )
              : null,
          actions: _actionsFromBarButton(context, rightBarButton),
        );

  static List<Widget> _actionsFromBarButton(
    final BuildContext context,
    final BaseAppBarButton? barButton,
  ) {
    final actions = <Widget>[];
    if (barButton != null) {
      if (barButton.iconData != null) {
        actions.add(
          IconButton(
            icon: Icon(barButton.iconData, color: LegacyTheme.primaryColor),
            onPressed: barButton.onPressed,
          ),
        );
      } else {
        actions.add(SmallLinkButton(
            onPressed: barButton.onPressed,
            title: barButton.title!,
            key: barButton.key));
      }
    }
    return actions;
  }
}
