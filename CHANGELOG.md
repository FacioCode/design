# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

* **flutter-styles:** set correct line height for fonts, remove button line height ([c5d9b81](https://github.com/FacioCode/design/commit/c5d9b8152c9c79b36a7e1089dd9b7975ae769869))
* **flutter-styles:** update base border radius and line heights ([938fdfd](https://github.com/FacioCode/design/commit/938fdfd103604857c96ef374f54785992c4ec1b6))
* **flutter-styles:** update ButtonStyles ([348e2e9](https://github.com/FacioCode/design/commit/348e2e94fe53a5fd486b42107d0cddb3e68bcd35))
* **styles:** adopt correct line heights for flutter ([9943d20](https://github.com/FacioCode/design/commit/9943d208711324d28874923f91c50b5fda6dcb8e))
* **styles:** convert typography margins to `em` on `lineHeightToEm` transform ([99860dc](https://github.com/FacioCode/design/commit/99860dc53e4f3abf201199ea0ae97331b7dd2418))
* **styles:** fix font weight for typography variants ([87c1dc5](https://github.com/FacioCode/design/commit/87c1dc531b9a70affa2192dc6c3698a9c2a44837))


### Code Refactoring

* **styles:** add semantic background colors, change inverse bgcolor path ([6cd4a08](https://github.com/FacioCode/design/commit/6cd4a08b6d6601501edf4aefbfe00ff908badfc2))


### Features

* **flutter-styles:** add semantic background colors to ColorPalette class ([f88aa65](https://github.com/FacioCode/design/commit/f88aa65fc724565a2e968e2a9c3abfc899dcdf7b))
* **flutter-styles:** add styles for Card ([ef36e08](https://github.com/FacioCode/design/commit/ef36e08a4ca726817fbccddf8e61963e2d504a68))
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
* **flutter-styles:** button line height is not provided anymore. Flutter will calculate it, or you can provide it directly on your application.
* **flutter-styles:** Because `ButtonStyles.buttonRootBorderRadius` was splitted for medium and large button sizes, `ButtonStyles.buttonRootBorderRadius` is not a valid static constant anymore. You must use `buttonSizeMediumBorderRadius` or `buttonSizeLargeBorderRadius` constants.





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

* **flutter-styles:** add example project in dart ([cae7d4d](https://github.com/FacioCode/design/commit/cae7d4dee923a2bdc45094a93d7b4ffbe1ef8a3d))
* **flutter-styles:** add example project support files for Android ([3cd6a24](https://github.com/FacioCode/design/commit/3cd6a2482f79842e63af8f331e79db82978ce7f5))
* **flutter-styles:** add example project support files for iOS ([321296a](https://github.com/FacioCode/design/commit/321296ae0aa45ba5d934e3e6527cb19eaf64ff42))



## [0.12.3](https://github.com/FacioCode/design/compare/v0.12.2...v0.12.3) (2020-11-25)



## [0.12.2](https://github.com/FacioCode/design/compare/v0.12.1...v0.12.2) (2020-11-25)



## 0.12.1 (2020-11-25)





# [0.13.0](https://github.com/FacioCode/design/compare/v0.12.3...v0.13.0) (2020-11-25)


### Features

* **flutter-styles:** add example project in dart ([cae7d4d](https://github.com/FacioCode/design/commit/cae7d4dee923a2bdc45094a93d7b4ffbe1ef8a3d))
* **flutter-styles:** add example project support files for Android ([3cd6a24](https://github.com/FacioCode/design/commit/3cd6a2482f79842e63af8f331e79db82978ce7f5))
* **flutter-styles:** add example project support files for iOS ([321296a](https://github.com/FacioCode/design/commit/321296ae0aa45ba5d934e3e6527cb19eaf64ff42))



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
* **react-storybook:** add CssBaseline as decorator ([6dff6c9](https://github.com/FacioCode/design/commit/6dff6c9242b45f71e52a6e4ecad8594e027b6a6c))
* **react-storybook:** add Open Sans web font ([af5c98f](https://github.com/FacioCode/design/commit/af5c98f198742a14d3bb4fa35eaec785551dfdbd))
* **react-storybook:** configure stories and add addon-docs ([486645d](https://github.com/FacioCode/design/commit/486645d76f96f92beb174e7754c4c60f00c4d5ff))





## [0.11.6](https://github.com/FacioCode/design/compare/v0.11.5...v0.11.6) (2020-11-25)



## [0.11.4](https://github.com/FacioCode/design/compare/v0.11.3...v0.11.4) (2020-11-24)



## [0.11.3](https://github.com/FacioCode/design/compare/v0.11.2...v0.11.3) (2020-11-24)



## [0.11.2](https://github.com/FacioCode/design/compare/v0.11.1...v0.11.2) (2020-11-24)



## [0.11.1](https://github.com/FacioCode/design/compare/v0.11.0...v0.11.1) (2020-11-24)



# [0.11.0](https://github.com/FacioCode/design/compare/v0.10.0...v0.11.0) (2020-11-24)


### Bug Fixes

* **flutter-styles:** add missing const to color values ([e5d8078](https://github.com/FacioCode/design/commit/e5d80784a202425d4e81ddfeee901e62dfdbdab2))
* **styles:** add missing const to color values ([b91aee7](https://github.com/FacioCode/design/commit/b91aee7883d0fe368d2ea0c7728b282deb1abbf1))



# [0.10.0](https://github.com/FacioCode/design/compare/v0.9.0...v0.10.0) (2020-11-24)


### Bug Fixes

* **flutter-styles:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter-styles:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))



# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **flutter-styles:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter-styles:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter-styles ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



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

* **flutter-styles:** add missing const to color values ([e5d8078](https://github.com/FacioCode/design/commit/e5d80784a202425d4e81ddfeee901e62dfdbdab2))
* **styles:** add missing const to color values ([b91aee7](https://github.com/FacioCode/design/commit/b91aee7883d0fe368d2ea0c7728b282deb1abbf1))



# [0.10.0](https://github.com/FacioCode/design/compare/v0.9.0...v0.10.0) (2020-11-24)


### Bug Fixes

* **flutter-styles:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter-styles:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))



# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **flutter-styles:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter-styles:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter-styles ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



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

* **flutter-styles:** add missing const to color values ([e5d8078](https://github.com/FacioCode/design/commit/e5d80784a202425d4e81ddfeee901e62dfdbdab2))
* **styles:** add missing const to color values ([b91aee7](https://github.com/FacioCode/design/commit/b91aee7883d0fe368d2ea0c7728b282deb1abbf1))



# [0.10.0](https://github.com/FacioCode/design/compare/v0.9.0...v0.10.0) (2020-11-24)


### Bug Fixes

* **flutter-styles:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter-styles:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))



# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **flutter-styles:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter-styles:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter-styles ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



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

* **flutter-styles:** add missing const to color values ([e5d8078](https://github.com/FacioCode/design/commit/e5d80784a202425d4e81ddfeee901e62dfdbdab2))
* **styles:** add missing const to color values ([b91aee7](https://github.com/FacioCode/design/commit/b91aee7883d0fe368d2ea0c7728b282deb1abbf1))



# [0.10.0](https://github.com/FacioCode/design/compare/v0.9.0...v0.10.0) (2020-11-24)


### Bug Fixes

* **flutter-styles:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter-styles:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))



# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **flutter-styles:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter-styles:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter-styles ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



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

* **flutter-styles:** add missing const to color values ([e5d8078](https://github.com/FacioCode/design/commit/e5d80784a202425d4e81ddfeee901e62dfdbdab2))
* **styles:** add missing const to color values ([b91aee7](https://github.com/FacioCode/design/commit/b91aee7883d0fe368d2ea0c7728b282deb1abbf1))



# [0.10.0](https://github.com/FacioCode/design/compare/v0.9.0...v0.10.0) (2020-11-24)


### Bug Fixes

* **flutter-styles:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter-styles:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))



# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **flutter-styles:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter-styles:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter-styles ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



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

* **flutter-styles:** add missing const to color values ([e5d8078](https://github.com/FacioCode/design/commit/e5d80784a202425d4e81ddfeee901e62dfdbdab2))
* **styles:** add missing const to color values ([b91aee7](https://github.com/FacioCode/design/commit/b91aee7883d0fe368d2ea0c7728b282deb1abbf1))



# [0.10.0](https://github.com/FacioCode/design/compare/v0.9.0...v0.10.0) (2020-11-24)


### Bug Fixes

* **flutter-styles:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter-styles:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))



# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **flutter-styles:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter-styles:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter-styles ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



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

* **flutter-styles:** add missing const to color values ([e5d8078](https://github.com/FacioCode/design/commit/e5d80784a202425d4e81ddfeee901e62dfdbdab2))
* **flutter-styles:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter-styles:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **styles:** add missing const to color values ([b91aee7](https://github.com/FacioCode/design/commit/b91aee7883d0fe368d2ea0c7728b282deb1abbf1))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))



# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **flutter-styles:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter-styles:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter-styles ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



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

* **flutter-styles:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter-styles:** convert typography and base sizes to double ([f86eba5](https://github.com/FacioCode/design/commit/f86eba53dc09d125974275e801a4576efe63a385))
* **flutter-styles:** fix color palette syntax and const use ([c66f897](https://github.com/FacioCode/design/commit/c66f897cbda4e9a5a64ab31bfa4bcae6d83754ee))
* **flutter-styles:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
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

* **styles:** generate correct version for flutter-styles ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



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

* **flutter-styles:** add missing const, replace lineHeight by height ([376e11f](https://github.com/FacioCode/design/commit/376e11f647eb96afbd53f50c21e2415eeefe5867))
* **flutter-styles:** import missing material and painting ([0a2bd9f](https://github.com/FacioCode/design/commit/0a2bd9f87a9b08276e7ded286c1c1feeb4092a80))
* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **button base:** add classes and className properties ([48e430e](https://github.com/FacioCode/design/commit/48e430e6c10f2e1c8084e482961d314f04290066))
* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter-styles ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



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

* **styles:** generate correct version for flutter-styles ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))


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

* **styles:** generate correct version for flutter-styles ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



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

* **flutter-styles:** use correct FontWeight class notation ([bd1a470](https://github.com/FacioCode/design/commit/bd1a4707d05b198544190673ba6d0114daf26aac))
* **flutter-styles:** use correct FontWeight class notation at TextTheme ([7b13e02](https://github.com/FacioCode/design/commit/7b13e02cb72163be002d58299331ce6506224c5e))


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

* **flutter-styles:** add component styles classes ([8862576](https://github.com/FacioCode/design/commit/88625766481ab45aecbb5acd4d969f631f543933))





## 0.3.1 (2020-11-19)

**Note:** Version bump only for package root





# 0.3.0 (2020-11-19)


### Code Refactoring

* **styles:** change typography/text styles names ([c0d30ed](https://github.com/FacioCode/design/commit/c0d30ed06c377557e3cde096fa2c5e398754fbe9))


### BREAKING CHANGES

* **styles:** Now largeTitle is called headline1. Now title1 is called headline2. Now title2 is called headline3. Now title3 is called headline4. Now headline is called headline5. Now body is called bodyText1. Now subhead is called subtitle*. Now footnote is called bodyText2. Now input and largeInput are not typography styles anymore, since they were turned into component tokens.





# 0.2.0 (2020-11-19)


### Features

* **flutter-styles:** expose sizes and wip text_theme classes ([fc596bf](https://github.com/FacioCode/design/commit/fc596bfcd86d68971ec0ffdd72677cb6945bf4e3))





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
