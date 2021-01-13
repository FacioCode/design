import 'package:components/components.dart';
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
        appBarLogoutOnPressed: () => {},
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              PrimaryButtonContained(title: 'details', onPressed: () => {}),
              TertiaryButtonLink(title: 'details', onPressed: () => {}),
              TertiaryButtonOutlined(title: 'details', onPressed: () => {}),
            ],
          ),
        ));
  }
}
