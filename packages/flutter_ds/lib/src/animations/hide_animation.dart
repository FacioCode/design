import 'package:flutter/widgets.dart';

class HideAnimation {
  HideAnimation() {
    focusNode.addListener(() {
      if (focusNode.hasFocus) {
        Future<void>.delayed(
            const Duration(milliseconds: 100),
            () => _focusOnComponent(
                keyAppBar, keyInputFocus, scrollController, 200));
      } else {
        _focusOnComponent(keyAppBar, keyInputFocus, scrollController, 1);
      }
    });
  }

  final ScrollController scrollController = ScrollController();
  final GlobalKey keyAppBar = GlobalKey();
  final GlobalKey keyInputFocus = GlobalKey();
  final FocusNode focusNode = FocusNode();

  void _focusOnComponent(GlobalKey keyAppBar, GlobalKey keyInputAmount,
      ScrollController scrollController, int animationMS) {
    final renderBoxAppBar =
        keyAppBar.currentContext!.findRenderObject() as RenderBox;
    final sizeAppBar = renderBoxAppBar.size;

    final renderBoxInputInstallments =
        keyInputAmount.currentContext!.findRenderObject() as RenderBox;
    final positionInputInstallments =
        renderBoxInputInstallments.localToGlobal(Offset.zero);

    final offset = positionInputInstallments.dy - sizeAppBar.height - 16;

    scrollController.animateTo(offset,
        curve: Curves.linear, duration: Duration(milliseconds: animationMS));
  }
}
