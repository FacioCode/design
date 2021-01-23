import 'package:facio_design_system/components.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Components Example',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return FDSCanvas(
        appBarColor: Colors.white,
        hasAppBarLogo: true,
        appBarLogoutOnPressed: () => null,
        child: Center(
          child: BaseCard(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                SmallContainedButton(
                    title: 'small/contained/brand',
                    color: ContainedButtonColor.brand,
                    onPressed: () => null),
                SizedBox(height: Sizes.baseSingle),
                SmallContainedButton(
                    title: 'small/contained/danger',
                    color: ContainedButtonColor.danger,
                    onPressed: () => null),
                SizedBox(height: Sizes.baseSingle),
                SmallContainedButton(
                    title: 'small/contained/default',
                    color: ContainedButtonColor.colorDefault,
                    onPressed: () => null),
                SizedBox(height: Sizes.baseSingle),
                SmallContainedButton(
                    title: 'small/contained/warning',
                    color: ContainedButtonColor.warning,
                    onPressed: () => null),
                SizedBox(height: Sizes.baseSingle),
                SmallOutlinedButton(
                    title: 'small/outlined', onPressed: () => null),
                SizedBox(height: Sizes.baseSingle),
                SmallLinkButton(title: 'small/link', onPressed: () => null),
                SizedBox(height: Sizes.baseSingle),
                MediumOutlinedButton(
                    title: 'medium/outlined', onPressed: () => null),
                SizedBox(height: Sizes.baseSingle),
                MediumContainedButton(
                    title: 'medium/contained/brand',
                    color: ContainedButtonColor.brand,
                    onPressed: () => null),
                SizedBox(height: Sizes.baseSingle),
                MediumContainedButton(
                    title: 'medium/contained/danger',
                    color: ContainedButtonColor.danger,
                    onPressed: () => null),
                SizedBox(height: Sizes.baseSingle),
                MediumContainedButton(
                    title: 'medium/contained/default',
                    color: ContainedButtonColor.colorDefault,
                    onPressed: () => null),
                SizedBox(height: Sizes.baseSingle),
                MediumContainedButton(
                    title: 'medium/contained/warning',
                    color: ContainedButtonColor.warning,
                    onPressed: () => null),
                SizedBox(height: Sizes.baseSingle),
                MediumLinkButton(title: "medium/link", onPressed: () => null)
              ],
            ),
          ),
        ));
  }
}
