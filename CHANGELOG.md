# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
