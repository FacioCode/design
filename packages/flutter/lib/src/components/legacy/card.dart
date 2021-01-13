import 'package:components/components.dart';
import 'package:facio_styles/facio_styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:meta/meta.dart';

class BaseCard extends StatelessWidget {
  const BaseCard({
    @required final Widget child,
    final EdgeInsets innerPadding = const EdgeInsets.all(CardContentStyles.padding),
    final EdgeInsets margin = LegacyTheme.defaultSpacing,
    final VoidCallback onTap,
    final double elevation = 3,
    final Color color = Colors.white,
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

  static const BorderRadius _defaultRadius = BorderRadius.all(Radius.circular(8.0));

  @override
  Widget build(BuildContext context) => Card(
        margin: _margin,
        elevation: _elevation,
        color: _color,
        shape: const RoundedRectangleBorder(
          borderRadius: _defaultRadius,
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
