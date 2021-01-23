# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.2](https://github.com/FacioCode/design/compare/v2.0.1...v2.0.2) (2021-01-21)

**Note:** Version bump only for package @faciocode/style-dictionary





## [2.0.1](https://github.com/FacioCode/design/compare/v2.0.0...v2.0.1) (2021-01-21)

**Note:** Version bump only for package @faciocode/style-dictionary





# [2.0.0](https://github.com/FacioCode/design/compare/v1.5.0...v2.0.0) (2021-01-21)


### Code Refactoring

* **style-dictionary:** remove `{component.link}` component token ([d3da173](https://github.com/FacioCode/design/commit/d3da1737b70741461ca22c35122a8f74ac0dc170))


### Features

* **style-dictionary:** add border color tokens for buttons ([8b340ef](https://github.com/FacioCode/design/commit/8b340ef31e091b2f0046ca48aab9d506015dd537))
* **style-dictionary:** add boxShadow token to buttons and links ([97f3e1b](https://github.com/FacioCode/design/commit/97f3e1b53e658304607f406aa599600bb73c3408))
* **style-dictionary:** add doubleQuarter border radius for Flutter platform ([cd1dea3](https://github.com/FacioCode/design/commit/cd1dea345f7786ce67938ffb4a86c63ceb20acb9))
* **style-dictionary:** add doubleQuarter size for border radius ([434d094](https://github.com/FacioCode/design/commit/434d094f0bb97a74b01d873fea39b69a7cc230b8))
* **style-dictionary:** add focusVisible for contained button, remove border radius ([bc9fc2a](https://github.com/FacioCode/design/commit/bc9fc2a3d1fe444d4836d4be667ac19dba1f6a3e))
* **style-dictionary:** add new base size tokens ([5be0e34](https://github.com/FacioCode/design/commit/5be0e343509a2ff2c6348997686dda861f403cf3))
* **style-dictionary:** add new transparent.00 token ([0d98353](https://github.com/FacioCode/design/commit/0d98353a3aed0fad5952f727d78b659b68189a06))
* **style-dictionary:** add shadow tokens for web platform ([e28f026](https://github.com/FacioCode/design/commit/e28f026d5cfd8b10a5cc6e24aff5232cc2540183))
* **style-dictionary:** add tokens for icon buttons ([c388db9](https://github.com/FacioCode/design/commit/c388db9103ab45901e024ba3e471a9b5a7bb7f53))
* **style-dictionary:** add tokens for link and pressed link ([9543e27](https://github.com/FacioCode/design/commit/9543e278a140c9be742d272819c074f502904a09))
* **style-dictionary:** add tokens for small and medium button sizes ([51f1398](https://github.com/FacioCode/design/commit/51f1398f5c740a588a892a94c1674bbc2a94931d))
* **style-dictionary:** add tokens for states for outlined button ([33611d1](https://github.com/FacioCode/design/commit/33611d12f43972ba24c98626e86d45c62aa6a8f0))
* **style-dictionary:** add tokens for states, remove border radius token ([8d49966](https://github.com/FacioCode/design/commit/8d49966a9a2e75f56a3d5733462565b16e5baef2))


### BREAKING CHANGES

* **style-dictionary:** `{component.link}` was removed. Please use `{component.linkButton}` instead.
* **style-dictionary:** `{component.outlinedButton.sizeSmall}` and `{component.outlinedButton.sizeMedium}` tokens were removed. Please use `{component.button.sizeSmall}` and `{component.button.sizeMedium}`.
* **style-dictionary:** `{component.linkButton.sizeSmall.borderRadius}` token was removed. Please use `{component.button.sizeSmall.borderRadius}`.
* **style-dictionary:** `{component.containedButton.sizeMedium.borderRadius}` was removed. Please use `{component.button.sizeMedium.borderRadius}`. `{component.containedButton.sizeSmall.borderRadius}` was removed. Please use `{component.button.sizeSmall.borderRadius}`. `{component.containedButton.hover.boxShadow}` was removed.





# [1.5.0](https://github.com/FacioCode/design/compare/v1.4.0...v1.5.0) (2021-01-20)


### Bug Fixes

* **style-dictionary:** improve error color contrast ([97dfe0c](https://github.com/FacioCode/design/commit/97dfe0c39ce2c0b316200f306cebc8b9b2f8e2ca))


### Features

* **style-dictionary:** add background color token for warning alert ([976dfd8](https://github.com/FacioCode/design/commit/976dfd8aa685989143ff11951495ca58e2c6afaf))
* **style-dictionary:** add color tokens for alert title ([c70bdcf](https://github.com/FacioCode/design/commit/c70bdcf355a45931be266cfb4394ee95c281ff49))
* **style-dictionary:** add new class keys for typography (only web) ([d28e54a](https://github.com/FacioCode/design/commit/d28e54a16b5dcae1c8ac7751e0c9063050551e78))
* **style-dictionary:** add size tokens generation for web platform ([e39f79d](https://github.com/FacioCode/design/commit/e39f79d5976bfeda8b57457011a1ff1d08e39724))
* **style-dictionary:** add tokens for alert message and warning color ([d5f59b3](https://github.com/FacioCode/design/commit/d5f59b3e6c1f8cbd423f41817b77c0e30be212a2))
* **style-dictionary:** add transparent color tokens, improve contrast for `aquamarine.70` ([9a25e05](https://github.com/FacioCode/design/commit/9a25e050fac42c7497c74caf3c3f9290da7b3215))
* **style-dictionary:** create `primaryHighContrast` and `secondary` color font tokens ([e0620be](https://github.com/FacioCode/design/commit/e0620bed2657f5b91c4bb80344748fe93a354c40))





# [1.4.0](https://github.com/FacioCode/design/compare/v1.2.0...v1.4.0) (2021-01-20)

**Note:** Version bump only for package @faciocode/style-dictionary





# [1.3.0](https://github.com/FacioCode/design/compare/v1.2.0...v1.3.0) (2021-01-20)

**Note:** Version bump only for package @faciocode/style-dictionary





# [1.2.0](https://github.com/FacioCode/design/compare/v1.1.0...v1.2.0) (2021-01-20)

**Note:** Version bump only for package @faciocode/style-dictionary





# [1.1.0](https://github.com/FacioCode/design/compare/v1.0.4...v1.1.0) (2021-01-19)


### Features

* **style-dictionary:** add Filled Input border radius token ([910a94c](https://github.com/FacioCode/design/commit/910a94ca8cfc96d6b5501101d51c8fea4ff4a8af))
* **style-dictionary:** add Link color token ([7290564](https://github.com/FacioCode/design/commit/7290564ebbb69a5e349bc45db44e95a2e3314229))





## [1.0.4](https://github.com/FacioCode/design/compare/v1.0.3...v1.0.4) (2021-01-18)

**Note:** Version bump only for package @faciocode/style-dictionary





## [1.0.3](https://github.com/FacioCode/design/compare/v1.0.2...v1.0.3) (2021-01-18)

**Note:** Version bump only for package @faciocode/style-dictionary





## [1.0.2](https://github.com/FacioCode/design/compare/v1.0.1...v1.0.2) (2021-01-18)

**Note:** Version bump only for package @faciocode/style-dictionary





## [1.0.1](https://github.com/FacioCode/design/compare/v1.0.0...v1.0.1) (2021-01-18)

**Note:** Version bump only for package @faciocode/style-dictionary





# [1.0.0](https://github.com/FacioCode/design/compare/v0.34.5...v1.0.0) (2021-01-18)

**Note:** Version bump only for package @faciocode/style-dictionary
