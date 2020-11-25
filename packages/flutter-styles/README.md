# Facio Styles for Flutter

Facio Design System style package for use in Flutter applications.

The styles in this package are consumed by the UI components of Facio applications built on Flutter.

## Install

Open your project `pubspec.yaml` and, at `dependencies`, add `facio_styles`. Example:

```yaml
dependencies:
 flutter: ^0.12.2
   sdk: flutter
 facio_styles
```

Then run `flutter pub get`.

The following success message must appear:

```
Running "flutter pub get" in example...
Process finished with exit code 0
```

## Import

In your dart file, add the following import:
```dart
import 'package:facio_styles/main.dart';
```

## Usage

Now you are ready to use some component tokens like these:

```dart
AppBarStyles.appBarColorDefaultBackgroundColor
```

You can also use some `ColorPalette` base tokens:

```dart
ColorPalette.baseAquamarine90

ColorPalette.fontDefault
```

Can check our [API Reference](https://pub.dev/documentation/facio_styles/latest/facio_styles/facio_styles-library.html)
for more examples.
