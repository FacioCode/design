import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class BaseCard extends StatelessWidget {
  const BaseCard({
    @required final Widget child,
    final EdgeInsets innerPadding = const EdgeInsets.all(CardContentStyles.padding),
    final EdgeInsets margin = const EdgeInsets.only(bottom: Sizes.baseTriple),
    final VoidCallback onTap,
    final double elevation = 0,
    final Color color = ColorPalette.baseWhite,
  })  : assert(child != null),
        _child = child,
        _padding = innerPadding,
        _margin = margin,
        _onTap = onTap,
        _elevation = elevation,
        _color = color;

  final Widget _child;
  final EdgeInsets _padding;
  final EdgeInsets _margin;
  final VoidCallback _onTap;
  final double _elevation;
  final Color _color;

  static const BorderRadius _defaultRadius = BorderRadius.all(Radius.circular(PaperStyles.roundedBorderRadius));

  @override
  Widget build(BuildContext context) => Card(
        margin: _margin,
        elevation: _elevation,
        color: _color,
        shape: RoundedRectangleBorder(
          borderRadius: _defaultRadius,
          side: BorderSide(color: ColorPalette.baseGrey30),
        ),
        child: _clickableWrapper(
          clickable: _onTap != null,
          child: Padding(
            padding: _padding,
            child: _child,
          ),
        ),
      );

  Widget _clickableWrapper({
    final bool clickable,
    final Widget child,
  }) =>
      clickable
          ? InkWell(
              borderRadius: _defaultRadius,
              onTap: _onTap,
              child: child,
            )
          : child;
}
