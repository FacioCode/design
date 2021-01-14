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
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              PrimaryButtonContained(title: 'details', onPressed: () => null),
              TertiaryButtonLink(title: 'details', onPressed: () => null),
              TertiaryButtonOutlined(title: 'details', onPressed: () => null),
            ],
          ),
        ));
  }
}
