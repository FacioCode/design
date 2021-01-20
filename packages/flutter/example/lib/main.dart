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
                MediumContainedButton(title: 'medium/contained', onPressed: () => null),
                SizedBox(height: Sizes.baseSingle),
                MediumOutlinedButton(title: 'medium/outlined', onPressed: () => null),
                SizedBox(height: Sizes.baseSingle),
                MediumLinkButton(title: 'medium/link', onPressed: () => null),
                SizedBox(height: Sizes.baseSingle),
                LargeOutlinedButton(title: 'large/outlined', onPressed: () => null),
                SizedBox(height: Sizes.baseSingle),
                LargeContainedButton(title: 'large/contained', onPressed: () => null),
              ],
            ),
          ),
        ));
  }
}
