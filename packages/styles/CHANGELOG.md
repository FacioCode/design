# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.15.0](https://github.com/FacioCode/design/compare/v0.14.9...v0.15.0) (2020-11-26)


### Bug Fixes

* **styles:** adopt correct line heights for flutter ([9943d20](https://github.com/FacioCode/design/commit/9943d208711324d28874923f91c50b5fda6dcb8e))
* **styles:** convert typography margins to `em` on `lineHeightToEm` transform ([99860dc](https://github.com/FacioCode/design/commit/99860dc53e4f3abf201199ea0ae97331b7dd2418))
* **styles:** fix font weight for typography variants ([87c1dc5](https://github.com/FacioCode/design/commit/87c1dc531b9a70affa2192dc6c3698a9c2a44837))


### Code Refactoring

* **styles:** add semantic background colors, change inverse bgcolor path ([6cd4a08](https://github.com/FacioCode/design/commit/6cd4a08b6d6601501edf4aefbfe00ff908badfc2))


### Features

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





## [0.14.9](https://github.com/FacioCode/design/compare/v0.14.8...v0.14.9) (2020-11-25)

**Note:** Version bump only for package @faciocode/styles





## [0.14.8](https://github.com/FacioCode/design/compare/v0.14.7...v0.14.8) (2020-11-25)



## 0.14.6 (2020-11-25)

**Note:** Version bump only for package @faciocode/styles





## [0.14.7](https://github.com/FacioCode/design/compare/v0.14.6...v0.14.7) (2020-11-25)

**Note:** Version bump only for package @faciocode/styles





## [0.14.6](https://github.com/FacioCode/design/compare/v0.14.4...v0.14.6) (2020-11-25)

**Note:** Version bump only for package @faciocode/styles





## [0.14.5](https://github.com/FacioCode/design/compare/v0.14.4...v0.14.5) (2020-11-25)

**Note:** Version bump only for package @faciocode/styles





## [0.14.4](https://github.com/FacioCode/design/compare/v0.14.3...v0.14.4) (2020-11-25)

**Note:** Version bump only for package @faciocode/styles





## [0.14.3](https://github.com/FacioCode/design/compare/v0.14.2...v0.14.3) (2020-11-25)

**Note:** Version bump only for package @faciocode/styles





## [0.14.2](https://github.com/FacioCode/design/compare/v0.14.1...v0.14.2) (2020-11-25)

**Note:** Version bump only for package @faciocode/styles





# [0.14.0](https://github.com/FacioCode/design/compare/v0.13.0...v0.14.0) (2020-11-25)

**Note:** Version bump only for package @faciocode/styles





# [0.13.0](https://github.com/FacioCode/design/compare/v0.12.3...v0.13.0) (2020-11-25)



## [0.12.2](https://github.com/FacioCode/design/compare/v0.12.1...v0.12.2) (2020-11-25)

**Note:** Version bump only for package @faciocode/styles





## [0.12.3](https://github.com/FacioCode/design/compare/v0.12.2...v0.12.3) (2020-11-25)

**Note:** Version bump only for package @faciocode/styles





## [0.12.2](https://github.com/FacioCode/design/compare/v0.12.1...v0.12.2) (2020-11-25)

**Note:** Version bump only for package @faciocode/styles





# [0.12.0](https://github.com/FacioCode/design/compare/v0.11.6...v0.12.0) (2020-11-25)

**Note:** Version bump only for package @faciocode/styles





## [0.11.6](https://github.com/FacioCode/design/compare/v0.11.5...v0.11.6) (2020-11-25)

## [0.11.5](https://github.com/FacioCode/design/compare/v0.11.4...v0.11.5) (2020-11-24)

## [0.11.4](https://github.com/FacioCode/design/compare/v0.11.3...v0.11.4) (2020-11-24)

**Note:** Version bump only for package @faciocode/styles





## [0.11.4](https://github.com/FacioCode/design/compare/v0.11.3...v0.11.4) (2020-11-24)

**Note:** Version bump only for package @faciocode/styles





## [0.11.3](https://github.com/FacioCode/design/compare/v0.11.2...v0.11.3) (2020-11-24)

**Note:** Version bump only for package @faciocode/styles





## [0.11.2](https://github.com/FacioCode/design/compare/v0.11.1...v0.11.2) (2020-11-24)

**Note:** Version bump only for package @faciocode/styles





## [0.11.1](https://github.com/FacioCode/design/compare/v0.11.0...v0.11.1) (2020-11-24)

**Note:** Version bump only for package @faciocode/styles





# [0.11.0](https://github.com/FacioCode/design/compare/v0.10.0...v0.11.0) (2020-11-24)


### Bug Fixes

* **styles:** add missing const to color values ([b91aee7](https://github.com/FacioCode/design/commit/b91aee7883d0fe368d2ea0c7728b282deb1abbf1))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))



# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)





# [0.10.0](https://github.com/FacioCode/design/compare/v0.9.0...v0.10.0) (2020-11-24)


### Bug Fixes

* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))
* **styles:** adopt size/flutter/toDouble transform for base sizes ([eea5825](https://github.com/FacioCode/design/commit/eea5825e8a27b0ae8d1c38407cf534fcdae23c13))
* **styles:** convert typography and base sizes to double ([5eb316b](https://github.com/FacioCode/design/commit/5eb316b633e3d6702562ec1ea7d0483f18dbc739))
* **styles:** only add name and value prefixes if category is color ([0ddb910](https://github.com/FacioCode/design/commit/0ddb9105151bce8c5224212cd38060924ee4bfc9))


### Features

* **styles:** add isLetterSpacing matcher ([121a872](https://github.com/FacioCode/design/commit/121a87201fe4c9fa97d0270966b9a110e5088c46))
* **styles:** add size/flutter/toDouble transform ([e3d8ba1](https://github.com/FacioCode/design/commit/e3d8ba1b4fca81867f324ff440145be27c6c74be))
* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)





# [0.9.0](https://github.com/FacioCode/design/compare/v0.8.0...v0.9.0) (2020-11-24)


### Bug Fixes

* **styles:** add missing const, replace lineHeight by height ([ddc57e6](https://github.com/FacioCode/design/commit/ddc57e6d85e5a0bcb3ab3ecbdecbff7298ffba3c))


### Features

* **styles:** import material and painting at flutter template ([da62040](https://github.com/FacioCode/design/commit/da6204053fb34ff759dd3a5fc8d489832bfa161c))



## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)





# [0.8.0](https://github.com/FacioCode/design/compare/v0.7.6...v0.8.0) (2020-11-24)

**Note:** Version bump only for package @faciocode/styles





## [0.7.6](https://github.com/FacioCode/design/compare/v0.7.5...v0.7.6) (2020-11-24)


### Bug Fixes

* **styles:** generate correct version for flutter-styles ([5fd3c4a](https://github.com/FacioCode/design/commit/5fd3c4a0724365b9e6fc5e79cb91db6248c6c7a2))



# 0.7.0 (2020-11-24)





# [0.7.0](https://github.com/FacioCode/design/compare/v0.6.0...v0.7.0) (2020-11-24)


### Features

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





# [0.6.0](https://github.com/FacioCode/design/compare/v0.5.0...v0.6.0) (2020-11-23)

**Note:** Version bump only for package @faciocode/styles





# [0.5.0](https://github.com/FacioCode/design/compare/v0.4.4...v0.5.0) (2020-11-23)

**Note:** Version bump only for package @faciocode/styles





## [0.4.4](https://github.com/FacioCode/design/compare/v0.4.3...v0.4.4) (2020-11-22)

**Note:** Version bump only for package @faciocode/styles





## 0.4.1 (2020-11-22)



## 0.4.1 (2020-11-22)


### Bug Fixes

* **styles:** add missing constructor at component styles template ([d02c168](https://github.com/FacioCode/design/commit/d02c168574c33db43478f4f38dcf4b82a64b2b74))
* **styles:** add missing reference to headline2 fontSize value ([9c9fecf](https://github.com/FacioCode/design/commit/9c9fecf376088edcb1c7711202f19a8684f148f7))
* **styles:** add missing semicolon at text theme flutter template ([33391f3](https://github.com/FacioCode/design/commit/33391f3c7c1943df629f53b8b2d94147b48fbf29))



# 0.4.0 (2020-11-22)


### Bug Fixes

* **styles:** fix font size value for input component token ([74bb0b7](https://github.com/FacioCode/design/commit/74bb0b7cc4f45f4380eb994619dc295c42ede8ea))
* **styles:** remove px from CSS files ([22fd670](https://github.com/FacioCode/design/commit/22fd670000aff45b5224b50535a2efbfc3840f4f))


### Code Refactoring

* **styles:** change appbar to appBar ([19ba8ec](https://github.com/FacioCode/design/commit/19ba8ec3ef57ce069533f8e3ca8b8cba16605ec9))
* **styles:** refactor chip component tokens ([8382d60](https://github.com/FacioCode/design/commit/8382d6014fc05c396ab69946179af9ef2e088603))
* **styles:** separate styles by prop values ([6a867fd](https://github.com/FacioCode/design/commit/6a867fd43b7f5e18f370353e94df8e33a94d01bd))


### Features

* **flutter-styles:** add component styles classes ([8862576](https://github.com/FacioCode/design/commit/88625766481ab45aecbb5acd4d969f631f543933))
* **styles:** add component styles generator for Flutter ([2650412](https://github.com/FacioCode/design/commit/26504127e93b8c656bd8b5882bd086526cc586c2))
* **styles:** add lineHeight style for typography component tokens ([d5ffcbe](https://github.com/FacioCode/design/commit/d5ffcbe0e717c5fbe06389b40ad4212f30d9cfa6))
* **styles:** add web-specific typography margin tokens ([b7236f4](https://github.com/FacioCode/design/commit/b7236f4cec19f96b9d1967df8a89bfba7e3ff1af))


### BREAKING CHANGES

* **styles:** now buttonBorderRadius is buttonRootBorderRadius. now buttonBorderWidth is buttonContainedBorderWidth. now buttonSmall is butttonSizeMedium, and buttonMedium is buttonSizeLarge.
* **styles:** now chipBorderRadius is chipRootBorderRadius. Now chipBorderWidth is chipRootBorderWidth
* **styles:** Pixel units were removed from CSS file inside dist. `index.js` will not be available.
* **styles:** you must replace "appbar" to "appBar" reference in some places in your application



## 0.3.1 (2020-11-19)



# 0.3.0 (2020-11-19)


### Code Refactoring

* **styles:** change typography/text styles names ([c0d30ed](https://github.com/FacioCode/design/commit/c0d30ed06c377557e3cde096fa2c5e398754fbe9))


### Features

* add consolidated text/typography style definitions for flutter and web ([2865b7a](https://github.com/FacioCode/design/commit/2865b7ab0d54dc83960e439e35adc077223edc85))
* **styles:** add global input component token ([8ee366a](https://github.com/FacioCode/design/commit/8ee366a42ae42706cd747c399896aa0808678a02))
* **styles:** add input component token for flutter ([3aeb69f](https://github.com/FacioCode/design/commit/3aeb69ff3ce416903e7088b3303f9060d03f9077))
* **styles:** add input component token for web ([b6aa2e9](https://github.com/FacioCode/design/commit/b6aa2e9f8b9db60081a3487c25d7b5234722a102))
* **styles:** add label component token (global) ([8071f26](https://github.com/FacioCode/design/commit/8071f26b69ad2d2a377dff9b7b3a91c998230a5c))
* **styles:** add primary, secondary, default and hint font colors ([aca589e](https://github.com/FacioCode/design/commit/aca589e3a5b38e8e587e8620d992aae656e88b50))


### BREAKING CHANGES

* **styles:** Now largeTitle is called headline1. Now title1 is called headline2. Now title2 is called headline3. Now title3 is called headline4. Now headline is called headline5. Now body is called bodyText1. Now subhead is called subtitle*. Now footnote is called bodyText2. Now input and largeInput are not typography styles anymore, since they were turned into component tokens.
* The FontSizes and Fonts classes were removed from flutter-styles. If you need some
text/typography style, please use TextTheme.textTheme. The text style names also has changed.



# 0.2.0 (2020-11-19)


### Bug Fixes

* **styles:** fix references to fontSize and vertical padding ([da2447b](https://github.com/FacioCode/design/commit/da2447bed1911ce5896d050cec9e106a9ad4af3c))


### Features

* **flutter-styles:** expose sizes and wip text_theme classes ([fc596bf](https://github.com/FacioCode/design/commit/fc596bfcd86d68971ec0ffdd72677cb6945bf4e3))
* **styles:**  add typography definitions for flutter ([94ede9c](https://github.com/FacioCode/design/commit/94ede9c8a5281396cffc255bbd5d06e9e7062ae3))
* **styles:** add "regular" and "bold" font weight tokens ([69e12f1](https://github.com/FacioCode/design/commit/69e12f1cf8b59c3f97a172ce3d7e3ad13107602e))
* **styles:** add "sevenfold" base size token ([5ed4398](https://github.com/FacioCode/design/commit/5ed43988b8028684d6cdd579c5ca5d9565bc07ac))
* **styles:** add extraBold font weight ([12f2b26](https://github.com/FacioCode/design/commit/12f2b26a133f5730e9bc7f6cf34d541ab82b4ec4))
* **styles:** add fivefold spacing token, rename doubleHalf to singleHalf ([30bc7fe](https://github.com/FacioCode/design/commit/30bc7fe3778d263c515ec221c8fb93cd02009f24))
* **styles:** add flutter text theme format generation ([1262c56](https://github.com/FacioCode/design/commit/1262c565da97fb84f10c122e591990771e53c174))
* **styles:** add largeTitle variant to typography component ([5427f4b](https://github.com/FacioCode/design/commit/5427f4b6737a4527d426e669c9f8634e63d4caf6))
* **styles:** add template for flutter text theme ([a28225e](https://github.com/FacioCode/design/commit/a28225e9fa019842af7738ad97ddc30de87ee0c1))
* **styles:** add typography definitions for web ([658d1c8](https://github.com/FacioCode/design/commit/658d1c8a919fca619d6e2d69220153287d8479a8))
* **styles:** expand largeTitle font size tokens ([9619b12](https://github.com/FacioCode/design/commit/9619b1269a2643e5c2e8525086d571f3ea0896ca))
* **styles:** expand largeTitle styles ([d0b4e36](https://github.com/FacioCode/design/commit/d0b4e36113502d69fe1386f20f3c02a6682773b5))



## 0.1.7 (2020-11-18)



## 0.1.6 (2020-11-18)



## 0.1.5 (2020-11-18)



## 0.1.4 (2020-11-18)



## 0.1.3 (2020-11-18)



## 0.1.2 (2020-11-18)



## 0.1.1 (2020-11-18)



# 0.1.0 (2020-11-18)


### Features

* **styles:** add height and label padding for medium button ([3717452](https://github.com/FacioCode/design/commit/37174520e35ba2a70aad0e9380174886aced7923))



## 0.0.1 (2020-11-17)


### Bug Fixes

* **styles:** add missing className for flutter generated file ([d08ae91](https://github.com/FacioCode/design/commit/d08ae91a7bb908b2e9590dead559cddadb07376e))
* **styles:** adopt base font color for typography component token ([b9017f3](https://github.com/FacioCode/design/commit/b9017f3520cf0801c1402edfe0a2815daaf925e6))
* **styles:** fix button border width token ([3d80b4b](https://github.com/FacioCode/design/commit/3d80b4b074d0de945c3375d6babf5dfad2f14f56))
* **styles:** set correct color for base black ([2b4ce3c](https://github.com/FacioCode/design/commit/2b4ce3c60f8021b3156b10a240e091dcceda931a))
* **styles:** set right font color values, remove textPrimary ([b16f3be](https://github.com/FacioCode/design/commit/b16f3be157ddf0c887998f62504678b65fa14ba1))


### Features

* **button:** set height and padding tokens for small button ([e83251a](https://github.com/FacioCode/design/commit/e83251ab7347f8422158747a7123adfd8a04b9cb))
* **style:** add CSS generation ([47d7987](https://github.com/FacioCode/design/commit/47d798791443626be4ca0a59c842261ce68db061))
* **styles:** add background color for light theme ([fcf2b09](https://github.com/FacioCode/design/commit/fcf2b09759e0c0ac01bb21265ee240f629033261))
* **styles:** add base size tokens ([dabdb75](https://github.com/FacioCode/design/commit/dabdb75934f0eec176370836c2fe381330813adf))
* **styles:** add base sizes ([842e3d2](https://github.com/FacioCode/design/commit/842e3d267512bf4e91a08604703f8726d9c0b73e))
* **styles:** add common border radius and width tokens ([d159ae8](https://github.com/FacioCode/design/commit/d159ae8551d35ec620988cc7b39dd14799360dc4))
* **styles:** add component tokens for appbar ([77cbf2a](https://github.com/FacioCode/design/commit/77cbf2abdb765cc1d4e3d4ef5127ef8fab4c9ca8))
* **styles:** add component tokens for button ([df76999](https://github.com/FacioCode/design/commit/df76999f2a904fc65a31b22248ab1821e297e758))
* **styles:** add component tokens for chip ([f404e79](https://github.com/FacioCode/design/commit/f404e7931c0ed76f80d71f1a62d269a3ca2fb6a1))
* **styles:** add consolidated flutter library generation ([242f614](https://github.com/FacioCode/design/commit/242f61466ae36a02a9a57d9051b0b94cec599976))
* **styles:** add flutter platform config ([ba65718](https://github.com/FacioCode/design/commit/ba6571817e13f96cec1ae1f6e832b4d5e6d2d348))
* **styles:** add flutter/pubspec.yaml format ([173fc15](https://github.com/FacioCode/design/commit/173fc15bd3e0ca68ccb292ff3edcb67069971c53))
* **styles:** add font colors for light theme ([618f04c](https://github.com/FacioCode/design/commit/618f04c57a959243f0e57fba435a014773a57af7))
* **styles:** add font family and font size tokens ([2ecdebd](https://github.com/FacioCode/design/commit/2ecdebd54424bf9e9446b84bbcd2f3c5175bea0b))
* **styles:** add font size tokens for web platform ([a07fe1d](https://github.com/FacioCode/design/commit/a07fe1d57bcc4cd0f1a322da87fbf2dd39d3daaf))
* **styles:** add fonts and sizes file generation ([8c3f336](https://github.com/FacioCode/design/commit/8c3f336cf9e1b53d8d3a23f12e98e5b8d7454648))
* **styles:** add grey base colors ([6bbc656](https://github.com/FacioCode/design/commit/6bbc656feb7abf39f8b72240cd052aa328161799))
* **styles:** add icon names ([ef8fcaa](https://github.com/FacioCode/design/commit/ef8fcaa43116016603f99a7a2982b89419c0c9fa))
* **styles:** add more background color definitions ([24d3c1c](https://github.com/FacioCode/design/commit/24d3c1c295ff078819465106b43b6c4a66eb121b))
* **styles:** add Open Sans fonts assets ([8bd2498](https://github.com/FacioCode/design/commit/8bd24988014b557a380f26b9780f0943ffe9379a))
* **styles:** add pig SVG icon ([365d08e](https://github.com/FacioCode/design/commit/365d08e9dda0792f08d98969081ba8ba72e1ee69))
* **styles:** add pubspec.yaml template ([d3053ee](https://github.com/FacioCode/design/commit/d3053ee24495171308436dc4de9e40b159553c51))
* **styles:** add support to multiple themes and platforms ([c1cea45](https://github.com/FacioCode/design/commit/c1cea45d96808fcf4f4b69d5d3363d7f2ab14853))
* **styles:** add web platform config ([d376a44](https://github.com/FacioCode/design/commit/d376a44f65909953d36395003de07fbb5a68d298))
* **styles:** initialize typographuy component ([4f24ca6](https://github.com/FacioCode/design/commit/4f24ca693d3943a1c7d8551874c6168ff1e2ba65))
