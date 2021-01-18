# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0](https://github.com/FacioCode/design/compare/v0.34.5...v1.0.0) (2021-01-18)

**Note:** Version bump only for package @faciocode/design





## [0.34.5](https://github.com/FacioCode/design/compare/v0.34.4...v0.34.5) (2021-01-15)

**Note:** Version bump only for package @faciocode/design





## [0.34.4](https://github.com/FacioCode/design/compare/v0.34.3...v0.34.4) (2021-01-15)

**Note:** Version bump only for package @faciocode/design





## [0.34.3](https://github.com/FacioCode/design/compare/v0.34.2...v0.34.3) (2021-01-15)


### Bug Fixes

* **pipeline:** remove unecessary 'meta' dependency ([a89ba85](https://github.com/FacioCode/design/commit/a89ba85d37a39d8be6b5757d404c06ebd099d3c3))





## [0.34.2](https://github.com/FacioCode/design/compare/v0.34.1...v0.34.2) (2021-01-15)


### Bug Fixes

* **pipeline:** add dependency required to publish the lib ([d69be9c](https://github.com/FacioCode/design/commit/d69be9cf9b22fb45b551e4f1be0467772c446ace))





## [0.34.1](https://github.com/FacioCode/design/compare/v0.34.0...v0.34.1) (2021-01-14)


### Code Refactoring

* **flutter:** change all references from `flutter-styles` to `flutter` ([4c2190d](https://github.com/FacioCode/design/commit/4c2190dbce5eec00eccacd7d92df5b66514802dc))


### BREAKING CHANGES

* **flutter:** Now `facio_components` Flutter package will be named `facio_design_system`. Folder `flutter-styles` was renamed to `flutter`



## [0.33.2](https://github.com/FacioCode/design/compare/v0.30.3...v0.33.2) (2021-01-14)


### Features

* **flutter:** brings Facio's components to Design System project ([a7fd0c4](https://github.com/FacioCode/design/commit/a7fd0c48aca68f9a769de2d78bee7b485835642d))



## 0.30.3 (2021-01-11)





# [0.34.0](https://github.com/FacioCode/design/compare/v0.33.2...v0.34.0) (2021-01-14)


### Code Refactoring

* **flutter:** change all references from `flutter-styles` to `flutter` ([4c2190d](https://github.com/FacioCode/design/commit/4c2190dbce5eec00eccacd7d92df5b66514802dc))


### Features

* **flutter:** brings Facio's components to Design System project ([a7fd0c4](https://github.com/FacioCode/design/commit/a7fd0c48aca68f9a769de2d78bee7b485835642d))


### BREAKING CHANGES

* **flutter:** Now `facio_components` Flutter package will be named `facio_design_system`. Folder `flutter-styles` was renamed to `flutter`



## 0.30.3 (2021-01-11)





## [0.33.2](https://github.com/FacioCode/design/compare/v0.33.1...v0.33.2) (2021-01-14)


### Bug Fixes

* **react:** add missing font weight style to Currency ([337b25b](https://github.com/FacioCode/design/commit/337b25b4216b6eb5c114e5d5d2d4c12c33e1b830))
* **react:** prevent TypeScript error because of missing `css` property ([f08e015](https://github.com/FacioCode/design/commit/f08e01505ff1a1e3b3c209d0ac8f281f181f02ad))



# 0.33.0 (2021-01-14)





## [0.33.1](https://github.com/FacioCode/design/compare/v0.33.0...v0.33.1) (2021-01-14)


### Bug Fixes

* **react:** add missing font weight style to Currency ([337b25b](https://github.com/FacioCode/design/commit/337b25b4216b6eb5c114e5d5d2d4c12c33e1b830))
* **react:** prevent TypeScript error because of missing `css` property ([f08e015](https://github.com/FacioCode/design/commit/f08e01505ff1a1e3b3c209d0ac8f281f181f02ad))





# [0.33.0](https://github.com/FacioCode/design/compare/v0.32.7...v0.33.0) (2021-01-14)


### Code Refactoring

* **flutter-styles:** rename `Alert` component tokens ([ef9932a](https://github.com/FacioCode/design/commit/ef9932a190fbdcf85c388a4510097f7c01c7c160))
* **style-dictionary:** move alert margin tokens from `root` to `gutters` ([51385e6](https://github.com/FacioCode/design/commit/51385e65960346b556229f871525fc98c951b5f2))
* **styles:** move Alert margin tokens to gutters ([0ad11e7](https://github.com/FacioCode/design/commit/0ad11e7ba45d5c945d707d0238e5c40d2ba1cb98))
* **styles:** rename alert component tokens ([e1f62db](https://github.com/FacioCode/design/commit/e1f62dbd4d093d003b2ce476b0d3192ecba489ae))


### Features

* **react:** add `gutters` property to `Alert` ([145c577](https://github.com/FacioCode/design/commit/145c5771e5709274f45f77efb7d92c635e2082ef))


### BREAKING CHANGES

* **styles:** `customProperties.alertStyles.root.marginLeft` was renamed to `customProperties.alertStyles.gutters.marginLeft`. `customProperties.alertStyles.root.marginRight` was renamed to `customProperties.alertStyles.gutters.marginRight`.
* **styles:** rename `alertRootMarginLeft` to `alertGuttersMarginLeft`. Rename `alertRootMarginRight` to `alertGuttersMarginRight`.
* **style-dictionary:** `{component.alert.root.marginLeft}` was renamed to `{component.alert.gutters.marginLeft}`. `{component.alert.root.marginRight}` was renamed to `{component.alert.gutters.marginRight}`
* **flutter-styles:** `AlertStyles.marginLeft` was renamed to `AlertStyles.guttersMarginLeft`. `AlertStyles.marginRight` was renamed to `AlertStyles.guttersMarginRight`.





## [0.32.7](https://github.com/FacioCode/design/compare/v0.32.6...v0.32.7) (2021-01-14)

**Note:** Version bump only for package @faciocode/design





## [0.32.6](https://github.com/FacioCode/design/compare/v0.32.5...v0.32.6) (2021-01-14)


### Bug Fixes

* **react:** prevent TypeScript `css` property error for `Alert` ([66e28d3](https://github.com/FacioCode/design/commit/66e28d3c9205b877f0b77597474aa26e8911d13f))





## [0.32.5](https://github.com/FacioCode/design/compare/v0.32.4...v0.32.5) (2021-01-14)


### Bug Fixes

* **react:** prevent TypeScript `css` property error for `Typography` ([12f2f5a](https://github.com/FacioCode/design/commit/12f2f5a2a2cc06fe7ac4a49d87fa7dda23b58a3a))





## [0.32.4](https://github.com/FacioCode/design/compare/v0.32.3...v0.32.4) (2021-01-13)


### Bug Fixes

* **react:** make ThemeProvider `theme` property optional ([0bbde7d](https://github.com/FacioCode/design/commit/0bbde7dab94359e88a813567bbe2d2abdf47119e))
* **react:** prevent TypeScript `css` property error ([3e35cd5](https://github.com/FacioCode/design/commit/3e35cd58ddc84a234bd9f9cbfbc65816acb335e0))



## [0.32.2](https://github.com/FacioCode/design/compare/v0.32.1...v0.32.2) (2021-01-13)


### Bug Fixes

* **react:** prevent TypeScript error because of missing `css` prop on `TextField` ([b312902](https://github.com/FacioCode/design/commit/b312902447ac90148866e3d4bf09f46520c86070))



## [0.32.1](https://github.com/FacioCode/design/compare/v0.32.0...v0.32.1) (2021-01-13)


### Bug Fixes

* **react:** fix TypeScript errors with TextField ([e6994c4](https://github.com/FacioCode/design/commit/e6994c4dd4f4752926f2582f215e5c5601de5af3))



# 0.32.0 (2021-01-13)





## [0.32.3](https://github.com/FacioCode/design/compare/v0.32.2...v0.32.3) (2021-01-13)


### Bug Fixes

* **react:** make ThemeProvider `theme` property optional ([0bbde7d](https://github.com/FacioCode/design/commit/0bbde7dab94359e88a813567bbe2d2abdf47119e))
* **react:** prevent TypeScript error because of missing `css` prop on `TextField` ([b312902](https://github.com/FacioCode/design/commit/b312902447ac90148866e3d4bf09f46520c86070))



## [0.32.1](https://github.com/FacioCode/design/compare/v0.32.0...v0.32.1) (2021-01-13)


### Bug Fixes

* **react:** fix TypeScript errors with TextField ([e6994c4](https://github.com/FacioCode/design/commit/e6994c4dd4f4752926f2582f215e5c5601de5af3))



# 0.32.0 (2021-01-13)





## [0.32.2](https://github.com/FacioCode/design/compare/v0.32.1...v0.32.2) (2021-01-13)


### Bug Fixes

* **react:** fix TypeScript errors with TextField ([e6994c4](https://github.com/FacioCode/design/commit/e6994c4dd4f4752926f2582f215e5c5601de5af3))
* **react:** prevent TypeScript error because of missing `css` prop on `TextField` ([b312902](https://github.com/FacioCode/design/commit/b312902447ac90148866e3d4bf09f46520c86070))



# 0.32.0 (2021-01-13)





## [0.32.1](https://github.com/FacioCode/design/compare/v0.32.0...v0.32.1) (2021-01-13)


### Bug Fixes

* **react:** fix TypeScript errors with TextField ([e6994c4](https://github.com/FacioCode/design/commit/e6994c4dd4f4752926f2582f215e5c5601de5af3))





# [0.32.0](https://github.com/FacioCode/design/compare/v0.31.0...v0.32.0) (2021-01-13)


### Features

* **react:** make TextField available ([c33c5d1](https://github.com/FacioCode/design/commit/c33c5d188c3df2083989c9cd9d7429c27ecc14fa))





# [0.31.0](https://github.com/FacioCode/design/compare/v0.30.3...v0.31.0) (2021-01-13)


### Bug Fixes

* **style-dictionary:** add `isBreakpointSize` matcher to `size/web/px` transform ([1f25fac](https://github.com/FacioCode/design/commit/1f25fac01afb86e3cc23ae60ff06a4f099e4302b))


### Features

* **flutter-styles:** add baseThirtyOneFold base size ([a545f85](https://github.com/FacioCode/design/commit/a545f85736c603f06d2a2799aa8824631dd8772d))
* **flutter-styles:** add ColorPalette tokens ([3759b33](https://github.com/FacioCode/design/commit/3759b331d589a9bb3348fac179e744783357a9d5))
* **flutter-styles:** add/update component tokens ([ae9e88b](https://github.com/FacioCode/design/commit/ae9e88b46fb56a5de54f11347d73d9bf739e1fe2))
* **mui-themes:** add theme overrides ([6cbd2a0](https://github.com/FacioCode/design/commit/6cbd2a0e0985283aa699efc7895be69f5517b6ff))
* **mui-themes:** add theme overrides for text input fields ([023a412](https://github.com/FacioCode/design/commit/023a412ebd380a4a3fedab794a7b082c016fd9ca))
* **react:** add TextField component ([3181e38](https://github.com/FacioCode/design/commit/3181e381e0c98cc34547257cd13a3c75202ff0ac))
* **react:** make *Button, Dialog*, IconButton, Input and Table* components available ([e0f26aa](https://github.com/FacioCode/design/commit/e0f26aa28ebd4bc7334ac916b07e1bd9cad29760))
* **react:** make IconButton available ([76e986c](https://github.com/FacioCode/design/commit/76e986cfed382598c478ce27473bf226b5f6ec27))
* **react:** make Input component available ([6133a9c](https://github.com/FacioCode/design/commit/6133a9c3137bb5beab3e74d6a56f8330494ccecb))
* **style-dictionary:** add `isBreakpointSize` matcher ([4cdaa96](https://github.com/FacioCode/design/commit/4cdaa96089fb388cc4976dcfc6e39bb1da6323d7))
* **style-dictionary:** update tokens ([fb38487](https://github.com/FacioCode/design/commit/fb38487c94b06b4eec150ef322947f9418d2ab3c))
* **styles:** add color tokens ([8277867](https://github.com/FacioCode/design/commit/8277867e0899bd9b6b307b8ff699db254a096542))
* **styles:** add/update custom properties ([60940af](https://github.com/FacioCode/design/commit/60940af145561a6b67c685bacd83ddc7931703dd))
* **styles:** add/update tokens ([1b572ed](https://github.com/FacioCode/design/commit/1b572ede0612d79e7e39507f9081331b33b382f8))



## [0.30.2](https://github.com/FacioCode/design/compare/v0.30.1...v0.30.2) (2021-01-11)



## 0.30.1 (2021-01-11)





## [0.30.3](https://github.com/FacioCode/design/compare/v0.30.2...v0.30.3) (2021-01-11)



## 0.30.1 (2021-01-11)

**Note:** Version bump only for package @faciocode/design





## [0.30.2](https://github.com/FacioCode/design/compare/v0.30.1...v0.30.2) (2021-01-11)

**Note:** Version bump only for package @faciocode/design





## [0.30.1](https://github.com/FacioCode/design/compare/v0.30.0...v0.30.1) (2021-01-11)

**Note:** Version bump only for package @faciocode/design





# [0.30.0](https://github.com/FacioCode/design/compare/v0.29.0...v0.30.0) (2021-01-09)


### Code Refactoring

* **react:** separate Button components ([76a2564](https://github.com/FacioCode/design/commit/76a25649dd52163b3dd16d5e78fcb689b7db59ab))


### Features

* **flutter:** add displacement for loading circular progress ([36b5ded](https://github.com/FacioCode/design/commit/36b5ded7e215d860e16591ae3ed7e1e7ad297522))


### BREAKING CHANGES

* **react:** `Button` component does not exist anymore. Please use `ContainedButton`, `LinkButton` or `OutlinedButton`.



# [0.28.0](https://github.com/FacioCode/design/compare/v0.27.0...v0.28.0) (2021-01-08)


### Bug Fixes

* **flutter:** fix typo on `disabledColor` token ([078bbf8](https://github.com/FacioCode/design/commit/078bbf8cf600e9ce2599535622841505686a91d9))
* **style-dictionary:** fix refresh indicator component tokens syntax ([23e9f98](https://github.com/FacioCode/design/commit/23e9f98600db6aa5826b0426a1f3587b45172247))


### Code Refactoring

* **flutter:** remove `borderOutlinedButtonDisabled` from ColorPalette ([ea2bcc3](https://github.com/FacioCode/design/commit/ea2bcc3427c2e764cb7dad200da7421f613e40a7))
* **styles:** remove `borderOutlinedButtonDisabled` color token ([cd19231](https://github.com/FacioCode/design/commit/cd19231bc92b7a900ee0810facf2f98d2fcddaa5))
* **styles:** rename outlined button disabled color token ([9ffdcf4](https://github.com/FacioCode/design/commit/9ffdcf4874bf0d2612252989642ad0872a405693))
* **styles:** rename outlined disabled button color token ([3db1502](https://github.com/FacioCode/design/commit/3db1502b8ae07bf6ed6d09ee8903640145259c24))


### Features

* **flutter:** add `RefreshIndicatorStyles` class ([a4e760e](https://github.com/FacioCode/design/commit/a4e760ec0a1806f7d4dd7f7fa72750fe5042d50a))
* add/remove margin tokens, add circular progress color for primary ([94609c7](https://github.com/FacioCode/design/commit/94609c7c2b1e21a840d3d251345aec576c69f13f))


### BREAKING CHANGES

* **styles:** `outlinedButtonStyles.disabled.borderColor` was renamed to `outlinedButtonStyles.disabled.color`
* **styles:** `outlinedButtonDisabledBorderColor` component token was renamed to `outlinedButtonDisabledColor`.
* **styles:** `borderOutlinedButtonDisabled` is not available anymore
* **flutter:** `disabledBorderColor` was renamed to `disabledColor` on `OutlinedButtonStyles`.
* **flutter:** `ColorPalette.borderOutlinedButtonDisabled` was removed.



# [0.27.0](https://github.com/FacioCode/design/compare/v0.26.0...v0.27.0) (2021-01-08)


### Code Refactoring

* **style-dictionary:** change borderRadius from medium button ([b03c7f6](https://github.com/FacioCode/design/commit/b03c7f6c0709169f351113ee4ba8e6375e826cbc))


### Features

* **flutter:** add border color for disabled outlined button ([97fc4de](https://github.com/FacioCode/design/commit/97fc4ded64101481c1ef3cf8a764ebaab00cdb4f))
* **flutter:** add border color for disabled outlined button ([b1dfd84](https://github.com/FacioCode/design/commit/b1dfd849510fc287a1d5ef30c5ab2ea10d17f481))
* **flutter:** add iconMarginRight token for AlertStyles ([a21de01](https://github.com/FacioCode/design/commit/a21de01ea511db16e07a40bfbc23d263e7fe0269))
* **style-dictionary:** add border color for disabled outlined button ([e1e1d5d](https://github.com/FacioCode/design/commit/e1e1d5d528445e6a4e048d5aa49552cb18bd6b8a))
* **style-dictionary:** add icon marginRight token for alert ([cd88602](https://github.com/FacioCode/design/commit/cd88602d9f07827e0b4477b02ce4ca50fdbac0de))
* **styles:** add border color for disabled outlined button ([84c18b4](https://github.com/FacioCode/design/commit/84c18b44cabbea71b84777bb8e16fc1909250eee))
* **styles:** add/rename tokens ([2f77621](https://github.com/FacioCode/design/commit/2f7762101e82576a87ace2c7b1021cf3fc9e7a63))
* **styles:** add/rename tokens ([3de5faf](https://github.com/FacioCode/design/commit/3de5fafaf6c5e3a668248dd90300ade38de05745))


### BREAKING CHANGES

* **styles:** `buttonSizeMediumBorderRadius` (`buttonStyles.sizeMedium.borderRadius`) now is `containedButtonSizeMediumBorderRadius` (`containedButtonStyles.sizeMedium.borderRadius`)
* **styles:** `buttonSizeMediumBorderRadius` (`buttonStyles.sizeMedium.borderRadius`) now is `containedButtonSizeMediumBorderRadius` (`containedButtonStyles.sizeMedium.borderRadius`)
* **style-dictionary:** `{component.button.sizeMedium.borderRadius.value}` now is `{component.containedButton.sizeMedium.borderRadius.value}`



# [0.26.0](https://github.com/FacioCode/design/compare/v0.25.5...v0.26.0) (2021-01-08)


### Features

* **flutter:** add margin for `CardStyles` ([d90b33a](https://github.com/FacioCode/design/commit/d90b33ac7075072def19d8d5a9ff9bde0a172700))
* **style-dictionary:** add card margin tokens ([9bae44f](https://github.com/FacioCode/design/commit/9bae44f3a53d206f64f3a6ca912feb1b037c11c0))
* **styles:** add card margin tokens ([3a44650](https://github.com/FacioCode/design/commit/3a446505ea859b6fb1c95ca046dc77f5e46e9add))



## 0.25.5 (2021-01-08)





# [0.29.0](https://github.com/FacioCode/design/compare/v0.28.0...v0.29.0) (2021-01-08)


### Bug Fixes

* **flutter:** fix typo on `disabledColor` token ([078bbf8](https://github.com/FacioCode/design/commit/078bbf8cf600e9ce2599535622841505686a91d9))
* **style-dictionary:** fix refresh indicator component tokens syntax ([23e9f98](https://github.com/FacioCode/design/commit/23e9f98600db6aa5826b0426a1f3587b45172247))


### Code Refactoring

* **flutter:** remove `borderOutlinedButtonDisabled` from ColorPalette ([ea2bcc3](https://github.com/FacioCode/design/commit/ea2bcc3427c2e764cb7dad200da7421f613e40a7))
* **styles:** remove `borderOutlinedButtonDisabled` color token ([cd19231](https://github.com/FacioCode/design/commit/cd19231bc92b7a900ee0810facf2f98d2fcddaa5))
* **styles:** rename outlined button disabled color token ([9ffdcf4](https://github.com/FacioCode/design/commit/9ffdcf4874bf0d2612252989642ad0872a405693))
* **styles:** rename outlined disabled button color token ([3db1502](https://github.com/FacioCode/design/commit/3db1502b8ae07bf6ed6d09ee8903640145259c24))


### Features

* **flutter:** add `RefreshIndicatorStyles` class ([a4e760e](https://github.com/FacioCode/design/commit/a4e760ec0a1806f7d4dd7f7fa72750fe5042d50a))
* **flutter:** add displacement for loading circular progress ([36b5ded](https://github.com/FacioCode/design/commit/36b5ded7e215d860e16591ae3ed7e1e7ad297522))
* add/remove margin tokens, add circular progress color for primary ([94609c7](https://github.com/FacioCode/design/commit/94609c7c2b1e21a840d3d251345aec576c69f13f))


### BREAKING CHANGES

* **styles:** `outlinedButtonStyles.disabled.borderColor` was renamed to `outlinedButtonStyles.disabled.color`
* **styles:** `outlinedButtonDisabledBorderColor` component token was renamed to `outlinedButtonDisabledColor`.
* **styles:** `borderOutlinedButtonDisabled` is not available anymore
* **flutter:** `disabledBorderColor` was renamed to `disabledColor` on `OutlinedButtonStyles`.
* **flutter:** `ColorPalette.borderOutlinedButtonDisabled` was removed.



# [0.27.0](https://github.com/FacioCode/design/compare/v0.26.0...v0.27.0) (2021-01-08)


### Code Refactoring

* **style-dictionary:** change borderRadius from medium button ([b03c7f6](https://github.com/FacioCode/design/commit/b03c7f6c0709169f351113ee4ba8e6375e826cbc))


### Features

* **flutter:** add border color for disabled outlined button ([97fc4de](https://github.com/FacioCode/design/commit/97fc4ded64101481c1ef3cf8a764ebaab00cdb4f))
* **flutter:** add border color for disabled outlined button ([b1dfd84](https://github.com/FacioCode/design/commit/b1dfd849510fc287a1d5ef30c5ab2ea10d17f481))
* **flutter:** add iconMarginRight token for AlertStyles ([a21de01](https://github.com/FacioCode/design/commit/a21de01ea511db16e07a40bfbc23d263e7fe0269))
* **style-dictionary:** add border color for disabled outlined button ([e1e1d5d](https://github.com/FacioCode/design/commit/e1e1d5d528445e6a4e048d5aa49552cb18bd6b8a))
* **style-dictionary:** add icon marginRight token for alert ([cd88602](https://github.com/FacioCode/design/commit/cd88602d9f07827e0b4477b02ce4ca50fdbac0de))
* **styles:** add border color for disabled outlined button ([84c18b4](https://github.com/FacioCode/design/commit/84c18b44cabbea71b84777bb8e16fc1909250eee))
* **styles:** add/rename tokens ([2f77621](https://github.com/FacioCode/design/commit/2f7762101e82576a87ace2c7b1021cf3fc9e7a63))
* **styles:** add/rename tokens ([3de5faf](https://github.com/FacioCode/design/commit/3de5fafaf6c5e3a668248dd90300ade38de05745))


### BREAKING CHANGES

* **styles:** `buttonSizeMediumBorderRadius` (`buttonStyles.sizeMedium.borderRadius`) now is `containedButtonSizeMediumBorderRadius` (`containedButtonStyles.sizeMedium.borderRadius`)
* **styles:** `buttonSizeMediumBorderRadius` (`buttonStyles.sizeMedium.borderRadius`) now is `containedButtonSizeMediumBorderRadius` (`containedButtonStyles.sizeMedium.borderRadius`)
* **style-dictionary:** `{component.button.sizeMedium.borderRadius.value}` now is `{component.containedButton.sizeMedium.borderRadius.value}`



# [0.26.0](https://github.com/FacioCode/design/compare/v0.25.5...v0.26.0) (2021-01-08)


### Features

* **flutter:** add margin for `CardStyles` ([d90b33a](https://github.com/FacioCode/design/commit/d90b33ac7075072def19d8d5a9ff9bde0a172700))
* **style-dictionary:** add card margin tokens ([9bae44f](https://github.com/FacioCode/design/commit/9bae44f3a53d206f64f3a6ca912feb1b037c11c0))
* **styles:** add card margin tokens ([3a44650](https://github.com/FacioCode/design/commit/3a446505ea859b6fb1c95ca046dc77f5e46e9add))



## 0.25.5 (2021-01-08)





# [0.28.0](https://github.com/FacioCode/design/compare/v0.27.0...v0.28.0) (2021-01-08)


### Bug Fixes

* **flutter:** fix typo on `disabledColor` token ([078bbf8](https://github.com/FacioCode/design/commit/078bbf8cf600e9ce2599535622841505686a91d9))
* **style-dictionary:** fix refresh indicator component tokens syntax ([23e9f98](https://github.com/FacioCode/design/commit/23e9f98600db6aa5826b0426a1f3587b45172247))


### Code Refactoring

* **flutter:** remove `borderOutlinedButtonDisabled` from ColorPalette ([ea2bcc3](https://github.com/FacioCode/design/commit/ea2bcc3427c2e764cb7dad200da7421f613e40a7))
* **style-dictionary:** change borderRadius from medium button ([b03c7f6](https://github.com/FacioCode/design/commit/b03c7f6c0709169f351113ee4ba8e6375e826cbc))
* **styles:** remove `borderOutlinedButtonDisabled` color token ([cd19231](https://github.com/FacioCode/design/commit/cd19231bc92b7a900ee0810facf2f98d2fcddaa5))
* **styles:** rename outlined button disabled color token ([9ffdcf4](https://github.com/FacioCode/design/commit/9ffdcf4874bf0d2612252989642ad0872a405693))
* **styles:** rename outlined disabled button color token ([3db1502](https://github.com/FacioCode/design/commit/3db1502b8ae07bf6ed6d09ee8903640145259c24))


### Features

* **flutter:** add `RefreshIndicatorStyles` class ([a4e760e](https://github.com/FacioCode/design/commit/a4e760ec0a1806f7d4dd7f7fa72750fe5042d50a))
* add/remove margin tokens, add circular progress color for primary ([94609c7](https://github.com/FacioCode/design/commit/94609c7c2b1e21a840d3d251345aec576c69f13f))
* **flutter:** add border color for disabled outlined button ([97fc4de](https://github.com/FacioCode/design/commit/97fc4ded64101481c1ef3cf8a764ebaab00cdb4f))
* **flutter:** add border color for disabled outlined button ([b1dfd84](https://github.com/FacioCode/design/commit/b1dfd849510fc287a1d5ef30c5ab2ea10d17f481))
* **flutter:** add iconMarginRight token for AlertStyles ([a21de01](https://github.com/FacioCode/design/commit/a21de01ea511db16e07a40bfbc23d263e7fe0269))
* **style-dictionary:** add border color for disabled outlined button ([e1e1d5d](https://github.com/FacioCode/design/commit/e1e1d5d528445e6a4e048d5aa49552cb18bd6b8a))
* **style-dictionary:** add icon marginRight token for alert ([cd88602](https://github.com/FacioCode/design/commit/cd88602d9f07827e0b4477b02ce4ca50fdbac0de))
* **styles:** add border color for disabled outlined button ([84c18b4](https://github.com/FacioCode/design/commit/84c18b44cabbea71b84777bb8e16fc1909250eee))
* **styles:** add/rename tokens ([2f77621](https://github.com/FacioCode/design/commit/2f7762101e82576a87ace2c7b1021cf3fc9e7a63))
* **styles:** add/rename tokens ([3de5faf](https://github.com/FacioCode/design/commit/3de5fafaf6c5e3a668248dd90300ade38de05745))


### BREAKING CHANGES

* **styles:** `outlinedButtonStyles.disabled.borderColor` was renamed to `outlinedButtonStyles.disabled.color`
* **styles:** `outlinedButtonDisabledBorderColor` component token was renamed to `outlinedButtonDisabledColor`.
* **styles:** `borderOutlinedButtonDisabled` is not available anymore
* **flutter:** `disabledBorderColor` was renamed to `disabledColor` on `OutlinedButtonStyles`.
* **flutter:** `ColorPalette.borderOutlinedButtonDisabled` was removed.
* **styles:** `buttonSizeMediumBorderRadius` (`buttonStyles.sizeMedium.borderRadius`) now is `containedButtonSizeMediumBorderRadius` (`containedButtonStyles.sizeMedium.borderRadius`)
* **styles:** `buttonSizeMediumBorderRadius` (`buttonStyles.sizeMedium.borderRadius`) now is `containedButtonSizeMediumBorderRadius` (`containedButtonStyles.sizeMedium.borderRadius`)
* **style-dictionary:** `{component.button.sizeMedium.borderRadius.value}` now is `{component.containedButton.sizeMedium.borderRadius.value}`



# [0.26.0](https://github.com/FacioCode/design/compare/v0.25.5...v0.26.0) (2021-01-08)


### Features

* **flutter:** add margin for `CardStyles` ([d90b33a](https://github.com/FacioCode/design/commit/d90b33ac7075072def19d8d5a9ff9bde0a172700))
* **style-dictionary:** add card margin tokens ([9bae44f](https://github.com/FacioCode/design/commit/9bae44f3a53d206f64f3a6ca912feb1b037c11c0))
* **styles:** add card margin tokens ([3a44650](https://github.com/FacioCode/design/commit/3a446505ea859b6fb1c95ca046dc77f5e46e9add))



## 0.25.5 (2021-01-08)





# [0.27.0](https://github.com/FacioCode/design/compare/v0.26.0...v0.27.0) (2021-01-08)


### Code Refactoring

* **style-dictionary:** change borderRadius from medium button ([b03c7f6](https://github.com/FacioCode/design/commit/b03c7f6c0709169f351113ee4ba8e6375e826cbc))


### Features

* **flutter:** add border color for disabled outlined button ([97fc4de](https://github.com/FacioCode/design/commit/97fc4ded64101481c1ef3cf8a764ebaab00cdb4f))
* **flutter:** add border color for disabled outlined button ([b1dfd84](https://github.com/FacioCode/design/commit/b1dfd849510fc287a1d5ef30c5ab2ea10d17f481))
* **flutter:** add iconMarginRight token for AlertStyles ([a21de01](https://github.com/FacioCode/design/commit/a21de01ea511db16e07a40bfbc23d263e7fe0269))
* **flutter:** add margin for `CardStyles` ([d90b33a](https://github.com/FacioCode/design/commit/d90b33ac7075072def19d8d5a9ff9bde0a172700))
* **style-dictionary:** add border color for disabled outlined button ([e1e1d5d](https://github.com/FacioCode/design/commit/e1e1d5d528445e6a4e048d5aa49552cb18bd6b8a))
* **style-dictionary:** add card margin tokens ([9bae44f](https://github.com/FacioCode/design/commit/9bae44f3a53d206f64f3a6ca912feb1b037c11c0))
* **style-dictionary:** add icon marginRight token for alert ([cd88602](https://github.com/FacioCode/design/commit/cd88602d9f07827e0b4477b02ce4ca50fdbac0de))
* **styles:** add border color for disabled outlined button ([84c18b4](https://github.com/FacioCode/design/commit/84c18b44cabbea71b84777bb8e16fc1909250eee))
* **styles:** add card margin tokens ([3a44650](https://github.com/FacioCode/design/commit/3a446505ea859b6fb1c95ca046dc77f5e46e9add))
* **styles:** add/rename tokens ([2f77621](https://github.com/FacioCode/design/commit/2f7762101e82576a87ace2c7b1021cf3fc9e7a63))
* **styles:** add/rename tokens ([3de5faf](https://github.com/FacioCode/design/commit/3de5fafaf6c5e3a668248dd90300ade38de05745))


### BREAKING CHANGES

* **styles:** `buttonSizeMediumBorderRadius` (`buttonStyles.sizeMedium.borderRadius`) now is `containedButtonSizeMediumBorderRadius` (`containedButtonStyles.sizeMedium.borderRadius`)
* **styles:** `buttonSizeMediumBorderRadius` (`buttonStyles.sizeMedium.borderRadius`) now is `containedButtonSizeMediumBorderRadius` (`containedButtonStyles.sizeMedium.borderRadius`)
* **style-dictionary:** `{component.button.sizeMedium.borderRadius.value}` now is `{component.containedButton.sizeMedium.borderRadius.value}`



## 0.25.5 (2021-01-08)





# [0.26.0](https://github.com/FacioCode/design/compare/v0.25.5...v0.26.0) (2021-01-08)


### Features

* **flutter:** add margin for `CardStyles` ([d90b33a](https://github.com/FacioCode/design/commit/d90b33ac7075072def19d8d5a9ff9bde0a172700))
* **style-dictionary:** add card margin tokens ([9bae44f](https://github.com/FacioCode/design/commit/9bae44f3a53d206f64f3a6ca912feb1b037c11c0))
* **styles:** add card margin tokens ([3a44650](https://github.com/FacioCode/design/commit/3a446505ea859b6fb1c95ca046dc77f5e46e9add))





## [0.25.5](https://github.com/FacioCode/design/compare/v0.25.4...v0.25.5) (2021-01-08)



## [0.25.3](https://github.com/FacioCode/design/compare/v0.25.2...v0.25.3) (2021-01-08)



## [0.25.2](https://github.com/FacioCode/design/compare/v0.25.1...v0.25.2) (2021-01-08)



## [0.25.1](https://github.com/FacioCode/design/compare/v0.25.0...v0.25.1) (2021-01-08)



# 0.25.0 (2021-01-07)

**Note:** Version bump only for package @faciocode/design





## [0.25.4](https://github.com/FacioCode/design/compare/v0.25.3...v0.25.4) (2021-01-08)



## [0.25.2](https://github.com/FacioCode/design/compare/v0.25.1...v0.25.2) (2021-01-08)



## [0.25.1](https://github.com/FacioCode/design/compare/v0.25.0...v0.25.1) (2021-01-08)



# 0.25.0 (2021-01-07)

**Note:** Version bump only for package @faciocode/design





## [0.25.3](https://github.com/FacioCode/design/compare/v0.25.2...v0.25.3) (2021-01-08)



## [0.25.1](https://github.com/FacioCode/design/compare/v0.25.0...v0.25.1) (2021-01-08)



# 0.25.0 (2021-01-07)

**Note:** Version bump only for package @faciocode/design





## [0.25.2](https://github.com/FacioCode/design/compare/v0.25.1...v0.25.2) (2021-01-08)



# 0.25.0 (2021-01-07)

**Note:** Version bump only for package @faciocode/design





## [0.25.1](https://github.com/FacioCode/design/compare/v0.25.0...v0.25.1) (2021-01-08)

**Note:** Version bump only for package @faciocode/design





# [0.25.0](https://github.com/FacioCode/design/compare/v0.24.0...v0.25.0) (2021-01-07)


### Bug Fixes

* **style-dictionary:** improve wrong syntax checking for values ([190f09b](https://github.com/FacioCode/design/commit/190f09b9c150868908209d72e03e34c302186059))
* **style-dictionary:** remove empty eol of component_styles file ([59e02a8](https://github.com/FacioCode/design/commit/59e02a8499179253ba6a3b93de68ad81c9eabef1))


### Code Refactoring

* **react:** remove `success` color prop and `large` size prop for Button ([a6c2d65](https://github.com/FacioCode/design/commit/a6c2d653eb78968c3d084bee283a1bbb6ab02909))
* **style-dictionary:** change token names/references ([8a8a00e](https://github.com/FacioCode/design/commit/8a8a00e251809e7a73e242d215010d8e9b468b0a))
* **style-dictionary:** remove align typography tokens ([1acbdf8](https://github.com/FacioCode/design/commit/1acbdf82e78faefe0b2ef0f5d1e8740b4b86c3f4))
* **style-dictionary:** remove success color base tokens ([88dacc0](https://github.com/FacioCode/design/commit/88dacc0c680311899560937d4ec76751fd51374c))
* **style-dictionary:** rename Open Sans key ([4e64fba](https://github.com/FacioCode/design/commit/4e64fba731fab335cd975098bf445596f542ac9d))


### Features

* **flutter:** add breakpoint values ([c8c3530](https://github.com/FacioCode/design/commit/c8c35308f82236087515e19a451818ac2d375084))
* **flutter:** add new background colors ([cebc106](https://github.com/FacioCode/design/commit/cebc1069e61d6009650c883371ec0668b68dc728))
* **flutter:** add/remove component tokens ([437e783](https://github.com/FacioCode/design/commit/437e783364ca62ce01b296950f3494b80d0cb42f))
* **mui-themes:** add overrides for components ([8bcd7ac](https://github.com/FacioCode/design/commit/8bcd7ac34aff1cb91966e9ca5524201d1efce506))
* **react:** add `Checkbox` component ([1444d95](https://github.com/FacioCode/design/commit/1444d951fbe851fcd61ba2aa0ac2ad4f0bb225c6))
* **react:** add `Chip` component ([5871a51](https://github.com/FacioCode/design/commit/5871a51b00939b3016d2e9a2f7c82bb84bafc67d))
* **react:** add `Currency` component ([68a8e63](https://github.com/FacioCode/design/commit/68a8e630ede383f3ab43fdbd5bb209459594d392))
* **react:** add `Dialog` components ([7a2a4c4](https://github.com/FacioCode/design/commit/7a2a4c42094221774811c2414b2e75fee899e133))
* **react:** add `Divider` component ([f86bfad](https://github.com/FacioCode/design/commit/f86bfadb7645813164c022a02ba431ce656c3950))
* **react:** add `IconButton` component ([aadff46](https://github.com/FacioCode/design/commit/aadff461a4ca936306029610019c2e30eeae84c6))
* **react:** add `Table` components ([5059492](https://github.com/FacioCode/design/commit/5059492047f2fac7c2c5e0810662db057c4afa44))
* **react:** make `Checkbox` component importable ([e74baff](https://github.com/FacioCode/design/commit/e74baff16f85707b00e5a1b5912031115473c2a1))
* **react:** make `Checkbox`, `Dialog` and `Table` components importable ([f06a8ff](https://github.com/FacioCode/design/commit/f06a8ff2e38d0c249801f392013a57232c497d80))
* **react:** make `Dialog` component importable ([2392889](https://github.com/FacioCode/design/commit/2392889a8d1dba596018b459de0207861f79837d))
* **style-dictionary:** add `brand` and `selected` background color tokens ([84132bb](https://github.com/FacioCode/design/commit/84132bb0e15a6d7bbfd38bbf43a5413c3f1a8600))
* **style-dictionary:** add `standardBrand` styles for `alert` ([67bd007](https://github.com/FacioCode/design/commit/67bd0071b88945e17ae800d9f500d95c8bb390b0))
* **style-dictionary:** add breakpoint size tokens ([2b137c7](https://github.com/FacioCode/design/commit/2b137c7159d4d97798af039ed35cba804c4b4109))
* **style-dictionary:** add checkbox component tokens ([c4d9383](https://github.com/FacioCode/design/commit/c4d93835b4bae59c8f8d0dcac6eeec37b835201c))
* **style-dictionary:** add chip component tokens ([4d044b7](https://github.com/FacioCode/design/commit/4d044b76b4054227cd1768f75fb3be6101119a94))
* **style-dictionary:** add currency, dialog, tableCell and tableRow component tokens ([b9e8ae8](https://github.com/FacioCode/design/commit/b9e8ae8db5a3b0aeb9424f0c7c0591af7ff25f63))
* **style-dictionary:** add input theme tokens ([c9c2b57](https://github.com/FacioCode/design/commit/c9c2b575a9fb4a860db66b1324934b6819b0bcb8))
* **style-dictionary:** add max width for button ([81f1b5c](https://github.com/FacioCode/design/commit/81f1b5c144d519b5342075581e11734eb1935a83))
* **style-dictionary:** add system fonts, rename `native` to `system` ([5629749](https://github.com/FacioCode/design/commit/5629749178cce486ae425003b9d1b0c86f73095e))
* **style-dictionary:** add/rename tokens ([13b855a](https://github.com/FacioCode/design/commit/13b855ae59c51394c02bda68b38e13b420d51de1))
* **styles:** add component styles ([f29e6f6](https://github.com/FacioCode/design/commit/f29e6f66ffc86b09f3690619c23272ff2c068585))
* **styles:** add new background colors ([47941c7](https://github.com/FacioCode/design/commit/47941c770f5a7e4eae2b1e82fea8e218d5431aad))


* Update componentTokens.ts ([7c2fc9c](https://github.com/FacioCode/design/commit/7c2fc9c720a72b659c6339aee4959ba013f14119))


### BREAKING CHANGES

* **style-dictionary:** `brandHover` was renamed to `hover`.
* **style-dictionary:** `{color.border.button.outlined}` was renamed to `{color.border.outlinedButton}`. `{color.border.underline}` was removed.
* **style-dictionary:** `success` item was removed. Please use `primary`.
* **style-dictionary:** `alignLeft`, `alignCenter` and `alignRight` typography tokens are not available anymore.
* **style-dictionary:** `opensans` now was renamed to `openSans`.
* **react:** `"success"` value for Button `color` property was removed. Please use `"brand"` value instead. `"large"` value for Button `size` property was removed. Please use `"medium"` instead.
* **styles:** constants `baseSuccessDark`, `baseSuccessMain`, `borderUnderline` were removed. `borderButtonOutlined` was renamed to `borderOutlinedButton`.
* some component tokens were renamed/removed.
* **styles:** some constants were renamed/removed.
* **flutter:** all constants from `ContainedButtonStyles` starting with `success` (e.g. `successBackgroundColor`) were removed. Please use `brand` instead (e.g. `brandBackgroundColor`). `brandBorderColor` constant was also removed. Some constants at `OutlinedButtonStyles` were renamed/removed.
* **flutter:** constants `baseSuccessDark`, `baseSuccessMain`, `borderUnderline` were removed. `borderButtonOutlined` was renamed to `borderOutlinedButton`.



## 0.23.6 (2020-12-16)





# [0.24.0](https://github.com/FacioCode/design/compare/v0.23.6...v0.24.0) (2021-01-07)


### Bug Fixes

* **style-dictionary:** improve wrong syntax checking for values ([190f09b](https://github.com/FacioCode/design/commit/190f09b9c150868908209d72e03e34c302186059))


### Code Refactoring

* **react:** remove `success` color prop and `large` size prop for Button ([a6c2d65](https://github.com/FacioCode/design/commit/a6c2d653eb78968c3d084bee283a1bbb6ab02909))
* **style-dictionary:** change token names/references ([8a8a00e](https://github.com/FacioCode/design/commit/8a8a00e251809e7a73e242d215010d8e9b468b0a))
* **style-dictionary:** remove align typography tokens ([1acbdf8](https://github.com/FacioCode/design/commit/1acbdf82e78faefe0b2ef0f5d1e8740b4b86c3f4))
* **style-dictionary:** remove success color base tokens ([88dacc0](https://github.com/FacioCode/design/commit/88dacc0c680311899560937d4ec76751fd51374c))
* **style-dictionary:** rename Open Sans key ([4e64fba](https://github.com/FacioCode/design/commit/4e64fba731fab335cd975098bf445596f542ac9d))


### Features

* **flutter:** add breakpoint values ([c8c3530](https://github.com/FacioCode/design/commit/c8c35308f82236087515e19a451818ac2d375084))
* **flutter:** add new background colors ([cebc106](https://github.com/FacioCode/design/commit/cebc1069e61d6009650c883371ec0668b68dc728))
* **flutter:** add/remove component tokens ([437e783](https://github.com/FacioCode/design/commit/437e783364ca62ce01b296950f3494b80d0cb42f))
* **mui-themes:** add overrides for components ([8bcd7ac](https://github.com/FacioCode/design/commit/8bcd7ac34aff1cb91966e9ca5524201d1efce506))
* **react:** add `Checkbox` component ([1444d95](https://github.com/FacioCode/design/commit/1444d951fbe851fcd61ba2aa0ac2ad4f0bb225c6))
* **react:** add `Chip` component ([5871a51](https://github.com/FacioCode/design/commit/5871a51b00939b3016d2e9a2f7c82bb84bafc67d))
* **react:** add `Currency` component ([68a8e63](https://github.com/FacioCode/design/commit/68a8e630ede383f3ab43fdbd5bb209459594d392))
* **react:** add `Dialog` components ([7a2a4c4](https://github.com/FacioCode/design/commit/7a2a4c42094221774811c2414b2e75fee899e133))
* **react:** add `Divider` component ([f86bfad](https://github.com/FacioCode/design/commit/f86bfadb7645813164c022a02ba431ce656c3950))
* **react:** add `IconButton` component ([aadff46](https://github.com/FacioCode/design/commit/aadff461a4ca936306029610019c2e30eeae84c6))
* **react:** add `Table` components ([5059492](https://github.com/FacioCode/design/commit/5059492047f2fac7c2c5e0810662db057c4afa44))
* **react:** make `Checkbox` component importable ([e74baff](https://github.com/FacioCode/design/commit/e74baff16f85707b00e5a1b5912031115473c2a1))
* **react:** make `Checkbox`, `Dialog` and `Table` components importable ([f06a8ff](https://github.com/FacioCode/design/commit/f06a8ff2e38d0c249801f392013a57232c497d80))
* **react:** make `Dialog` component importable ([2392889](https://github.com/FacioCode/design/commit/2392889a8d1dba596018b459de0207861f79837d))
* **style-dictionary:** add `brand` and `selected` background color tokens ([84132bb](https://github.com/FacioCode/design/commit/84132bb0e15a6d7bbfd38bbf43a5413c3f1a8600))
* **style-dictionary:** add `standardBrand` styles for `alert` ([67bd007](https://github.com/FacioCode/design/commit/67bd0071b88945e17ae800d9f500d95c8bb390b0))
* **style-dictionary:** add breakpoint size tokens ([2b137c7](https://github.com/FacioCode/design/commit/2b137c7159d4d97798af039ed35cba804c4b4109))
* **style-dictionary:** add checkbox component tokens ([c4d9383](https://github.com/FacioCode/design/commit/c4d93835b4bae59c8f8d0dcac6eeec37b835201c))
* **style-dictionary:** add chip component tokens ([4d044b7](https://github.com/FacioCode/design/commit/4d044b76b4054227cd1768f75fb3be6101119a94))
* **style-dictionary:** add currency, dialog, tableCell and tableRow component tokens ([b9e8ae8](https://github.com/FacioCode/design/commit/b9e8ae8db5a3b0aeb9424f0c7c0591af7ff25f63))
* **style-dictionary:** add input theme tokens ([c9c2b57](https://github.com/FacioCode/design/commit/c9c2b575a9fb4a860db66b1324934b6819b0bcb8))
* **style-dictionary:** add max width for button ([81f1b5c](https://github.com/FacioCode/design/commit/81f1b5c144d519b5342075581e11734eb1935a83))
* **style-dictionary:** add system fonts, rename `native` to `system` ([5629749](https://github.com/FacioCode/design/commit/5629749178cce486ae425003b9d1b0c86f73095e))
* **style-dictionary:** add/rename tokens ([13b855a](https://github.com/FacioCode/design/commit/13b855ae59c51394c02bda68b38e13b420d51de1))
* **styles:** add component styles ([f29e6f6](https://github.com/FacioCode/design/commit/f29e6f66ffc86b09f3690619c23272ff2c068585))
* **styles:** add new background colors ([47941c7](https://github.com/FacioCode/design/commit/47941c770f5a7e4eae2b1e82fea8e218d5431aad))


* Update componentTokens.ts ([7c2fc9c](https://github.com/FacioCode/design/commit/7c2fc9c720a72b659c6339aee4959ba013f14119))


### BREAKING CHANGES

* **style-dictionary:** `brandHover` was renamed to `hover`.
* **style-dictionary:** `{color.border.button.outlined}` was renamed to `{color.border.outlinedButton}`. `{color.border.underline}` was removed.
* **style-dictionary:** `success` item was removed. Please use `primary`.
* **style-dictionary:** `alignLeft`, `alignCenter` and `alignRight` typography tokens are not available anymore.
* **style-dictionary:** `opensans` now was renamed to `openSans`.
* **react:** `"success"` value for Button `color` property was removed. Please use `"brand"` value instead. `"large"` value for Button `size` property was removed. Please use `"medium"` instead.
* **styles:** constants `baseSuccessDark`, `baseSuccessMain`, `borderUnderline` were removed. `borderButtonOutlined` was renamed to `borderOutlinedButton`.
* some component tokens were renamed/removed.
* **styles:** some constants were renamed/removed.
* **flutter:** all constants from `ContainedButtonStyles` starting with `success` (e.g. `successBackgroundColor`) were removed. Please use `brand` instead (e.g. `brandBackgroundColor`). `brandBorderColor` constant was also removed. Some constants at `OutlinedButtonStyles` were renamed/removed.
* **flutter:** constants `baseSuccessDark`, `baseSuccessMain`, `borderUnderline` were removed. `borderButtonOutlined` was renamed to `borderOutlinedButton`.





## [0.23.6](https://github.com/FacioCode/design/compare/v0.23.5...v0.23.6) (2020-12-16)

**Note:** Version bump only for package @faciocode/design





## [0.23.5](https://github.com/FacioCode/design/compare/v0.23.4...v0.23.5) (2020-12-16)

**Note:** Version bump only for package @faciocode/design





## [0.23.4](https://github.com/FacioCode/design/compare/v0.23.3...v0.23.4) (2020-12-16)



## [0.23.2](https://github.com/FacioCode/design/compare/v0.23.1...v0.23.2) (2020-12-16)



## [0.23.1](https://github.com/FacioCode/design/compare/v0.23.0...v0.23.1) (2020-12-16)



# 0.23.0 (2020-12-16)

**Note:** Version bump only for package @faciocode/design





## [0.23.3](https://github.com/FacioCode/design/compare/v0.23.2...v0.23.3) (2020-12-16)



## [0.23.1](https://github.com/FacioCode/design/compare/v0.23.0...v0.23.1) (2020-12-16)



# 0.23.0 (2020-12-16)

**Note:** Version bump only for package @faciocode/design





## [0.23.2](https://github.com/FacioCode/design/compare/v0.23.1...v0.23.2) (2020-12-16)



# 0.23.0 (2020-12-16)

**Note:** Version bump only for package @faciocode/design





## [0.23.1](https://github.com/FacioCode/design/compare/v0.23.0...v0.23.1) (2020-12-16)

**Note:** Version bump only for package @faciocode/design





# [0.23.0](https://github.com/FacioCode/design/compare/v0.22.3...v0.23.0) (2020-12-16)


### Features

* **react:** add Facio theme as default one for ThemeProvider ([388bb6f](https://github.com/FacioCode/design/commit/388bb6f7e3b901ecf24f9d7f961bc277ac6c0244))



## 0.22.2 (2020-12-16)





## [0.22.3](https://github.com/FacioCode/design/compare/v0.22.2...v0.22.3) (2020-12-16)

**Note:** Version bump only for package @faciocode/design





## [0.22.2](https://github.com/FacioCode/design/compare/v0.22.1...v0.22.2) (2020-12-16)



# 0.22.0 (2020-12-16)

**Note:** Version bump only for package @faciocode/design





## [0.22.1](https://github.com/FacioCode/design/compare/v0.22.0...v0.22.1) (2020-12-16)

**Note:** Version bump only for package @faciocode/design





# [0.22.0](https://github.com/FacioCode/design/compare/v0.21.0...v0.22.0) (2020-12-16)


### Bug Fixes

* **flutter:** remove invalid value for FAB backgroundColor at example ([c14be28](https://github.com/FacioCode/design/commit/c14be288ce9a17d83a4a299cb792428d8f9ca4e5))
* **flutter:** set fontWeight for button and change button color ([da7c739](https://github.com/FacioCode/design/commit/da7c7394e98c90217e34ccff7656d594845624af))
* **mui-themes:** disable underline for inputs by default ([0ddc605](https://github.com/FacioCode/design/commit/0ddc60580dca92d4cb4e1fa043d76af051c3bf8a))
* **react:** prevent hook error because of browser packing ([e4c30c2](https://github.com/FacioCode/design/commit/e4c30c28e26237e4b32e523ff9d0a040e0247a56))
* **react:** add missing 600 font weight for Open Sans for Storybook ([0143136](https://github.com/FacioCode/design/commit/0143136a9ca9a2338127cc2b0297029d7de9d02e))
* **style-dictionary:** change AppBar background color ([7781143](https://github.com/FacioCode/design/commit/77811433b9fc263b62fead0470fecc1877d4b736))
* **style-dictionary:** don't generate TypographyStyles anymore ([1439721](https://github.com/FacioCode/design/commit/143972146091176edaea0889464a7758725a4b45))
* **style-dictionary:** set correct CSS property for media print at web baseline component token ([988b6ee](https://github.com/FacioCode/design/commit/988b6eee33265bf7443ce826e175d04af621fd90))
* **style-dictionary:** update font weight for Typography component token ([54c0212](https://github.com/FacioCode/design/commit/54c0212e6089b7ac1f7ae55e9a75091acb1f3c78))


### Code Refactoring

* **card:** remove support to colors, use base from Material UI ([c808d73](https://github.com/FacioCode/design/commit/c808d73e076ec5418cc905d197615f5b159beb7d))
* **flutter:** separate styles for button variants ([5684134](https://github.com/FacioCode/design/commit/56841340bd516190cc202f5d3423cda989d9d33a))
* **react:** remove Component type ([55c5c7a](https://github.com/FacioCode/design/commit/55c5c7aad36f7a9cb32459d4f7569eb8f86d4964))
* **react:** rewrite Paper component to use Material UI as base ([091371a](https://github.com/FacioCode/design/commit/091371a0f970bf9866ed2535e8ffe763696c3276))
* **style-dictionary:** change constant names, improve doc comment ([1841d30](https://github.com/FacioCode/design/commit/1841d3066343b3cc51b45d83c1c3a24d877a4e1e))
* **style-dictionary:** remove default and info keys from card component tokens ([83ad7d3](https://github.com/FacioCode/design/commit/83ad7d3fdb3e422f9cef4510933b744738f9a91c))
* **style-dictionary:** remove Input component tokens ([f4960c7](https://github.com/FacioCode/design/commit/f4960c7dfc9948c87162a0402b10cc31bbc37e0f))
* **style-dictionary:** remove specific input component tokens for Flutter ([d1ba2f0](https://github.com/FacioCode/design/commit/d1ba2f02c85db67f18d2445aa55e993fa019ba41))
* **style-dictionary:** rewrite base colors for light theme ([0535a09](https://github.com/FacioCode/design/commit/0535a09ba2f2a0f2900bf85528fab06d18d51be3))
* move getCssVarName function to `style-dictionary` package ([a83b7f4](https://github.com/FacioCode/design/commit/a83b7f4441568c933639a78d02a32f064aac6998))


### Features

* **flutter:** add `baseEightfold` and `borderWidthDouble` size tokens ([c6b2a08](https://github.com/FacioCode/design/commit/c6b2a0825880310ad29d4f409ccfc01452d233f0))
* **flutter:** add `borderRadiusTriple` size constant ([4c97bf4](https://github.com/FacioCode/design/commit/4c97bf4ab768ba4337681278a6e999613496c996))
* **flutter:** add semantic base colors to `ColorPalette` ([ea52736](https://github.com/FacioCode/design/commit/ea527363cfe307d25b3132c50cc772e90e40fda2))
* **flutter:** add/remove colors for ColorPalette ([f388b72](https://github.com/FacioCode/design/commit/f388b72e22ebad8d462f097704b2f4b57b2bb9fe))
* **flutter:** refactor and add new component styles ([181b876](https://github.com/FacioCode/design/commit/181b876c0056e8493bae6426328232299c6a1fa7))
* **mui-themes:** add createTheme() function ([a9d4a4e](https://github.com/FacioCode/design/commit/a9d4a4e344ce4fd91a1fc7159d6a49c33d9ff040))
* **mui-themes:** add separate theme options, including Button overrides ([8b1e331](https://github.com/FacioCode/design/commit/8b1e3313f3f95b65883b3572af99dd708f714980))
* **mui-themes:** add theme and make it available ([7c4f48d](https://github.com/FacioCode/design/commit/7c4f48d1c37e45317bb17111a86a8cdf3b80546d))
* **mui-themes:** add theme options ([5b1a54d](https://github.com/FacioCode/design/commit/5b1a54db5399519bba2cf47e95aa64a78b744af2))
* **mui-themes:** add typography options ([2a96db0](https://github.com/FacioCode/design/commit/2a96db01ae157dc9ef4e2d57214b9dcddb8558c6))
* **react:** add Alert React component ([59a9ab6](https://github.com/FacioCode/design/commit/59a9ab68cff9c7498cfc2978456e9086d391af18))
* **react:** add CardContent component ([6fe59fd](https://github.com/FacioCode/design/commit/6fe59fd74ffcaf84cc26b4e52582af098462ce13))
* **react:** add Input component ([74f5800](https://github.com/FacioCode/design/commit/74f5800f5d85d688b531dd8487e4c6c47d17fae5))
* **react:** add support to more colors and state for Buttons ([08d8b79](https://github.com/FacioCode/design/commit/08d8b79bea68df1d88693f23878e84a3b2a0d8eb))
* **react:** add ThemeProvider component ([2e99e92](https://github.com/FacioCode/design/commit/2e99e924d064f059f878b2456b4a1b724e81743c))
* **react:** make Alert and ThemeProvider components available ([449d5bf](https://github.com/FacioCode/design/commit/449d5bf4b3c412f9fae67fcaba77077bd7cf0d43))
* **react:** make CardContent available via Card ([3c32708](https://github.com/FacioCode/design/commit/3c327084a11a9ff69fc3bf54e8d5b20bf4ffbba9))
* **react** add ThemeProvider to decorator on Storybook ([ba23a98](https://github.com/FacioCode/design/commit/ba23a98b5c54c28a91d53b08e39cae0cf563af25))
* **style-dictionary:** add Alert component tokens ([fb8cf7f](https://github.com/FacioCode/design/commit/fb8cf7f91f340eec51a8c12c42e7fa1cbb16915d))
* **style-dictionary:** add base colors for light theme ([82e4a12](https://github.com/FacioCode/design/commit/82e4a12918f7380c8eeea7cd30cca0cf5cbe5353))
* **style-dictionary:** add border colors for light theme ([439edf8](https://github.com/FacioCode/design/commit/439edf8d66afc2ff0d9a024e7b5fb7e00149646b))
* **style-dictionary:** add ButtonBase component tokens ([97bfa92](https://github.com/FacioCode/design/commit/97bfa921afe83a11f8e22b1b970a4b71641ebd93))
* **style-dictionary:** add CardContent component tokens ([5686919](https://github.com/FacioCode/design/commit/56869190426c616965e48f34b79fb74e8ea6bf95))
* **style-dictionary:** add double as border width token ([b16406a](https://github.com/FacioCode/design/commit/b16406aafb032a74f101704de63fe09ba3b3e2f2))
* **style-dictionary:** add eightfold size token ([4b572b0](https://github.com/FacioCode/design/commit/4b572b0ec5e3180143330e75187e86dcb6e8d7a4))
* **style-dictionary:** add fontFamily to Typography component tokens ([c89eeb0](https://github.com/FacioCode/design/commit/c89eeb08ff236a06658c2179fc3e4d13928c5a3e))
* **style-dictionary:** add FormLabel component tokens ([fcbdc3c](https://github.com/FacioCode/design/commit/fcbdc3c169df77ecd95e7ed997de5c80e33b54b4))
* **style-dictionary:** add InputBase component tokens ([1fec5a2](https://github.com/FacioCode/design/commit/1fec5a21f0c9deaa6439cd26164199565cb5d11b))
* **style-dictionary:** add new component styles template for web/js ([08f6fc9](https://github.com/FacioCode/design/commit/08f6fc92428918c4858762d5856ce6930e7d0ca0))
* **style-dictionary:** add new formatter component styles for web ([0532bb8](https://github.com/FacioCode/design/commit/0532bb8208fff101fc83b12e88f0919487cb6e32))
* **style-dictionary:** add outline tokens ([1625ce1](https://github.com/FacioCode/design/commit/1625ce1bd9566185d9385dbf9c583a1949b4e16c))
* **style-dictionary:** add raw icons ([e1f49f9](https://github.com/FacioCode/design/commit/e1f49f947a3e5f4b53d0277a72777da6461303f6))
* **style-dictionary:** add shadow tokens ([d0c46e9](https://github.com/FacioCode/design/commit/d0c46e92fb81db692ad76bab9d2bcab4257d8c66))
* **style-dictionary:** add shadowCss transform ([d24a3c7](https://github.com/FacioCode/design/commit/d24a3c71029095bccc193cd697d222dd9c06b990))
* **style-dictionary:** add shadowCss transform to web transform group ([27ea6be](https://github.com/FacioCode/design/commit/27ea6be8c73c7610555b6eed81a5f76b109c545b))
* **style-dictionary:** add specific Button component tokens for web ([95d5d17](https://github.com/FacioCode/design/commit/95d5d1737b570ab7da79f4f7bca4e2952f3a3744))
* **style-dictionary:** add specific component tokens for InputBase for Flutter ([98488c5](https://github.com/FacioCode/design/commit/98488c5f3d35ed1365dcf99180e2c49462de4744))
* **style-dictionary:** add triple border radius token ([d7db06c](https://github.com/FacioCode/design/commit/d7db06c3921352303e358b2710bf47fcfaaa6c3a))
* **style-dictionary:** add triple border radius token for web ([ac5a453](https://github.com/FacioCode/design/commit/ac5a45362ec2a79870ddf1e9181ac9806bf0a9d0))
* **style-dictionary:** add utils for prop grouping and CSS var generation ([f18a8be](https://github.com/FacioCode/design/commit/f18a8be01b608258a38a3a719fb200b846bf847e))
* **style-dictionary:** generate custom properties and color tokens ([fbaf4e4](https://github.com/FacioCode/design/commit/fbaf4e420027c5dce6fff0b980faeac38b6558c2))
* **style-dictionary:** register Flutter component styles format ([73e7c7b](https://github.com/FacioCode/design/commit/73e7c7b5de51357ccf68b2c6406c58727d5d1dd6))
* **styles:** add color tokens ([9f8b6c4](https://github.com/FacioCode/design/commit/9f8b6c4395c7a6a883e6ff490c662b825f445753))
* **styles:** add custom properties ([80b4f8e](https://github.com/FacioCode/design/commit/80b4f8e04adab55eeb1ed09211db8eb0697d0c3b))
* **styles:** add new component tokens ([b498e8e](https://github.com/FacioCode/design/commit/b498e8e146043643105fc4fe5121474a1c8931fe))


### rewrite

* **style-dictionary:** rewrite background colors ([f44af02](https://github.com/FacioCode/design/commit/f44af02e31a6705c998b94a565cd77f4ccf9362d))


### BREAKING CHANGES

* **style-dictionary:** all Flutter component token names have changed.
* **styles:** some component token names were changed. Please check componentTokens file to see all changes.
* **style-dictionary:** `{component.input.large}` token is not defined anymore.
* **style-dictionary:** base, backLayer, frontLayer, inverse, success and warning background colors were removed.
* **style-dictionary:** primary token now is headline1. default token now is primary. highlight token now is link.
* **style-dictionary:** `{component.input}` tokens are not available anymore.
* **style-dictionary:** "{component.card.root}" and "{component.card.info}" tokens are not available anymore.
* `getCssVarName` was removed from `react` package and is not available anymore. It will be used internally at `style-dictionary` package
* **react:** `Component` type will not available anymore. We are building components from Material UI.
* **react:** `variant` property is not available anymore. Please use `square` property (false for rounded, true for square).
* **card:** `color` property was removed.
* **flutter:** Many constants from `ButtonStyles` were moved to `ContainedButtonStyles`, `LinkButtonStyles` and `OutlinedButtonStyles`. `InputStyles` class was removed, since underline inputs will not be used anymore.
* **flutter:** all component token constants were rename. `TypographyStyles` are rendundant with `TextThemes`, so `TypographyStyles` was removed too.
* **flutter:** The colors `backgroundBackLayer` or `backgroundBase` are not available anymore. Please use `backgroundPaper` instead. The color `backgroundFrontLayer` is not available anymore. Please use `backgroundDefault` instead. The color `backgroundInfo` is not available anymore. Please use `backgroundAlertStandardInfo` instead. `backgroundInverse`, `backgroundSuccess` and `backgroundWarning` colors are not available anymore. Color `fontDefault` is not available anymore. Please use `fontPrimary`. Color `fontHighlight` is not available anymore, please use `fontLink`. Old `fontPrimary` color now is `fontHeadline1`.





# [0.21.0](https://github.com/FacioCode/design/compare/v0.20.2...v0.21.0) (2020-12-04)


### Bug Fixes

* **react:** fix style and type errors with Card/Paper ([a57d9cd](https://github.com/FacioCode/design/commit/a57d9cd9b04d5ae11fa02f0d7ec3f16255878c42))


### Code Refactoring

* **react-unstyled:** delete package ([b6f5279](https://github.com/FacioCode/design/commit/b6f527945ddf7224bc9e0abb17e3a9d2629c274f))


### Features

* **react:** make Button, ButtonBase and Paper components available [WIP] ([6dc6419](https://github.com/FacioCode/design/commit/6dc6419ac5467ef1983018049dc1663c6cede3c9))


### BREAKING CHANGES

* **react-unstyled:** `@faciocode/react-unstyled` package will not be published anymore. Please use `@faciocode/react`.



# [0.20.0](https://github.com/FacioCode/design/compare/v0.19.0...v0.20.0) (2020-12-03)


### Code Refactoring

* **flutter:** remove appBarRootHeight constant ([5c34e42](https://github.com/FacioCode/design/commit/5c34e42446eb0b34108d7d0c8f49bd2aa7c9525d))


### BREAKING CHANGES

* **flutter:** `AppBarStyles.appBarRootHeight` is not available. You should use default AppBar height from Material



# [0.19.0](https://github.com/FacioCode/design/compare/v0.18.0...v0.19.0) (2020-12-02)


### Bug Fixes

* **react:** prevent type error with fontWeight style property ([abe3149](https://github.com/FacioCode/design/commit/abe3149593fd21ca59896e1c37cddddede169408))
* **react:** prevent type errors for Typography fontWeight ([776e67a](https://github.com/FacioCode/design/commit/776e67a436711dcfc423bc704f7fcb0b1a6564ee))


### Code Refactoring

* **style-dictionary:** move card color from `root` item to `default` ([3ebe96b](https://github.com/FacioCode/design/commit/3ebe96bde59a7231e7db607015fae847bbfebcdf))


### Features

* **flutter:** add border radius values for Paper ([71fad25](https://github.com/FacioCode/design/commit/71fad2512d8b00dfeaf472a4f48e5b107364c500))
* **flutter:** add PaperStyles ([e99df1f](https://github.com/FacioCode/design/commit/e99df1fb3a91a2f32f3dd3689355c9206b4ef7ec))
* **react:** add Paper component ([5875bc0](https://github.com/FacioCode/design/commit/5875bc025826688ff467f7dfd888c4cf15f969d2))
* **react:** add StyledProps type ([e652ce0](https://github.com/FacioCode/design/commit/e652ce09b34b3821acc5dd434d2b427a75f584d0))
* **react:** add styles and displayName for Card ([8ff26bc](https://github.com/FacioCode/design/commit/8ff26bc39cd6dd95eeb6a2bdb388ea074a9c592c))
* **react:** add support to `classes` and `className` properties ([da624c2](https://github.com/FacioCode/design/commit/da624c25f0047150ccf16239bb9d10a546be7e95))
* **react-unstyled:** create Paper component ([44cbc1f](https://github.com/FacioCode/design/commit/44cbc1f7d0729df4e67c37f72c18ed97794438d2))
* **react-unstyled:** make Card use Paper component ([6f78b28](https://github.com/FacioCode/design/commit/6f78b28bb1f008588cae70f954755e8661e87416))
* **react-unstyled:** make Paper component available ([58e8aef](https://github.com/FacioCode/design/commit/58e8aef6e6b2c661bf6d0fcd99f01891677cf38e))
* **style-dictionary:** add paper component tokens ([64c1618](https://github.com/FacioCode/design/commit/64c1618f29a4615593eb8d4b36bced7aeea2ab40))
* **styles:** add backgroundColor and color for Paper component ([d49dc03](https://github.com/FacioCode/design/commit/d49dc03c63849502b8c4eb2a37240b0561711bfb))
* **styles:** add border radius values for Paper ([346d5fb](https://github.com/FacioCode/design/commit/346d5fbaf66a8238508c4bb7b745265cfaeed698))


### BREAKING CHANGES

* **styles:** `cardRootColor` JS const now is `cardDefaultColor`.
* **style-dictionary:** `{component.card.root.color}` now is `{component.card.default.color}`.
* **flutter:** `CardStyles.cardRootColor` was renamed to `CardStyles.cardDefaultColor`



# 0.18.0 (2020-11-27)





## [0.20.2](https://github.com/FacioCode/design/compare/v0.20.1...v0.20.2) (2020-12-03)

**Note:** Version bump only for package @faciocode/design





## [0.20.1](https://github.com/FacioCode/design/compare/v0.20.0...v0.20.1) (2020-12-03)


### Code Refactoring

* **flutter:** remove appBarRootHeight constant ([5c34e42](https://github.com/FacioCode/design/commit/5c34e42446eb0b34108d7d0c8f49bd2aa7c9525d))


### BREAKING CHANGES

* **flutter:** `AppBarStyles.appBarRootHeight` is not available. You should use default AppBar height from Material



# [0.19.0](https://github.com/FacioCode/design/compare/v0.18.0...v0.19.0) (2020-12-02)


### Bug Fixes

* **react:** prevent type error with fontWeight style property ([abe3149](https://github.com/FacioCode/design/commit/abe3149593fd21ca59896e1c37cddddede169408))
* **react:** prevent type errors for Typography fontWeight ([776e67a](https://github.com/FacioCode/design/commit/776e67a436711dcfc423bc704f7fcb0b1a6564ee))


### Code Refactoring

* **style-dictionary:** move card color from `root` item to `default` ([3ebe96b](https://github.com/FacioCode/design/commit/3ebe96bde59a7231e7db607015fae847bbfebcdf))


### Features

* **flutter:** add border radius values for Paper ([71fad25](https://github.com/FacioCode/design/commit/71fad2512d8b00dfeaf472a4f48e5b107364c500))
* **flutter:** add PaperStyles ([e99df1f](https://github.com/FacioCode/design/commit/e99df1fb3a91a2f32f3dd3689355c9206b4ef7ec))
* **react:** add Paper component ([5875bc0](https://github.com/FacioCode/design/commit/5875bc025826688ff467f7dfd888c4cf15f969d2))
* **react:** add StyledProps type ([e652ce0](https://github.com/FacioCode/design/commit/e652ce09b34b3821acc5dd434d2b427a75f584d0))
* **react:** add styles and displayName for Card ([8ff26bc](https://github.com/FacioCode/design/commit/8ff26bc39cd6dd95eeb6a2bdb388ea074a9c592c))
* **react:** add support to `classes` and `className` properties ([da624c2](https://github.com/FacioCode/design/commit/da624c25f0047150ccf16239bb9d10a546be7e95))
* **react-unstyled:** create Paper component ([44cbc1f](https://github.com/FacioCode/design/commit/44cbc1f7d0729df4e67c37f72c18ed97794438d2))
* **react-unstyled:** make Card use Paper component ([6f78b28](https://github.com/FacioCode/design/commit/6f78b28bb1f008588cae70f954755e8661e87416))
* **react-unstyled:** make Paper component available ([58e8aef](https://github.com/FacioCode/design/commit/58e8aef6e6b2c661bf6d0fcd99f01891677cf38e))
* **style-dictionary:** add paper component tokens ([64c1618](https://github.com/FacioCode/design/commit/64c1618f29a4615593eb8d4b36bced7aeea2ab40))
* **styles:** add backgroundColor and color for Paper component ([d49dc03](https://github.com/FacioCode/design/commit/d49dc03c63849502b8c4eb2a37240b0561711bfb))
* **styles:** add border radius values for Paper ([346d5fb](https://github.com/FacioCode/design/commit/346d5fbaf66a8238508c4bb7b745265cfaeed698))


### BREAKING CHANGES

* **styles:** `cardRootColor` JS const now is `cardDefaultColor`.
* **style-dictionary:** `{component.card.root.color}` now is `{component.card.default.color}`.
* **flutter:** `CardStyles.cardRootColor` was renamed to `CardStyles.cardDefaultColor`



# 0.18.0 (2020-11-27)





# [0.20.0](https://github.com/FacioCode/design/compare/v0.19.0...v0.20.0) (2020-12-03)


### Bug Fixes

* **react:** prevent type error with fontWeight style property ([abe3149](https://github.com/FacioCode/design/commit/abe3149593fd21ca59896e1c37cddddede169408))
* **react:** prevent type errors for Typography fontWeight ([776e67a](https://github.com/FacioCode/design/commit/776e67a436711dcfc423bc704f7fcb0b1a6564ee))


### Code Refactoring

* **flutter:** remove appBarRootHeight constant ([5c34e42](https://github.com/FacioCode/design/commit/5c34e42446eb0b34108d7d0c8f49bd2aa7c9525d))
* **style-dictionary:** move card color from `root` item to `default` ([3ebe96b](https://github.com/FacioCode/design/commit/3ebe96bde59a7231e7db607015fae847bbfebcdf))


### Features

* **flutter:** add border radius values for Paper ([71fad25](https://github.com/FacioCode/design/commit/71fad2512d8b00dfeaf472a4f48e5b107364c500))
* **flutter:** add PaperStyles ([e99df1f](https://github.com/FacioCode/design/commit/e99df1fb3a91a2f32f3dd3689355c9206b4ef7ec))
* **react:** add Paper component ([5875bc0](https://github.com/FacioCode/design/commit/5875bc025826688ff467f7dfd888c4cf15f969d2))
* **react:** add StyledProps type ([e652ce0](https://github.com/FacioCode/design/commit/e652ce09b34b3821acc5dd434d2b427a75f584d0))
* **react:** add styles and displayName for Card ([8ff26bc](https://github.com/FacioCode/design/commit/8ff26bc39cd6dd95eeb6a2bdb388ea074a9c592c))
* **react:** add support to `classes` and `className` properties ([da624c2](https://github.com/FacioCode/design/commit/da624c25f0047150ccf16239bb9d10a546be7e95))
* **react-unstyled:** create Paper component ([44cbc1f](https://github.com/FacioCode/design/commit/44cbc1f7d0729df4e67c37f72c18ed97794438d2))
* **react-unstyled:** make Card use Paper component ([6f78b28](https://github.com/FacioCode/design/commit/6f78b28bb1f008588cae70f954755e8661e87416))
* **react-unstyled:** make Paper component available ([58e8aef](https://github.com/FacioCode/design/commit/58e8aef6e6b2c661bf6d0fcd99f01891677cf38e))
* **style-dictionary:** add paper component tokens ([64c1618](https://github.com/FacioCode/design/commit/64c1618f29a4615593eb8d4b36bced7aeea2ab40))
* **styles:** add backgroundColor and color for Paper component ([d49dc03](https://github.com/FacioCode/design/commit/d49dc03c63849502b8c4eb2a37240b0561711bfb))
* **styles:** add border radius values for Paper ([346d5fb](https://github.com/FacioCode/design/commit/346d5fbaf66a8238508c4bb7b745265cfaeed698))


### BREAKING CHANGES

* **flutter:** `AppBarStyles.appBarRootHeight` is not available. You should use default AppBar height from Material
* **styles:** `cardRootColor` JS const now is `cardDefaultColor`.
* **style-dictionary:** `{component.card.root.color}` now is `{component.card.default.color}`.
* **flutter:** `CardStyles.cardRootColor` was renamed to `CardStyles.cardDefaultColor`



# 0.18.0 (2020-11-27)





# [0.19.0](https://github.com/FacioCode/design/compare/v0.18.0...v0.19.0) (2020-12-02)


### Bug Fixes

* **react:** prevent type error with fontWeight style property ([abe3149](https://github.com/FacioCode/design/commit/abe3149593fd21ca59896e1c37cddddede169408))
* **react:** prevent type errors for Typography fontWeight ([776e67a](https://github.com/FacioCode/design/commit/776e67a436711dcfc423bc704f7fcb0b1a6564ee))


### Code Refactoring

* **style-dictionary:** move card color from `root` item to `default` ([3ebe96b](https://github.com/FacioCode/design/commit/3ebe96bde59a7231e7db607015fae847bbfebcdf))


### Features

* **flutter:** add border radius values for Paper ([71fad25](https://github.com/FacioCode/design/commit/71fad2512d8b00dfeaf472a4f48e5b107364c500))
* **flutter:** add PaperStyles ([e99df1f](https://github.com/FacioCode/design/commit/e99df1fb3a91a2f32f3dd3689355c9206b4ef7ec))
* **react:** add Paper component ([5875bc0](https://github.com/FacioCode/design/commit/5875bc025826688ff467f7dfd888c4cf15f969d2))
* **react:** add StyledProps type ([e652ce0](https://github.com/FacioCode/design/commit/e652ce09b34b3821acc5dd434d2b427a75f584d0))
* **react:** add styles and displayName for Card ([8ff26bc](https://github.com/FacioCode/design/commit/8ff26bc39cd6dd95eeb6a2bdb388ea074a9c592c))
* **react:** add support to `classes` and `className` properties ([da624c2](https://github.com/FacioCode/design/commit/da624c25f0047150ccf16239bb9d10a546be7e95))
* **react-unstyled:** create Paper component ([44cbc1f](https://github.com/FacioCode/design/commit/44cbc1f7d0729df4e67c37f72c18ed97794438d2))
* **react-unstyled:** make Card use Paper component ([6f78b28](https://github.com/FacioCode/design/commit/6f78b28bb1f008588cae70f954755e8661e87416))
* **react-unstyled:** make Paper component available ([58e8aef](https://github.com/FacioCode/design/commit/58e8aef6e6b2c661bf6d0fcd99f01891677cf38e))
* **style-dictionary:** add paper component tokens ([64c1618](https://github.com/FacioCode/design/commit/64c1618f29a4615593eb8d4b36bced7aeea2ab40))
* **styles:** add backgroundColor and color for Paper component ([d49dc03](https://github.com/FacioCode/design/commit/d49dc03c63849502b8c4eb2a37240b0561711bfb))
* **styles:** add border radius values for Paper ([346d5fb](https://github.com/FacioCode/design/commit/346d5fbaf66a8238508c4bb7b745265cfaeed698))


### BREAKING CHANGES

* **styles:** `cardRootColor` JS const now is `cardDefaultColor`.
* **style-dictionary:** `{component.card.root.color}` now is `{component.card.default.color}`.
* **flutter:** `CardStyles.cardRootColor` was renamed to `CardStyles.cardDefaultColor`





# [0.18.0](https://github.com/FacioCode/design/compare/v0.17.4...v0.18.0) (2020-11-27)


### Features

* **react:** make Typography component available as named export ([3ae3064](https://github.com/FacioCode/design/commit/3ae3064389a8e993852d49a6336be4615ce905c6))





## [0.17.4](https://github.com/FacioCode/design/compare/v0.17.3...v0.17.4) (2020-11-27)

**Note:** Version bump only for package root





## [0.17.3](https://github.com/FacioCode/design/compare/v0.17.2...v0.17.3) (2020-11-27)

**Note:** Version bump only for package root





## [0.17.2](https://github.com/FacioCode/design/compare/v0.17.1...v0.17.2) (2020-11-27)

**Note:** Version bump only for package root





## [0.17.1](https://github.com/FacioCode/design/compare/v0.17.0...v0.17.1) (2020-11-27)


### Bug Fixes

* generate valid /dist for packages ([6f43dce](https://github.com/FacioCode/design/commit/6f43dcee9ff5edfff6bfd9817f64fc0526009f60))





# [0.17.0](https://github.com/FacioCode/design/compare/v0.16.0...v0.17.0) (2020-11-27)


### Features

* **styles:** add support to CDN and TypeScript ([2c20680](https://github.com/FacioCode/design/commit/2c2068040e59bf99b33d5d0faf98313b9b9ebec7))





# [0.16.0](https://github.com/FacioCode/design/compare/v0.15.0...v0.16.0) (2020-11-27)


### Bug Fixes

* **styles:** don't add file header to JS main source file ([900d80c](https://github.com/FacioCode/design/commit/900d80c0d3deb5ffb792dcfb7baa169ef675af7d))


### Features

* add CommonJS, ES module, UMD and type definition ([7919f46](https://github.com/FacioCode/design/commit/7919f461536fab48fd3f1c4956a2de7eebcd7dbf))





# [0.15.0](https://github.com/FacioCode/design/compare/v0.14.9...v0.15.0) (2020-11-26)


### Bug Fixes

* **flutter:** set correct line height for fonts, remove button line height ([c5d9b81](https://github.com/FacioCode/design/commit/c5d9b8152c9c79b36a7e1089dd9b7975ae769869))
* **flutter:** update base border radius and line heights ([938fdfd](https://github.com/FacioCode/design/commit/938fdfd103604857c96ef374f54785992c4ec1b6))
* **flutter:** update ButtonStyles ([348e2e9](https://github.com/FacioCode/design/commit/348e2e94fe53a5fd486b42107d0cddb3e68bcd35))
* **styles:** adopt correct line heights for flutter ([9943d20](https://github.com/FacioCode/design/commit/9943d208711324d28874923f91c50b5fda6dcb8e))
* **styles:** convert typography margins to `em` on `lineHeightToEm` transform ([99860dc](https://github.com/FacioCode/design/commit/99860dc53e4f3abf201199ea0ae97331b7dd2418))
* **styles:** fix font weight for typography variants ([87c1dc5](https://github.com/FacioCode/design/commit/87c1dc531b9a70affa2192dc6c3698a9c2a44837))


### Code Refactoring

* **styles:** add semantic background colors, change inverse bgcolor path ([6cd4a08](https://github.com/FacioCode/design/commit/6cd4a08b6d6601501edf4aefbfe00ff908badfc2))


### Features

* **flutter:** add semantic background colors to ColorPalette class ([f88aa65](https://github.com/FacioCode/design/commit/f88aa65fc724565a2e968e2a9c3abfc899dcdf7b))
* **flutter:** add styles for Card ([ef36e08](https://github.com/FacioCode/design/commit/ef36e08a4ca726817fbccddf8e61963e2d504a68))
* **react:** add new Card component ([75a79ae](https://github.com/FacioCode/design/commit/75a79ae0dc5fabaa7cc582af71c3268eb0b48cc7))
* **react:** create cssVarName util for consuming styles ([3e14a14](https://github.com/FacioCode/design/commit/3e14a145af8fba3e9e60a731c8f642bf783f3597))
* **react-unstyled:** add new Card component ([37dd75f](https://github.com/FacioCode/design/commit/37dd75fc0fe3e4ea4b45c0733486f530455989d3))
* **react-unstyled:** add UnstyledComponent type ([d2aa0a4](https://github.com/FacioCode/design/commit/d2aa0a4a61d43f601644e4da1e9d95b32e9d103d))
* **styles:** add card component tokens ([dbf76a4](https://github.com/FacioCode/design/commit/dbf76a4f29c8886e0b00e764ff0314cf793b9c01))
* **styles:** add lineHeight for input, add margins for typography variants ([8f37f8a](https://github.com/FacioCode/design/commit/8f37f8afe00c12bdb0991622a06f9da830e53889))
* **styles:** add margin styles for typography component token ([3e30bf6](https://github.com/FacioCode/design/commit/3e30bf61e8f701ac2a53c50d990ea8d3b5c0d43c))
* **styles:** add size/web/px transformer ([25809b9](https://github.com/FacioCode/design/commit/25809b99e9a9659da4fbb31ca570ab5a92354169))
* **styles:** add support to semiBold font weight ([e023c01](https://github.com/FacioCode/design/commit/e023c01f3a666930414cf3fe51722dccc5bb830d))
* **styles:** adopt `size/web/px` transform for web platform ([553b1d2](https://github.com/FacioCode/design/commit/553b1d299d790e893677ba257abed87e9ffcf5a8))
* **styles:** consider letterSpacing also as base size ([0f442a3](https://github.com/FacioCode/design/commit/0f442a3f987595ce0517348e88535018e7ca84ef))
* **styles:** create `halfPlusOne` base size token for web platform ([2b0c13d](https://github.com/FacioCode/design/commit/2b0c13d4a9c5a1354ed85db9cfc735d27b02cc59))
* **styles:** create new isTypographyMargin matcher ([79b7c87](https://github.com/FacioCode/design/commit/79b7c87f9021619d510c1e8041c6bb15840eda7d))
* **styles:** set specific border radius and font weight for buttons ([8a465c6](https://github.com/FacioCode/design/commit/8a465c683cad5ca7356eef07d26231ef0ed223d1))


### BREAKING CHANGES

* **styles:** `{size.font.button.lineHeight}` token is not available anymore. If needed, you must override it for a specific platform.
* **styles:** `{component.button.root.borderRadius}` token is not available anymore. Please use `{component.button.sizeMedium.borderRadius}` for medium buttons and `{component.button.sizeLarge.borderRadius}` for large buttons.
* **styles:** inverse background color now is referenced as `{color.background.inverse.value}` instead of `{color.background.inverse.base.value}`
* **flutter:** button line height is not provided anymore. Flutter will calculate it, or you can provide it directly on your application.
* **flutter:** Because `ButtonStyles.buttonRootBorderRadius` was splitted for medium and large button sizes, `ButtonStyles.buttonRootBorderRadius` is not a valid static constant anymore. You must use `buttonSizeMediumBorderRadius` or `buttonSizeLargeBorderRadius` constants.





## [0.14.9](https://github.com/FacioCode/design/compare/v0.14.8...v0.14.9) (2020-11-25)

**Note:** Version bump only for package root





## [0.14.8](https://github.com/FacioCode/design/compare/v0.14.7...v0.14.8) (2020-11-25)


### Bug Fixes

* **examples/vanilla:** adopt correct name for css ([69ad046](https://github.com/FacioCode/design/commit/69ad046c27dcce6bc3844aecac917face1e08f09))



## 0.14.6 (2020-11-25)





## [0.14.7](https://github.com/FacioCode/design/compare/v0.14.6...v0.14.7) (2020-11-25)

**Note:** Version bump only for package root





## [0.14.6](https://github.com/FacioCode/design/compare/v0.14.4...v0.14.6) (2020-11-25)

**Note:** Version bump only for package root





## [0.14.5](https://github.com/FacioCode/design/compare/v0.14.4...v0.14.5) (2020-11-25)

**Note:** Version bump only for package root





## [0.14.4](https://github.com/FacioCode/design/compare/v0.14.3...v0.14.4) (2020-11-25)



## 0.14.2 (2020-11-25)

**Note:** Version bump only for package root





## [0.14.3](https://github.com/FacioCode/design/compare/v0.14.2...v0.14.3) (2020-11-25)

**Note:** Version bump only for package root





## [0.14.2](https://github.com/FacioCode/design/compare/v0.14.1...v0.14.2) (2020-11-25)

**Note:** Version bump only for package root





## [0.14.1](https://github.com/FacioCode/design/compare/v0.14.0...v0.14.1) (2020-11-25)

**Note:** Version bump only for package root





# [0.14.0](https://github.com/FacioCode/design/compare/v0.13.0...v0.14.0) (2020-11-25)


### Features

* **flutter:** add example project in dart ([cae7d4d](https://github.com/FacioCode/design/commit/cae7d4dee923a2bdc45094a93d7b4ffbe1ef8a3d))
* **flutter:** add example project support files for Android ([3cd6a24](https://github.com/FacioCode/design/commit/3cd6a2482f79842e63af8f331e79db82978ce7f5))
* **flutter:** add example project support files for iOS ([321296a](https://github.com/FacioCode/design/commit/321296ae0aa45ba5d934e3e6527cb19eaf64ff42))



## [0.12.3](https://github.com/FacioCode/design/compare/v0.12.2...v0.12.3) (2020-11-25)



## [0.12.2](https://github.com/FacioCode/design/compare/v0.12.1...v0.12.2) (2020-11-25)



## 0.12.1 (2020-11-25)





# [0.13.0](https://github.com/FacioCode/design/compare/v0.12.3...v0.13.0) (2020-11-25)


### Features

* **flutter:** add example project in dart ([cae7d4d](https://github.com/FacioCode/design/commit/cae7d4dee923a2bdc45094a93d7b4ffbe1ef8a3d))
* **flutter:** add example project support files for Android ([3cd6a24](https://github.com/FacioCode/design/commit/3cd6a2482f79842e63af8f331e79db82978ce7f5))
* **flutter:** add example project support files for iOS ([321296a](https://github.com/FacioCode/design/commit/321296ae0aa45ba5d934e3e6527cb19eaf64ff42))



## [0.12.2](https://github.com/FacioCode/design/compare/v0.12.1...v0.12.2) (2020-11-25)



## 0.12.1 (2020-11-25)





## [0.12.3](https://github.com/FacioCode/design/compare/v0.12.2...v0.12.3) (2020-11-25)



## 0.12.1 (2020-11-25)

**Note:** Version bump only for package root





## [0.12.2](https://github.com/FacioCode/design/compare/v0.12.1...v0.12.2) (2020-11-25)

**Note:** Version bump only for package root





## [0.12.1](https://github.com/FacioCode/design/compare/v0.12.0...v0.12.1) (2020-11-25)

**Note:** Version bump only for package root





# [0.12.0](https://github.com/FacioCode/design/compare/v0.11.6...v0.12.0) (2020-11-25)


### Features

* **react:** add CssBaseline component ([bc1d150](https://github.com/FacioCode/design/commit/bc1d1504dcc90fd2f6ecde1c943fb336593571d0))
* **react:** add styles for InputBase component ([f91711e](https://github.com/FacioCode/design/commit/f91711edc5c16e51868a8aaff04374d9f939016f))
* **react:** add Typography component ([a1a7f0e](https://github.com/FacioCode/design/commit/a1a7f0eaea9f9559a946c8fb00514f9127e5c26f))
* **react:** make CssBaseline component ([b3edb51](https://github.com/FacioCode/design/commit/b3edb511f923c4f7687dfd70f0d3a65f3e8a8e04))
* **react:** add CssBaseline as decorator on Storybook ([6dff6c9](https://github.com/FacioCode/design/commit/6dff6c9242b45f71e52a6e4ecad8594e027b6a6c))
* **react:** add Open Sans web font on Storybook ([af5c98f](https://github.com/FacioCode/design/commit/af5c98f198742a14d3bb4fa35eaec785551dfdbd))
* **react:** configure stories and add addon-docs on Storybook ([486645d](https://github.com/FacioCode/design/commit/486645d76f96f92beb174e7754c4c60f00c4d5ff))





## [0.11.6](https://github.com/FacioCode/design/compare/v0.11.5...v0.11.6) (2020-11-25)



## [0.11.4](https://github.com/FacioCode/design/compare/v0.11.3...v0.11.4) (2020-11-24)



## [0.11.3](https://github.com/FacioCode/design/compare/v0.11.2...v0.11.3) (2020-11-24)



## [0.11.2](https://github.com/FacioCode/design/compare/v0.11.1...v0.11.2) (2020-11-24)



## [0.11.1](https://github.com/FacioCode/design/compare/v0.11.0...v0.11.1) (2020-11-24)



# [0.11.0](https://github.com/FacioCode/design/compare/v0.10.0...v0.11.0) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const to color values ([e5d8078](https://github.com/FacioCode/design/commit/e5d80784a202425d4e81ddfeee901e62dfdbdab2))
* **styles:** add missing const to color values ([b91aee7](https://github.com/FacioCode/design/commit/b91aee7883d0fe368d2ea0c7728b282deb1abbf1))



# [0.10.0](https://github.com/FacioCode/design/compare/v0.9.0...v0.10.0) (2020-11-24)


### Bug Fixes

* **flutter:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))



# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



## [0.7.5](https://github.com/FacioCode/design/compare/v0.7.4...v0.7.5) (2020-11-24)



## [0.7.4](https://github.com/FacioCode/design/compare/v0.7.3...v0.7.4) (2020-11-24)



## [0.7.3](https://github.com/FacioCode/design/compare/v0.7.2...v0.7.3) (2020-11-24)



## [0.7.2](https://github.com/FacioCode/design/compare/v0.7.1...v0.7.2) (2020-11-24)


### Bug Fixes

* **deps:** upgrade types/react to 17.0.0 ([dea2bef](https://github.com/FacioCode/design/commit/dea2bef8043533bea3f48fcaa529eb25b4ec96ad))



## [0.7.1](https://github.com/FacioCode/design/compare/v0.7.0...v0.7.1) (2020-11-24)



# 0.7.0 (2020-11-24)





## [0.11.5](https://github.com/FacioCode/design/compare/v0.11.4...v0.11.5) (2020-11-24)



## [0.11.3](https://github.com/FacioCode/design/compare/v0.11.2...v0.11.3) (2020-11-24)



## [0.11.2](https://github.com/FacioCode/design/compare/v0.11.1...v0.11.2) (2020-11-24)



## [0.11.1](https://github.com/FacioCode/design/compare/v0.11.0...v0.11.1) (2020-11-24)



# [0.11.0](https://github.com/FacioCode/design/compare/v0.10.0...v0.11.0) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const to color values ([e5d8078](https://github.com/FacioCode/design/commit/e5d80784a202425d4e81ddfeee901e62dfdbdab2))
* **styles:** add missing const to color values ([b91aee7](https://github.com/FacioCode/design/commit/b91aee7883d0fe368d2ea0c7728b282deb1abbf1))



# [0.10.0](https://github.com/FacioCode/design/compare/v0.9.0...v0.10.0) (2020-11-24)


### Bug Fixes

* **flutter:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))



# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



## [0.7.5](https://github.com/FacioCode/design/compare/v0.7.4...v0.7.5) (2020-11-24)



## [0.7.4](https://github.com/FacioCode/design/compare/v0.7.3...v0.7.4) (2020-11-24)



## [0.7.3](https://github.com/FacioCode/design/compare/v0.7.2...v0.7.3) (2020-11-24)



## [0.7.2](https://github.com/FacioCode/design/compare/v0.7.1...v0.7.2) (2020-11-24)


### Bug Fixes

* **deps:** upgrade types/react to 17.0.0 ([dea2bef](https://github.com/FacioCode/design/commit/dea2bef8043533bea3f48fcaa529eb25b4ec96ad))



## [0.7.1](https://github.com/FacioCode/design/compare/v0.7.0...v0.7.1) (2020-11-24)



# 0.7.0 (2020-11-24)





## [0.11.4](https://github.com/FacioCode/design/compare/v0.11.3...v0.11.4) (2020-11-24)



## [0.11.2](https://github.com/FacioCode/design/compare/v0.11.1...v0.11.2) (2020-11-24)



## [0.11.1](https://github.com/FacioCode/design/compare/v0.11.0...v0.11.1) (2020-11-24)



# [0.11.0](https://github.com/FacioCode/design/compare/v0.10.0...v0.11.0) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const to color values ([e5d8078](https://github.com/FacioCode/design/commit/e5d80784a202425d4e81ddfeee901e62dfdbdab2))
* **styles:** add missing const to color values ([b91aee7](https://github.com/FacioCode/design/commit/b91aee7883d0fe368d2ea0c7728b282deb1abbf1))



# [0.10.0](https://github.com/FacioCode/design/compare/v0.9.0...v0.10.0) (2020-11-24)


### Bug Fixes

* **flutter:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))



# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



## [0.7.5](https://github.com/FacioCode/design/compare/v0.7.4...v0.7.5) (2020-11-24)



## [0.7.4](https://github.com/FacioCode/design/compare/v0.7.3...v0.7.4) (2020-11-24)



## [0.7.3](https://github.com/FacioCode/design/compare/v0.7.2...v0.7.3) (2020-11-24)



## [0.7.2](https://github.com/FacioCode/design/compare/v0.7.1...v0.7.2) (2020-11-24)


### Bug Fixes

* **deps:** upgrade types/react to 17.0.0 ([dea2bef](https://github.com/FacioCode/design/commit/dea2bef8043533bea3f48fcaa529eb25b4ec96ad))



## [0.7.1](https://github.com/FacioCode/design/compare/v0.7.0...v0.7.1) (2020-11-24)



# 0.7.0 (2020-11-24)





## [0.11.3](https://github.com/FacioCode/design/compare/v0.11.2...v0.11.3) (2020-11-24)



## [0.11.1](https://github.com/FacioCode/design/compare/v0.11.0...v0.11.1) (2020-11-24)



# [0.11.0](https://github.com/FacioCode/design/compare/v0.10.0...v0.11.0) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const to color values ([e5d8078](https://github.com/FacioCode/design/commit/e5d80784a202425d4e81ddfeee901e62dfdbdab2))
* **styles:** add missing const to color values ([b91aee7](https://github.com/FacioCode/design/commit/b91aee7883d0fe368d2ea0c7728b282deb1abbf1))



# [0.10.0](https://github.com/FacioCode/design/compare/v0.9.0...v0.10.0) (2020-11-24)


### Bug Fixes

* **flutter:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))



# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



## [0.7.5](https://github.com/FacioCode/design/compare/v0.7.4...v0.7.5) (2020-11-24)



## [0.7.4](https://github.com/FacioCode/design/compare/v0.7.3...v0.7.4) (2020-11-24)



## [0.7.3](https://github.com/FacioCode/design/compare/v0.7.2...v0.7.3) (2020-11-24)



## [0.7.2](https://github.com/FacioCode/design/compare/v0.7.1...v0.7.2) (2020-11-24)


### Bug Fixes

* **deps:** upgrade types/react to 17.0.0 ([dea2bef](https://github.com/FacioCode/design/commit/dea2bef8043533bea3f48fcaa529eb25b4ec96ad))



## [0.7.1](https://github.com/FacioCode/design/compare/v0.7.0...v0.7.1) (2020-11-24)



# 0.7.0 (2020-11-24)





## [0.11.2](https://github.com/FacioCode/design/compare/v0.11.1...v0.11.2) (2020-11-24)



# [0.11.0](https://github.com/FacioCode/design/compare/v0.10.0...v0.11.0) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const to color values ([e5d8078](https://github.com/FacioCode/design/commit/e5d80784a202425d4e81ddfeee901e62dfdbdab2))
* **styles:** add missing const to color values ([b91aee7](https://github.com/FacioCode/design/commit/b91aee7883d0fe368d2ea0c7728b282deb1abbf1))



# [0.10.0](https://github.com/FacioCode/design/compare/v0.9.0...v0.10.0) (2020-11-24)


### Bug Fixes

* **flutter:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))



# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



## [0.7.5](https://github.com/FacioCode/design/compare/v0.7.4...v0.7.5) (2020-11-24)



## [0.7.4](https://github.com/FacioCode/design/compare/v0.7.3...v0.7.4) (2020-11-24)



## [0.7.3](https://github.com/FacioCode/design/compare/v0.7.2...v0.7.3) (2020-11-24)



## [0.7.2](https://github.com/FacioCode/design/compare/v0.7.1...v0.7.2) (2020-11-24)


### Bug Fixes

* **deps:** upgrade types/react to 17.0.0 ([dea2bef](https://github.com/FacioCode/design/commit/dea2bef8043533bea3f48fcaa529eb25b4ec96ad))



## [0.7.1](https://github.com/FacioCode/design/compare/v0.7.0...v0.7.1) (2020-11-24)



# 0.7.0 (2020-11-24)





## [0.11.1](https://github.com/FacioCode/design/compare/v0.11.0...v0.11.1) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const to color values ([e5d8078](https://github.com/FacioCode/design/commit/e5d80784a202425d4e81ddfeee901e62dfdbdab2))
* **styles:** add missing const to color values ([b91aee7](https://github.com/FacioCode/design/commit/b91aee7883d0fe368d2ea0c7728b282deb1abbf1))



# [0.10.0](https://github.com/FacioCode/design/compare/v0.9.0...v0.10.0) (2020-11-24)


### Bug Fixes

* **flutter:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))



# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



## [0.7.5](https://github.com/FacioCode/design/compare/v0.7.4...v0.7.5) (2020-11-24)



## [0.7.4](https://github.com/FacioCode/design/compare/v0.7.3...v0.7.4) (2020-11-24)



## [0.7.3](https://github.com/FacioCode/design/compare/v0.7.2...v0.7.3) (2020-11-24)



## [0.7.2](https://github.com/FacioCode/design/compare/v0.7.1...v0.7.2) (2020-11-24)


### Bug Fixes

* **deps:** upgrade types/react to 17.0.0 ([dea2bef](https://github.com/FacioCode/design/commit/dea2bef8043533bea3f48fcaa529eb25b4ec96ad))



## [0.7.1](https://github.com/FacioCode/design/compare/v0.7.0...v0.7.1) (2020-11-24)



# 0.7.0 (2020-11-24)





# [0.11.0](https://github.com/FacioCode/design/compare/v0.10.0...v0.11.0) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const to color values ([e5d8078](https://github.com/FacioCode/design/commit/e5d80784a202425d4e81ddfeee901e62dfdbdab2))
* **flutter:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **styles:** add missing const to color values ([b91aee7](https://github.com/FacioCode/design/commit/b91aee7883d0fe368d2ea0c7728b282deb1abbf1))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))



# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



## [0.7.5](https://github.com/FacioCode/design/compare/v0.7.4...v0.7.5) (2020-11-24)



## [0.7.4](https://github.com/FacioCode/design/compare/v0.7.3...v0.7.4) (2020-11-24)



## [0.7.3](https://github.com/FacioCode/design/compare/v0.7.2...v0.7.3) (2020-11-24)



## [0.7.2](https://github.com/FacioCode/design/compare/v0.7.1...v0.7.2) (2020-11-24)


### Bug Fixes

* **deps:** upgrade types/react to 17.0.0 ([dea2bef](https://github.com/FacioCode/design/commit/dea2bef8043533bea3f48fcaa529eb25b4ec96ad))



## [0.7.1](https://github.com/FacioCode/design/compare/v0.7.0...v0.7.1) (2020-11-24)



# 0.7.0 (2020-11-24)





# [0.10.0](https://github.com/FacioCode/design/compare/v0.9.0...v0.10.0) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **flutter:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))
* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



## [0.7.5](https://github.com/FacioCode/design/compare/v0.7.4...v0.7.5) (2020-11-24)



## [0.7.4](https://github.com/FacioCode/design/compare/v0.7.3...v0.7.4) (2020-11-24)



## [0.7.3](https://github.com/FacioCode/design/compare/v0.7.2...v0.7.3) (2020-11-24)



## [0.7.2](https://github.com/FacioCode/design/compare/v0.7.1...v0.7.2) (2020-11-24)


### Bug Fixes

* **deps:** upgrade types/react to 17.0.0 ([dea2bef](https://github.com/FacioCode/design/commit/dea2bef8043533bea3f48fcaa529eb25b4ec96ad))



## [0.7.1](https://github.com/FacioCode/design/compare/v0.7.0...v0.7.1) (2020-11-24)



# 0.7.0 (2020-11-24)





# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **flutter:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))
* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



## [0.7.5](https://github.com/FacioCode/design/compare/v0.7.4...v0.7.5) (2020-11-24)



## [0.7.4](https://github.com/FacioCode/design/compare/v0.7.3...v0.7.4) (2020-11-24)



## [0.7.3](https://github.com/FacioCode/design/compare/v0.7.2...v0.7.3) (2020-11-24)



## [0.7.2](https://github.com/FacioCode/design/compare/v0.7.1...v0.7.2) (2020-11-24)


### Bug Fixes

* **deps:** upgrade types/react to 17.0.0 ([dea2bef](https://github.com/FacioCode/design/commit/dea2bef8043533bea3f48fcaa529eb25b4ec96ad))



## [0.7.1](https://github.com/FacioCode/design/compare/v0.7.0...v0.7.1) (2020-11-24)



# 0.7.0 (2020-11-24)





# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.5](https://github.com/FacioCode/design/compare/v0.7.4...v0.7.5) (2020-11-24)



## [0.7.4](https://github.com/FacioCode/design/compare/v0.7.3...v0.7.4) (2020-11-24)



## [0.7.3](https://github.com/FacioCode/design/compare/v0.7.2...v0.7.3) (2020-11-24)



## [0.7.2](https://github.com/FacioCode/design/compare/v0.7.1...v0.7.2) (2020-11-24)


### Bug Fixes

* **deps:** upgrade types/react to 17.0.0 ([dea2bef](https://github.com/FacioCode/design/commit/dea2bef8043533bea3f48fcaa529eb25b4ec96ad))



## [0.7.1](https://github.com/FacioCode/design/compare/v0.7.0...v0.7.1) (2020-11-24)



# 0.7.0 (2020-11-24)





## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



## [0.7.4](https://github.com/FacioCode/design/compare/v0.7.3...v0.7.4) (2020-11-24)



## [0.7.3](https://github.com/FacioCode/design/compare/v0.7.2...v0.7.3) (2020-11-24)



## [0.7.2](https://github.com/FacioCode/design/compare/v0.7.1...v0.7.2) (2020-11-24)


### Bug Fixes

* **deps:** upgrade types/react to 17.0.0 ([dea2bef](https://github.com/FacioCode/design/commit/dea2bef8043533bea3f48fcaa529eb25b4ec96ad))



## [0.7.1](https://github.com/FacioCode/design/compare/v0.7.0...v0.7.1) (2020-11-24)



# 0.7.0 (2020-11-24)





## [0.7.5](https://github.com/FacioCode/design/compare/v0.7.4...v0.7.5) (2020-11-24)



## [0.7.3](https://github.com/FacioCode/design/compare/v0.7.2...v0.7.3) (2020-11-24)



## [0.7.2](https://github.com/FacioCode/design/compare/v0.7.1...v0.7.2) (2020-11-24)


### Bug Fixes

* **deps:** upgrade types/react to 17.0.0 ([dea2bef](https://github.com/FacioCode/design/commit/dea2bef8043533bea3f48fcaa529eb25b4ec96ad))



## [0.7.1](https://github.com/FacioCode/design/compare/v0.7.0...v0.7.1) (2020-11-24)



# 0.7.0 (2020-11-24)





## [0.7.4](https://github.com/FacioCode/design/compare/v0.7.3...v0.7.4) (2020-11-24)



## [0.7.2](https://github.com/FacioCode/design/compare/v0.7.1...v0.7.2) (2020-11-24)


### Bug Fixes

* **deps:** upgrade types/react to 17.0.0 ([dea2bef](https://github.com/FacioCode/design/commit/dea2bef8043533bea3f48fcaa529eb25b4ec96ad))



## [0.7.1](https://github.com/FacioCode/design/compare/v0.7.0...v0.7.1) (2020-11-24)



# 0.7.0 (2020-11-24)





## [0.7.3](https://github.com/FacioCode/design/compare/v0.7.2...v0.7.3) (2020-11-24)


### Bug Fixes

* **deps:** upgrade types/react to 17.0.0 ([dea2bef](https://github.com/FacioCode/design/commit/dea2bef8043533bea3f48fcaa529eb25b4ec96ad))



## [0.7.1](https://github.com/FacioCode/design/compare/v0.7.0...v0.7.1) (2020-11-24)



# 0.7.0 (2020-11-24)





## [0.7.2](https://github.com/FacioCode/design/compare/v0.7.1...v0.7.2) (2020-11-24)


### Bug Fixes

* **deps:** upgrade types/react to 17.0.0 ([dea2bef](https://github.com/FacioCode/design/commit/dea2bef8043533bea3f48fcaa529eb25b4ec96ad))



# 0.7.0 (2020-11-24)





## [0.7.1](https://github.com/FacioCode/design/compare/v0.7.0...v0.7.1) (2020-11-24)

**Note:** Version bump only for package root





# [0.7.0](https://github.com/FacioCode/design/compare/v0.6.0...v0.7.0) (2020-11-24)


### Bug Fixes

* **flutter:** use correct FontWeight class notation ([bd1a470](https://github.com/FacioCode/design/commit/bd1a4707d05b198544190673ba6d0114daf26aac))
* **flutter:** use correct FontWeight class notation at TextTheme ([7b13e02](https://github.com/FacioCode/design/commit/7b13e02cb72163be002d58299331ce6506224c5e))


### Features

* **react-unstyled:** make *Element types available ([3fd07d5](https://github.com/FacioCode/design/commit/3fd07d5e81c5bc614fab67fbbae9507e9e19ea60))
* **styles:** add alignment transform for Flutter ([4a626bd](https://github.com/FacioCode/design/commit/4a626bdb5583c0196ee8045dfd3771112718359d))
* **styles:** add fontSizeToRem transform ([01594d5](https://github.com/FacioCode/design/commit/01594d5e3d911f147d78e4dc2b875e01ff57f088))
* **styles:** add fontWeight transform for Flutter ([025d712](https://github.com/FacioCode/design/commit/025d712e74170e070dd9ab585b96f931c6d50e3d))
* **styles:** add lineHeightToEm transform ([fa439d7](https://github.com/FacioCode/design/commit/fa439d765d70851f736573ed9080582e829cd423))
* **styles:** add separated matchers ([0e00117](https://github.com/FacioCode/design/commit/0e0011737f1ad6eee8b70c7be8900cb7f6c804fb))
* **styles:** add size/fontSizeToRem and size/lineHeightToEm transforms ([801314f](https://github.com/FacioCode/design/commit/801314f2f2084f194f38ba307472987120bd521d))
* **styles:** add support to alignment and fontWeight flutter transforms ([be8a497](https://github.com/FacioCode/design/commit/be8a4970ea7f572652e6d16ace343a99220ba1f6))
* **styles:** add typography align tokens (for web platform) ([e8daf4b](https://github.com/FacioCode/design/commit/e8daf4bc2d2cd6676b6c428274ace289ec014ed0))
* **styles:** add web-specific baseline component tokens ([9978717](https://github.com/FacioCode/design/commit/997871750fceac60d319fab5273724d332507983))
* **styles:** add web-specific tokens for input component ([18014ce](https://github.com/FacioCode/design/commit/18014ce02810c965aeffde9b137f903433ec4b5d))
* **styles:** set default color token for input component ([3c02f8d](https://github.com/FacioCode/design/commit/3c02f8dd78d643f2c2b17d43b2e6bc65c4c0bfdb))
* **styles:** set font family tokens by platform, add fallback for web ([de55be0](https://github.com/FacioCode/design/commit/de55be0437f9c103a201e6ee933a340d5f9fb0b5))
* **typography:** add support to variant and other props ([0ba7868](https://github.com/FacioCode/design/commit/0ba78683fce46b630b9f2c66fd16564e53f3f208))





# [0.6.0](https://github.com/FacioCode/design/compare/v0.5.0...v0.6.0) (2020-11-23)


### Features

* **react:** add FormLabel component ([dc1a162](https://github.com/FacioCode/design/commit/dc1a16215ea38cae6b73a6525d35de657dc8901a))
* **react:** add InputBase component ([370c29a](https://github.com/FacioCode/design/commit/370c29af634d4ecaaf076c499882c3a01f40c623))
* **react:** make FormLabel and InputBase components available ([9cd72dc](https://github.com/FacioCode/design/commit/9cd72dcfafe3f5f1c0c13620e707fcba71bb0f28))





# [0.5.0](https://github.com/FacioCode/design/compare/v0.4.4...v0.5.0) (2020-11-23)


### Features

* **react-unstyled:** add ButtonBase component ([b13068c](https://github.com/FacioCode/design/commit/b13068c3de811b97756f000c6f88f7894f6c300b))
* **react-unstyled:** add FormLabel component ([a1d9bbb](https://github.com/FacioCode/design/commit/a1d9bbb94bf7b32b2d2823e2f44f1acf36773be9))
* **react-unstyled:** add InputBase component ([70bd2b6](https://github.com/FacioCode/design/commit/70bd2b6d4a4e700f69c166616864948c115a726a))
* **react-unstyled:** make unstylerd components available ([d0cc855](https://github.com/FacioCode/design/commit/d0cc8556c8b1abdf586d0b94ca155ae7522e7c4f))





## [0.4.4](https://github.com/FacioCode/design/compare/v0.4.3...v0.4.4) (2020-11-22)

**Note:** Version bump only for package root





## [0.4.3](https://github.com/FacioCode/design/compare/v0.4.2...v0.4.3) (2020-11-22)

**Note:** Version bump only for package root





## [0.4.2](https://github.com/FacioCode/design/compare/v0.4.1...v0.4.2) (2020-11-22)

**Note:** Version bump only for package root





## 0.4.1 (2020-11-22)

**Note:** Version bump only for package root





# 0.4.0 (2020-11-22)


### Features

* **flutter:** add component styles classes ([8862576](https://github.com/FacioCode/design/commit/88625766481ab45aecbb5acd4d969f631f543933))





## 0.3.1 (2020-11-19)

**Note:** Version bump only for package root





# 0.3.0 (2020-11-19)


### Code Refactoring

* **styles:** change typography/text styles names ([c0d30ed](https://github.com/FacioCode/design/commit/c0d30ed06c377557e3cde096fa2c5e398754fbe9))


### BREAKING CHANGES

* **styles:** Now largeTitle is called headline1. Now title1 is called headline2. Now title2 is called headline3. Now title3 is called headline4. Now headline is called headline5. Now body is called bodyText1. Now subhead is called subtitle*. Now footnote is called bodyText2. Now input and largeInput are not typography styles anymore, since they were turned into component tokens.





# 0.2.0 (2020-11-19)


### Features

* **flutter:** expose sizes and wip text_theme classes ([fc596bf](https://github.com/FacioCode/design/commit/fc596bfcd86d68971ec0ffdd72677cb6945bf4e3))





## 0.1.7 (2020-11-18)

**Note:** Version bump only for package root





## 0.1.6 (2020-11-18)

**Note:** Version bump only for package root





## 0.1.5 (2020-11-18)

**Note:** Version bump only for package root





## 0.1.4 (2020-11-18)

**Note:** Version bump only for package root





## 0.1.3 (2020-11-18)

**Note:** Version bump only for package root





## 0.1.2 (2020-11-18)

**Note:** Version bump only for package root





## 0.1.1 (2020-11-18)

**Note:** Version bump only for package root





# 0.1.0 (2020-11-18)


Initial version.
