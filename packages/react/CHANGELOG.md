# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [13.0.0](https://github.com/FacioCode/design/compare/v12.0.4...v13.0.0) (2021-04-05)


### Bug Fixes

* **react:** fix CurrencyField controlled and error behavior ([be4cad2](https://github.com/FacioCode/design/commit/be4cad2b476029522c1d66ea7563cf6eef9adb8b))
* **react:** remove `Omit` type from `LabeledCurrency` ([bde0326](https://github.com/FacioCode/design/commit/bde0326f8c77c600efa019d1d7dc5cc6b1c42c58))


### BREAKING CHANGES

* **react:** `type` prop was removed from `CurrencyField` and, from now, it will be always `"number"`.



## [12.0.3](https://github.com/FacioCode/design/compare/v12.0.2...v12.0.3) (2021-04-01)


### Bug Fixes

* **react:** don't omit `css` prop on `CurrencyField` ([914f6bd](https://github.com/FacioCode/design/commit/914f6bd03df1d85cd23c1026ca61207882b45489))
* **react:** make `LabeledCurrency` some props optional ([216c88f](https://github.com/FacioCode/design/commit/216c88f168a8f8b4abd3ad9457963cbe05eb207d))
* **react:** set `LabeledCurrency` `aria-live` prop to `off` by default ([85deaf4](https://github.com/FacioCode/design/commit/85deaf40a3c944ce8d953bd7aaac7579e52501a0))



## [12.0.2](https://github.com/FacioCode/design/compare/v12.0.1...v12.0.2) (2021-04-01)


### Bug Fixes

* **react:** make `value` prop on `CurrencyProps` from `LabeledCurrency` ([4a53527](https://github.com/FacioCode/design/commit/4a53527dde5573f7f2ef3b4a8ee2bf6b9d82ceda))



## 12.0.1 (2021-04-01)





## [12.0.4](https://github.com/FacioCode/design/compare/v12.0.3...v12.0.4) (2021-04-01)


### Bug Fixes

* **react:** don't omit `css` prop on `CurrencyField` ([914f6bd](https://github.com/FacioCode/design/commit/914f6bd03df1d85cd23c1026ca61207882b45489))
* **react:** make `LabeledCurrency` some props optional ([216c88f](https://github.com/FacioCode/design/commit/216c88f168a8f8b4abd3ad9457963cbe05eb207d))
* **react:** remove `Omit` type from `LabeledCurrency` ([bde0326](https://github.com/FacioCode/design/commit/bde0326f8c77c600efa019d1d7dc5cc6b1c42c58))
* **react:** set `LabeledCurrency` `aria-live` prop to `off` by default ([85deaf4](https://github.com/FacioCode/design/commit/85deaf40a3c944ce8d953bd7aaac7579e52501a0))



## [12.0.2](https://github.com/FacioCode/design/compare/v12.0.1...v12.0.2) (2021-04-01)


### Bug Fixes

* **react:** make `value` prop on `CurrencyProps` from `LabeledCurrency` ([4a53527](https://github.com/FacioCode/design/commit/4a53527dde5573f7f2ef3b4a8ee2bf6b9d82ceda))



## 12.0.1 (2021-04-01)





## [12.0.3](https://github.com/FacioCode/design/compare/v12.0.2...v12.0.3) (2021-04-01)


### Bug Fixes

* **react:** don't omit `css` prop on `CurrencyField` ([914f6bd](https://github.com/FacioCode/design/commit/914f6bd03df1d85cd23c1026ca61207882b45489))
* **react:** make `LabeledCurrency` some props optional ([216c88f](https://github.com/FacioCode/design/commit/216c88f168a8f8b4abd3ad9457963cbe05eb207d))
* **react:** make `value` prop on `CurrencyProps` from `LabeledCurrency` ([4a53527](https://github.com/FacioCode/design/commit/4a53527dde5573f7f2ef3b4a8ee2bf6b9d82ceda))
* **react:** set `LabeledCurrency` `aria-live` prop to `off` by default ([85deaf4](https://github.com/FacioCode/design/commit/85deaf40a3c944ce8d953bd7aaac7579e52501a0))



## 12.0.1 (2021-04-01)





## [12.0.2](https://github.com/FacioCode/design/compare/v12.0.1...v12.0.2) (2021-04-01)


### Bug Fixes

* **react:** make `value` prop on `CurrencyProps` from `LabeledCurrency` ([4a53527](https://github.com/FacioCode/design/commit/4a53527dde5573f7f2ef3b4a8ee2bf6b9d82ceda))





## [12.0.1](https://github.com/FacioCode/design/compare/v12.0.0...v12.0.1) (2021-04-01)


### Bug Fixes

* **react:** set all `CurrencyProps` from `LabeledCurrency` to optional ([fe3243a](https://github.com/FacioCode/design/commit/fe3243aec8e7fddd705845f61a2771d27e3a628e))





# [12.0.0](https://github.com/FacioCode/design/compare/v11.0.0...v12.0.0) (2021-04-01)


### Code Refactoring

* **react:** change `LabeledCurrency` interface ([b423f66](https://github.com/FacioCode/design/commit/b423f66ee525ff50f1376c5b55e2dcab930ae5b1))


### BREAKING CHANGES

* **react:** Some properties from `LabeledCurrency` has changed. Now `CurrencyProps` must be used for `code` and `locales` properties. Extra HTML properties were removed and can be added in future versions as needed.



## [10.6.3](https://github.com/FacioCode/design/compare/v10.6.2...v10.6.3) (2021-04-01)



## 10.6.2 (2021-04-01)





# [11.0.0](https://github.com/FacioCode/design/compare/v10.6.3...v11.0.0) (2021-04-01)


### Code Refactoring

* **react:** change `LabeledCurrency` interface ([b423f66](https://github.com/FacioCode/design/commit/b423f66ee525ff50f1376c5b55e2dcab930ae5b1))


### BREAKING CHANGES

* **react:** Some properties from `LabeledCurrency` has changed. Now `CurrencyProps` must be used for `code` and `locales` properties. Extra HTML properties were removed and can be added in future versions as needed.



## 10.6.2 (2021-04-01)





## [10.6.3](https://github.com/FacioCode/design/compare/v10.6.2...v10.6.3) (2021-04-01)

**Note:** Version bump only for package @faciocode/react





## [10.6.2](https://github.com/FacioCode/design/compare/v10.6.1...v10.6.2) (2021-04-01)

**Note:** Version bump only for package @faciocode/react





## [10.6.1](https://github.com/FacioCode/design/compare/v10.6.0...v10.6.1) (2021-04-01)


### Bug Fixes

* **react:** use `Omit` from Material UI types lib ([e94ce41](https://github.com/FacioCode/design/commit/e94ce412fa83cdb37a438c630b5e73aa3ce52ac0))





# [10.6.0](https://github.com/FacioCode/design/compare/v10.5.0...v10.6.0) (2021-03-31)


### Bug Fixes

* **react:** add missing `locales` props on `LabeledCurrency` ([f2010af](https://github.com/FacioCode/design/commit/f2010af16b37254cc35fd42752b0a4804f609200))
* **react:** prevent TypeScript errors for `TextField` ([c04cec5](https://github.com/FacioCode/design/commit/c04cec5a7afe64f3cff74ddf8be236d30df4c4b7))
* **react:** remove `css` prop from `Currency` and `LabeledCurrency` components ([cfd4619](https://github.com/FacioCode/design/commit/cfd46190852a0451801abd383841ee3686d76ef6))
* **react:** use correct property name `rowsMax` for `TextField` ([4e921ae](https://github.com/FacioCode/design/commit/4e921ae720b78e33332f401c43ec10412c281bdd))


### Features

* **react:** add `aria-label` and `error` properties for `CurrencyField` ([8d97b7b](https://github.com/FacioCode/design/commit/8d97b7b13066e23a7f70ba9ea473b69f526be382))
* **react:** improve support for `error` property on `CurrencyField` ([ba6493b](https://github.com/FacioCode/design/commit/ba6493bb192e5eb8f2d698001761090936b02449))



# 10.4.0 (2021-03-31)





# [10.5.0](https://github.com/FacioCode/design/compare/v10.4.0...v10.5.0) (2021-03-31)


### Bug Fixes

* **react:** prevent TypeScript errors for `TextField` ([c04cec5](https://github.com/FacioCode/design/commit/c04cec5a7afe64f3cff74ddf8be236d30df4c4b7))
* **react:** use correct property name `rowsMax` for `TextField` ([4e921ae](https://github.com/FacioCode/design/commit/4e921ae720b78e33332f401c43ec10412c281bdd))


### Features

* **react:** add `aria-label` and `error` properties for `CurrencyField` ([8d97b7b](https://github.com/FacioCode/design/commit/8d97b7b13066e23a7f70ba9ea473b69f526be382))
* **react:** improve support for `error` property on `CurrencyField` ([ba6493b](https://github.com/FacioCode/design/commit/ba6493bb192e5eb8f2d698001761090936b02449))





# [10.4.0](https://github.com/FacioCode/design/compare/v10.3.0...v10.4.0) (2021-03-31)


### Features

* **react:** add `CurrencyField` React component ([79fbd10](https://github.com/FacioCode/design/commit/79fbd100015088f0867faa050c488e9310e792e2))
* **react:** add support to `allowRecording`, add memos ([3626e81](https://github.com/FacioCode/design/commit/3626e81b42958862669a57205e93c273d80bb0f1))





# [10.3.0](https://github.com/FacioCode/design/compare/v10.2.0...v10.3.0) (2021-03-31)


### Features

* **react:** add support to `value` prop on `Currency` ([cbe148c](https://github.com/FacioCode/design/commit/cbe148c8700489428972b3fb48a99ca1bb5f40d4))
* **react:** add support to `value` prop on `Currency` ([5fa92e5](https://github.com/FacioCode/design/commit/5fa92e5e5bb6b525f09868e1021d347948e159ee))





# [10.2.0](https://github.com/FacioCode/design/compare/v10.1.2...v10.2.0) (2021-03-30)


### Bug Fixes

* **react:** fix support to custom `className` on `Typography` ([d334602](https://github.com/FacioCode/design/commit/d334602f32879c7fea341254b80613f867bdb08c))


### Features

* **react:** add `LabeledCurrency` component ([9395447](https://github.com/FacioCode/design/commit/939544788290dced955716a11f2162060aa2e864))



# [10.1.0](https://github.com/FacioCode/design/compare/v10.0.4...v10.1.0) (2021-03-26)



## 10.0.4 (2021-03-16)





## [10.1.2](https://github.com/FacioCode/design/compare/v10.1.1...v10.1.2) (2021-03-30)

**Note:** Version bump only for package @faciocode/react





## [10.1.1](https://github.com/FacioCode/design/compare/v10.1.0...v10.1.1) (2021-03-30)

**Note:** Version bump only for package @faciocode/react





# [10.1.0](https://github.com/FacioCode/design/compare/v10.0.4...v10.1.0) (2021-03-26)

**Note:** Version bump only for package @faciocode/react





## [10.0.4](https://github.com/FacioCode/design/compare/v10.0.3...v10.0.4) (2021-03-16)

**Note:** Version bump only for package @faciocode/react





## [10.0.3](https://github.com/FacioCode/design/compare/v10.0.2...v10.0.3) (2021-03-16)

**Note:** Version bump only for package @faciocode/react





## [10.0.2](https://github.com/FacioCode/design/compare/v10.0.1...v10.0.2) (2021-03-16)

**Note:** Version bump only for package @faciocode/react





## [10.0.1](https://github.com/FacioCode/design/compare/v10.0.0...v10.0.1) (2021-03-16)

**Note:** Version bump only for package @faciocode/react





# [10.0.0](https://github.com/FacioCode/design/compare/v9.1.1...v10.0.0) (2021-03-12)

**Note:** Version bump only for package @faciocode/react





## [9.1.1](https://github.com/FacioCode/design/compare/v9.1.0...v9.1.1) (2021-03-10)

**Note:** Version bump only for package @faciocode/react





# [9.1.0](https://github.com/FacioCode/design/compare/v9.0.2...v9.1.0) (2021-03-09)


### Features

* **react:** add `Drawer` component ([327a410](https://github.com/FacioCode/design/commit/327a410ee77bf5e891257ecdd4ccf27672b60cd3))





## [9.0.2](https://github.com/FacioCode/design/compare/v9.0.1...v9.0.2) (2021-03-08)


### Bug Fixes

* **mui-themes:** update package lock file ([7f57ee2](https://github.com/FacioCode/design/commit/7f57ee24a7e1fcc11ac9273e9366a00c7c011a79))





## [9.0.1](https://github.com/FacioCode/design/compare/v9.0.0...v9.0.1) (2021-03-07)


### Bug Fixes

* **react:** make `Badge` component importable ([c795d38](https://github.com/FacioCode/design/commit/c795d3871d8070d324dd9883f21b8f76ff93226b))





# [9.0.0](https://github.com/FacioCode/design/compare/v8.2.1...v9.0.0) (2021-03-07)


### Bug Fixes

* **react:** make Chip clickable by default, remove css prop ([d6483e1](https://github.com/FacioCode/design/commit/d6483e1ca82b0b12f45d915484191a5279edf24f))
* **react:** remove `gutterBottom` prop from `AlertTitle` component ([ef63491](https://github.com/FacioCode/design/commit/ef634915fdef748c5244080adcd0b56e27435f8a))


### Code Refactoring

* **react:** rename `PayedIcon` component to `PaidIcon` ([c52efa4](https://github.com/FacioCode/design/commit/c52efa448ae0a2bd5dcac627cd942e392b852194))


### Features

* **react:** add `Badge` component ([0138155](https://github.com/FacioCode/design/commit/0138155f1a4958115649375f7347a10b548e75ca))
* **react:** add `PayedIcon` component ([0fae18b](https://github.com/FacioCode/design/commit/0fae18b45674af04185696f894fe3c146179a0c4))
* **react:** add `WarningIcon` component ([5bcd2ec](https://github.com/FacioCode/design/commit/5bcd2ec02a33a3bef34bb29b24687e973e8bb981))
* **react:** add support to `variant` prop on `Chip` component ([2c52a10](https://github.com/FacioCode/design/commit/2c52a10e2dc2d068ecad0d630c6cdd0b24e28425))
* **react:** make `PaidIcon` importable ([bb124cc](https://github.com/FacioCode/design/commit/bb124ccf1201898dc65c70e1b47c90e8789b1e45))


### BREAKING CHANGES

* **react:** `PayedIcon` component now is `PaidIcon`.



# 7.2.0 (2021-02-24)





## [8.2.1](https://github.com/FacioCode/design/compare/v8.2.0...v8.2.1) (2021-03-01)

**Note:** Version bump only for package @faciocode/react





# [8.2.0](https://github.com/FacioCode/design/compare/v8.1.0...v8.2.0) (2021-02-25)

**Note:** Version bump only for package @faciocode/react





# [8.1.0](https://github.com/FacioCode/design/compare/v8.0.0...v8.1.0) (2021-02-25)

**Note:** Version bump only for package @faciocode/react





# [8.0.0](https://github.com/FacioCode/design/compare/v7.2.0...v8.0.0) (2021-02-24)


### Bug Fixes

* **react:** remove `gutterBottom` prop from `AlertTitle` component ([ef63491](https://github.com/FacioCode/design/commit/ef634915fdef748c5244080adcd0b56e27435f8a))


### Code Refactoring

* **react:** rename `PayedIcon` component to `PaidIcon` ([c52efa4](https://github.com/FacioCode/design/commit/c52efa448ae0a2bd5dcac627cd942e392b852194))


### Features

* **react:** add `PayedIcon` component ([0fae18b](https://github.com/FacioCode/design/commit/0fae18b45674af04185696f894fe3c146179a0c4))
* **react:** add `WarningIcon` component ([5bcd2ec](https://github.com/FacioCode/design/commit/5bcd2ec02a33a3bef34bb29b24687e973e8bb981))
* **react:** make `PaidIcon` importable ([bb124cc](https://github.com/FacioCode/design/commit/bb124ccf1201898dc65c70e1b47c90e8789b1e45))


### BREAKING CHANGES

* **react:** `PayedIcon` component now is `PaidIcon`.





# [7.2.0](https://github.com/FacioCode/design/compare/v7.1.0...v7.2.0) (2021-02-24)


### Features

* **react:** add `ApproveIcon` component ([664f3b2](https://github.com/FacioCode/design/commit/664f3b2980d2b4ee45ede239b36152680398b29d))
* **react:** add `ForbiddenIcon` component ([d3c59b4](https://github.com/FacioCode/design/commit/d3c59b4f9b02e537d105977c237dcc8e2e38b164))
* **react:** add `ReceivedIcon` component ([bd581d1](https://github.com/FacioCode/design/commit/bd581d1a7d035c62100618e327f90792872ea971))
* **react:** add `WalletIcon` component ([c0da9e0](https://github.com/FacioCode/design/commit/c0da9e07173dfe1c77fb5110026f1a2d5ab071c6))
* **react:** make icons importable ([59b88f6](https://github.com/FacioCode/design/commit/59b88f60bf28b0bead06af56f6f5cff71b03a4f6))



# 7.0.0 (2021-02-24)





# [7.1.0](https://github.com/FacioCode/design/compare/v7.0.0...v7.1.0) (2021-02-24)


### Features

* **react:** add `ApproveIcon` component ([664f3b2](https://github.com/FacioCode/design/commit/664f3b2980d2b4ee45ede239b36152680398b29d))
* **react:** add `ForbiddenIcon` component ([d3c59b4](https://github.com/FacioCode/design/commit/d3c59b4f9b02e537d105977c237dcc8e2e38b164))
* **react:** add `ReceivedIcon` component ([bd581d1](https://github.com/FacioCode/design/commit/bd581d1a7d035c62100618e327f90792872ea971))
* **react:** add `WalletIcon` component ([c0da9e0](https://github.com/FacioCode/design/commit/c0da9e07173dfe1c77fb5110026f1a2d5ab071c6))
* **react:** make icons importable ([59b88f6](https://github.com/FacioCode/design/commit/59b88f60bf28b0bead06af56f6f5cff71b03a4f6))





# [7.0.0](https://github.com/FacioCode/design/compare/v6.10.0...v7.0.0) (2021-02-24)


### Features

* **react:** add `FormControlLabel` and `FormGroup` components ([5354e81](https://github.com/FacioCode/design/commit/5354e8176049bb64d76a39a9742a0043380cfe90))





# [6.10.0](https://github.com/FacioCode/design/compare/v6.9.1...v6.10.0) (2021-02-22)


### Features

* **react:** add `CloseButton` component ([9727057](https://github.com/FacioCode/design/commit/9727057c7bf5854b10223e6780be63585215b6b7))
* **react:** add `Tooltip` component ([80b3dc8](https://github.com/FacioCode/design/commit/80b3dc8c75d6689b027fe846f310c4cce6e25e57))
* **react:** add improved support to `CloseButton` on `Dialog` ([fc63da0](https://github.com/FacioCode/design/commit/fc63da0eeb1d0f4af8733d787c3bcf8e5250366e))
* **react:** make `CloseButton` and `Tooltip` importable ([ad23a66](https://github.com/FacioCode/design/commit/ad23a6684a591c049cd6b1f7c49b8bb55a8433a3))





## [6.9.1](https://github.com/FacioCode/design/compare/v6.9.0...v6.9.1) (2021-02-19)


### Bug Fixes

* **react:** prevent type errors when using `css` prop ([68f6266](https://github.com/FacioCode/design/commit/68f626650815b2b5a95fc80a77d168ab841b09ec))





# [6.9.0](https://github.com/FacioCode/design/compare/v6.8.0...v6.9.0) (2021-02-19)


### Bug Fixes

* **react:** change `DialogTitle` typography variant to `headline3` ([358e1dc](https://github.com/FacioCode/design/commit/358e1dc6b3c0b4eac761361d21d0deef75329e20))
* **react:** prevent type errors with `SvgIcon` ([16dc381](https://github.com/FacioCode/design/commit/16dc381c8de8eb07e2b18b8d5a760b063e18726f))
* **react:** set correct color for `DialogContentText` component ([940b2c9](https://github.com/FacioCode/design/commit/940b2c99e50bdd15384ef4dbbc74e6fc49792071))


### Features

* **react:** add `CloseButton` to `Dialog` ([c0611cd](https://github.com/FacioCode/design/commit/c0611cd9713b37e621ae3e9d06dead5861f7fdda))
* **react:** add `CloseIcon` and `WhatsAppIcon` ([eb0e9f2](https://github.com/FacioCode/design/commit/eb0e9f20fff74d3f18b24bb1f5fcdb994d44738f))
* **react:** add missing props to `SvgIcon` ([427d3b8](https://github.com/FacioCode/design/commit/427d3b83c493f9d7722a7304e13a5abd0579179c))



# 6.7.0 (2021-02-15)





# [6.8.0](https://github.com/FacioCode/design/compare/v6.7.0...v6.8.0) (2021-02-18)


### Bug Fixes

* **react:** change `DialogTitle` typography variant to `headline3` ([358e1dc](https://github.com/FacioCode/design/commit/358e1dc6b3c0b4eac761361d21d0deef75329e20))
* **react:** set correct color for `DialogContentText` component ([940b2c9](https://github.com/FacioCode/design/commit/940b2c99e50bdd15384ef4dbbc74e6fc49792071))


### Features

* **react:** add `CloseIcon` and `WhatsAppIcon` ([eb0e9f2](https://github.com/FacioCode/design/commit/eb0e9f20fff74d3f18b24bb1f5fcdb994d44738f))
* **react:** add missing props to `SvgIcon` ([427d3b8](https://github.com/FacioCode/design/commit/427d3b83c493f9d7722a7304e13a5abd0579179c))





# [6.7.0](https://github.com/FacioCode/design/compare/v6.6.2...v6.7.0) (2021-02-15)

**Note:** Version bump only for package @faciocode/react





## [6.6.2](https://github.com/FacioCode/design/compare/v6.6.1...v6.6.2) (2021-02-13)


### Bug Fixes

* **react:** add support to `null` types on `Currency` and `Time` components ([414eb70](https://github.com/FacioCode/design/commit/414eb70e332a8540618940000eedf65efe3d9c52))





## [6.6.1](https://github.com/FacioCode/design/compare/v6.6.0...v6.6.1) (2021-02-13)


### Bug Fixes

* **react:** make `children` prop optional on `Currency` and `Time` ([adc767a](https://github.com/FacioCode/design/commit/adc767abf00f20e5481011950bb43b2bacdb65a0))





# [6.6.0](https://github.com/FacioCode/design/compare/v6.5.0...v6.6.0) (2021-02-12)


### Bug Fixes

* **react:** change `ScopedCssBaseline` export strategy ([6548d95](https://github.com/FacioCode/design/commit/6548d9588fe40a7c873ef554c2675dc0d87551e9))


### Features

* **react:** add `DataGrid` component ([04ff424](https://github.com/FacioCode/design/commit/04ff424770614d4d696e18f2f36a2029b6a3e711))
* **react:** add `ScopedCssBaseline` component ([5a520c4](https://github.com/FacioCode/design/commit/5a520c4d9aba9b65d77d055065ad542dc7ce5d4d))


### Reverts

* **react:** remove `DataGrid` component ([f226a12](https://github.com/FacioCode/design/commit/f226a12d9c332dff3949fd95148ff3b6cbe3ef86))
* **react:** use `CssBaseline` again ([c5c0295](https://github.com/FacioCode/design/commit/c5c0295d7d3bba4e98ed89504f8a03836b2ec2fd))



# [6.4.0](https://github.com/FacioCode/design/compare/v6.3.0...v6.4.0) (2021-02-10)


### Features

* **react:** add `ServerStyleSheets` ([1613499](https://github.com/FacioCode/design/commit/1613499bc52aa93b881adbe81775b831463acd07))



# 6.3.0 (2021-02-10)





# [6.5.0](https://github.com/FacioCode/design/compare/v6.4.0...v6.5.0) (2021-02-12)


### Bug Fixes

* **react:** change `ScopedCssBaseline` export strategy ([6548d95](https://github.com/FacioCode/design/commit/6548d9588fe40a7c873ef554c2675dc0d87551e9))


### Features

* **react:** add `DataGrid` component ([04ff424](https://github.com/FacioCode/design/commit/04ff424770614d4d696e18f2f36a2029b6a3e711))
* **react:** add `ScopedCssBaseline` component ([5a520c4](https://github.com/FacioCode/design/commit/5a520c4d9aba9b65d77d055065ad542dc7ce5d4d))
* **react:** add `ServerStyleSheets` ([1613499](https://github.com/FacioCode/design/commit/1613499bc52aa93b881adbe81775b831463acd07))


### Reverts

* **react:** remove `DataGrid` component ([f226a12](https://github.com/FacioCode/design/commit/f226a12d9c332dff3949fd95148ff3b6cbe3ef86))
* **react:** use `CssBaseline` again ([c5c0295](https://github.com/FacioCode/design/commit/c5c0295d7d3bba4e98ed89504f8a03836b2ec2fd))



# 6.3.0 (2021-02-10)





# [6.4.0](https://github.com/FacioCode/design/compare/v6.3.0...v6.4.0) (2021-02-10)


### Features

* **react:** add `ServerStyleSheets` ([1613499](https://github.com/FacioCode/design/commit/1613499bc52aa93b881adbe81775b831463acd07))





# [6.3.0](https://github.com/FacioCode/design/compare/v6.2.6...v6.3.0) (2021-02-10)


### Features

* **react:** make `Dialog` use `fullScreen` at mobile devices ([e93e08b](https://github.com/FacioCode/design/commit/e93e08b191d6dcf4ff25a4cccdd37cd40b1a2430))





## [6.2.6](https://github.com/FacioCode/design/compare/v6.2.5...v6.2.6) (2021-02-10)

**Note:** Version bump only for package @faciocode/react





## [6.2.5](https://github.com/FacioCode/design/compare/v6.2.4...v6.2.5) (2021-02-09)


### Bug Fixes

* **react:** prevent type errors with `DialogTitle` component ([eeab1ec](https://github.com/FacioCode/design/commit/eeab1ec342613b3fc34ac618aa2fe93008976bd8))



## [6.2.2](https://github.com/FacioCode/design/compare/v6.2.1...v6.2.2) (2021-02-09)





## [6.2.4](https://github.com/FacioCode/design/compare/v6.2.3...v6.2.4) (2021-02-09)

**Note:** Version bump only for package @faciocode/react





## [6.2.3](https://github.com/FacioCode/design/compare/v6.2.2...v6.2.3) (2021-02-09)

**Note:** Version bump only for package @faciocode/react





## [6.2.2](https://github.com/FacioCode/design/compare/v6.2.1...v6.2.2) (2021-02-09)

**Note:** Version bump only for package @faciocode/react





## [6.2.1](https://github.com/FacioCode/design/compare/v6.2.0...v6.2.1) (2021-02-09)

**Note:** Version bump only for package @faciocode/react





# [6.2.0](https://github.com/FacioCode/design/compare/v6.1.1...v6.2.0) (2021-02-09)


### Features

* **react:** add `Popover` component ([b20e669](https://github.com/FacioCode/design/commit/b20e669e4f059aaf3879f1b74b80caff2c9bfa7b))





## [6.1.1](https://github.com/FacioCode/design/compare/v6.1.0...v6.1.1) (2021-02-08)


### Bug Fixes

* **react:** prevent type errors when using `Skeleton` component ([eaf3c21](https://github.com/FacioCode/design/commit/eaf3c211149025f4f3cbf78224ff453e39354c87))





# [6.1.0](https://github.com/FacioCode/design/compare/v6.0.0...v6.1.0) (2021-02-07)


### Features

* **react:** add `LinearProgress` and `Skeleton` components ([affb7b4](https://github.com/FacioCode/design/commit/affb7b4bcae41641e326d83790749cfa89d06288))
* **react:** add `LinearProgress` component ([4938749](https://github.com/FacioCode/design/commit/4938749973d18aaa1545a988c55ea2d42d4aa29b))
* **react:** add `Skeleton` component ([bc45f96](https://github.com/FacioCode/design/commit/bc45f9645b35ec568c012b373fb74761879b3c7b))
* **react:** add support to `loading` prop on `Typography` ([cf190ec](https://github.com/FacioCode/design/commit/cf190ecadd809ae4a9e402f392623a77c6007e0e))





# [6.0.0](https://github.com/FacioCode/design/compare/v5.1.4...v6.0.0) (2021-02-07)


### Bug Fixes

* **react:** prevent `BottomSheet` from being default exported at root ([d99b7de](https://github.com/FacioCode/design/commit/d99b7de5e1e5e7b32f99681f2762638d274c7b4a))


### Features

* **react:** add `useMediaQuery` and `useTheme` hooks ([8321787](https://github.com/FacioCode/design/commit/83217874e5e2fe5afeded3d711a153e79b64d74c))
* **react:** add support to `color` prop on `Container` ([93223d9](https://github.com/FacioCode/design/commit/93223d91ba0e300cd01410e5d7a9836e6944898f))
* **react:** add support to `outlined` prop on `Card` ([9afe9a8](https://github.com/FacioCode/design/commit/9afe9a8e84aed057c982521069d4583ed785791d))
* **react:** add support to `outlined` prop on `Paper` ([a2da42a](https://github.com/FacioCode/design/commit/a2da42a38acc911afa89ce91138f4871eb06db04))
* **react:** change table size to `"small"` at mobile devices ([c9401da](https://github.com/FacioCode/design/commit/c9401da638c9d35725e395b48fd825f2394394c0))



## 5.1.3 (2021-02-05)





## [5.1.4](https://github.com/FacioCode/design/compare/v5.1.3...v5.1.4) (2021-02-05)


### Bug Fixes

* **react:** prevent `BottomSheet` from being default exported at root ([d99b7de](https://github.com/FacioCode/design/commit/d99b7de5e1e5e7b32f99681f2762638d274c7b4a))





## [5.1.3](https://github.com/FacioCode/design/compare/v5.1.2...v5.1.3) (2021-02-05)

**Note:** Version bump only for package @faciocode/react





## [5.1.2](https://github.com/FacioCode/design/compare/v5.1.1...v5.1.2) (2021-02-05)


### Bug Fixes

* **react:** prevent type errors when using `Snackbar` props ([f2866c0](https://github.com/FacioCode/design/commit/f2866c02fa89bb5cad30a91c5d098ab723c4b98f))





## [5.1.1](https://github.com/FacioCode/design/compare/v5.1.0...v5.1.1) (2021-02-04)

**Note:** Version bump only for package @faciocode/react





# [5.1.0](https://github.com/FacioCode/design/compare/v5.0.1...v5.1.0) (2021-02-04)

**Note:** Version bump only for package @faciocode/react





## [5.0.1](https://github.com/FacioCode/design/compare/v5.0.0...v5.0.1) (2021-02-04)

**Note:** Version bump only for package @faciocode/react





# [5.0.0](https://github.com/FacioCode/design/compare/v4.4.0...v5.0.0) (2021-02-03)


### Bug Fixes

* **react:** add missing support to `component` prop on `Tab*` components ([ee0f0bf](https://github.com/FacioCode/design/commit/ee0f0bf3022d219be982edc42b4af3dbe843b406))
* **react:** remove CSS direct import from `CssBaseline` ([c0fceb9](https://github.com/FacioCode/design/commit/c0fceb9a0e1dbf17dcae86e3387e732b73c61558))


### Features

* **react:** add `Tab*` components ([1dfb05a](https://github.com/FacioCode/design/commit/1dfb05a3a423748adfbe8b30f992717d8322cf6c))
* **react:** add `Toolbar` component ([9304e4f](https://github.com/FacioCode/design/commit/9304e4fd5bb0c2a7c964a27f20d7b660811f38a7))
* **react:** make `Tab*` and `Toolbar` components importable ([6389c8f](https://github.com/FacioCode/design/commit/6389c8f7a3658f8b5db9853b0dac5a3a3ec62df9))


### BREAKING CHANGES

* **react:** To ensure support for frameworks like Next.js, we will no longer export CSS with custom properties directly when using the CssBaseline component. If you need to use it, please copy the CSS for your project and import it directly.



# 4.3.0 (2021-01-30)





# [4.4.0](https://github.com/FacioCode/design/compare/v4.3.2...v4.4.0) (2021-02-03)


### Features

* **react:** add `Tab*` components ([5863f4c](https://github.com/FacioCode/design/commit/5863f4c28b92d2e6c20d24df06c927c4709dd86f))
* **react:** add `Toolbar` component ([f483129](https://github.com/FacioCode/design/commit/f4831293c50f1d24ec02f38cbc49270f2dd9138f))
* **react:** make `Tab*` and `Toolbar` components importable ([e4f7def](https://github.com/FacioCode/design/commit/e4f7defba41c94824d5e26e21d722f6d1809cf1e))





## [4.3.2](https://github.com/FacioCode/design/compare/v4.3.1...v4.3.2) (2021-02-03)

**Note:** Version bump only for package @faciocode/react





## [4.3.1](https://github.com/FacioCode/design/compare/v4.3.0...v4.3.1) (2021-02-02)

**Note:** Version bump only for package @faciocode/react





# [4.3.0](https://github.com/FacioCode/design/compare/v4.2.0...v4.3.0) (2021-01-30)


### Features

* **react:** add `Switch` component ([ebd0812](https://github.com/FacioCode/design/commit/ebd081243182eb1109dca14264374cfc90befe68))
* **react:** add support to value `"1"` on `Paper` `elevation` prop ([23a7ae3](https://github.com/FacioCode/design/commit/23a7ae31ceaaf8ede1b41bf241f63602d2658d48))





# [4.2.0](https://github.com/FacioCode/design/compare/v4.1.2...v4.2.0) (2021-01-30)


### Bug Fixes

* **react:** add missing support to size prop on ButtonGroup ([ef25468](https://github.com/FacioCode/design/commit/ef254688db8228a79cc545e96f60124c8b2c947c))
* **react:** make `ButtonGroup` component importable ([569f876](https://github.com/FacioCode/design/commit/569f876f474da6b60e7ef48b5b33b55c938f5449))
* **react:** make size property optional on `ButtonGroup` ([b768046](https://github.com/FacioCode/design/commit/b7680462886f4cfc78d2bd6cac6d3a72328d81ad))
* **react:** prevent type errors when using `component` prop from `Container` ([06f51b8](https://github.com/FacioCode/design/commit/06f51b8e8a4eb1091b98295d4e5e8614fdcdd52f))



# 4.1.0 (2021-01-29)





## [4.1.2](https://github.com/FacioCode/design/compare/v4.1.1...v4.1.2) (2021-01-29)

**Note:** Version bump only for package @faciocode/react





## [4.1.1](https://github.com/FacioCode/design/compare/v4.1.0...v4.1.1) (2021-01-29)


### Bug Fixes

* **react:** make `ButtonGroup` component importable ([569f876](https://github.com/FacioCode/design/commit/569f876f474da6b60e7ef48b5b33b55c938f5449))
* **react:** make size property optional on `ButtonGroup` ([b768046](https://github.com/FacioCode/design/commit/b7680462886f4cfc78d2bd6cac6d3a72328d81ad))





# [4.1.0](https://github.com/FacioCode/design/compare/v4.0.2...v4.1.0) (2021-01-29)


### Bug Fixes

* **react:** fix/improve styling for large `TextField`s ([88b0f7a](https://github.com/FacioCode/design/commit/88b0f7ab2213c78834efaea77da28d1a9e65d404))
* **react:** prevent type error with `Currency` `css` prop ([2c7b730](https://github.com/FacioCode/design/commit/2c7b730394f73dab4cb4b9869e5e54fc25b9de7b))
* **react:** prevent type errors with `TableContainer` `component` prop ([2184f11](https://github.com/FacioCode/design/commit/2184f11d32a8f42de1c27701617b0f57abf086ae))


### Features

* **react:** add `ButtonGroup` component ([5970157](https://github.com/FacioCode/design/commit/5970157412aaf66d2867ac057e5fdb994905d8c8))
* **react:** add `Container` component ([3877ae2](https://github.com/FacioCode/design/commit/3877ae26401ede5bf66ff41766425044839bb0f4))
* **react:** add `FormHelperText` component ([b8047c5](https://github.com/FacioCode/design/commit/b8047c59fe51204e97ed7605c3108e6db309fe52))
* **react:** add `InputLabel` component ([2824bee](https://github.com/FacioCode/design/commit/2824beef7edccb2830cdfcba45f37a71018dd18c))
* **react:** add `Time` component ([5e96d3a](https://github.com/FacioCode/design/commit/5e96d3aea81355ee3c402ea748800cef8230e8b4))
* **react:** add support for `size` prop on `InputBase` ([191fd42](https://github.com/FacioCode/design/commit/191fd427739234e4ea65dae0a8ca4df657cf6dc9))
* **react:** add support to `size` property on `InputBase` component ([f46b258](https://github.com/FacioCode/design/commit/f46b25840d1868d0f7a99c6a3d458bca1e545346))
* **react:** add support to named import for some components ([c0769cd](https://github.com/FacioCode/design/commit/c0769cd86792f24018204d00858802410a3cf1b8))





## [4.0.2](https://github.com/FacioCode/design/compare/v4.0.1...v4.0.2) (2021-01-28)

**Note:** Version bump only for package @faciocode/react





## [4.0.1](https://github.com/FacioCode/design/compare/v4.0.0...v4.0.1) (2021-01-27)

**Note:** Version bump only for package @faciocode/react





# [4.0.0](https://github.com/FacioCode/design/compare/v3.2.1...v4.0.0) (2021-01-27)

**Note:** Version bump only for package @faciocode/react





## [3.2.1](https://github.com/FacioCode/design/compare/v3.2.0...v3.2.1) (2021-01-27)

**Note:** Version bump only for package @faciocode/react





# [3.2.0](https://github.com/FacioCode/design/compare/v3.1.3...v3.2.0) (2021-01-27)


### Features

* **react:** add new "large" `size` property for `TextField` ([b639f40](https://github.com/FacioCode/design/commit/b639f40b2c3ff86b516fca184c3948f76f5d6300))



## [3.1.2](https://github.com/FacioCode/design/compare/v3.1.1...v3.1.2) (2021-01-26)





## [3.1.3](https://github.com/FacioCode/design/compare/v3.1.2...v3.1.3) (2021-01-26)

**Note:** Version bump only for package @faciocode/react





## [3.1.2](https://github.com/FacioCode/design/compare/v3.1.1...v3.1.2) (2021-01-26)

**Note:** Version bump only for package @faciocode/react





## [3.1.1](https://github.com/FacioCode/design/compare/v3.1.0...v3.1.1) (2021-01-26)

**Note:** Version bump only for package @faciocode/react





# [3.1.0](https://github.com/FacioCode/design/compare/v3.0.1...v3.1.0) (2021-01-26)

**Note:** Version bump only for package @faciocode/react





## [3.0.1](https://github.com/FacioCode/design/compare/v3.0.0...v3.0.1) (2021-01-26)

**Note:** Version bump only for package @faciocode/react





# [3.0.0](https://github.com/FacioCode/design/compare/v2.1.1...v3.0.0) (2021-01-26)


### Bug Fixes

* **react:** prevent using ripple props on `Chip` ([b238e6b](https://github.com/FacioCode/design/commit/b238e6b1f57b32b946cd8d92d1fdb453d168719d))
* **react:** remove invalid `xmlns:xlink` prop from `WhatsAppIcon` ([ac67336](https://github.com/FacioCode/design/commit/ac67336bee40e64a3ceaf7197a2e289e5de91d0b))


### Features

* **react:** add `AppBar` component ([105a987](https://github.com/FacioCode/design/commit/105a9875ccaedb14140bc0886b25598132665ce8))
* **react:** add support to `flexGrow` prop on `Typography` ([9572e84](https://github.com/FacioCode/design/commit/9572e84c3da517ceb5d8dc719708f9aeadd3948b))
* **react storybook:** add support to changing viewport ([eb36b9f](https://github.com/FacioCode/design/commit/eb36b9f7cf3bf2b4446bcd93c791ca204d2875b9))



# 2.1.0 (2021-01-23)





## [2.1.1](https://github.com/FacioCode/design/compare/v2.1.0...v2.1.1) (2021-01-24)


### Bug Fixes

* **react:** prevent using ripple props on `Chip` ([b238e6b](https://github.com/FacioCode/design/commit/b238e6b1f57b32b946cd8d92d1fdb453d168719d))
* **react:** remove invalid `xmlns:xlink` prop from `WhatsAppIcon` ([ac67336](https://github.com/FacioCode/design/commit/ac67336bee40e64a3ceaf7197a2e289e5de91d0b))





# [2.1.0](https://github.com/FacioCode/design/compare/v2.0.2...v2.1.0) (2021-01-23)


### Features

* **react:** add `BottomSheet` component ([70d6b83](https://github.com/FacioCode/design/commit/70d6b83198927402096eb9609eed8288aa731321))
* **react:** add `elevation` and `variant` props for `Alert` ([b1981db](https://github.com/FacioCode/design/commit/b1981dba6151e7e76b317e4d679267c1be224187))
* **react:** add `elevation` property to `Paper` utility component ([8b9fe2b](https://github.com/FacioCode/design/commit/8b9fe2b4adff17b8fadde9d4936fb532719bbf85))
* **react:** add Snackbar component ([2dbc0c3](https://github.com/FacioCode/design/commit/2dbc0c372911c885a5f0336fa62317c3823893ba))
* **react:** add support to `color` variant for `LinkButton` ([b6d54b8](https://github.com/FacioCode/design/commit/b6d54b82cfc464e2f6119208c95d14fc07067cdc))
* **react:** make `BottomSheet` and `Snackbar` components importable ([509a3e4](https://github.com/FacioCode/design/commit/509a3e4ab70c0345caaaed203a01ba4f96883bef))



## [2.0.1](https://github.com/FacioCode/design/compare/v2.0.0...v2.0.1) (2021-01-21)


### Bug Fixes

* **react:** add missing `component` prop for `Link` ([9331860](https://github.com/FacioCode/design/commit/93318607669c0a50b164f11aea4d7dff3c763c61))



# 2.0.0 (2021-01-21)





## [2.0.2](https://github.com/FacioCode/design/compare/v2.0.1...v2.0.2) (2021-01-21)


### Bug Fixes

* **react:** add missing `component` prop for `Link` ([9331860](https://github.com/FacioCode/design/commit/93318607669c0a50b164f11aea4d7dff3c763c61))



# 2.0.0 (2021-01-21)





## [2.0.1](https://github.com/FacioCode/design/compare/v2.0.0...v2.0.1) (2021-01-21)


### Bug Fixes

* **react:** add missing `component` prop for `Link` ([9331860](https://github.com/FacioCode/design/commit/93318607669c0a50b164f11aea4d7dff3c763c61))





# [2.0.0](https://github.com/FacioCode/design/compare/v1.5.0...v2.0.0) (2021-01-21)


### Features

* **react:** add new `SvgIcon` component ([8b6caa3](https://github.com/FacioCode/design/commit/8b6caa325433b4f13014b916e8c88bea2b2722bc))
* **react:** add new `WhatsAppIcon` component ([2263d00](https://github.com/FacioCode/design/commit/2263d006046e20f863a33eea2cf731a9660d79b0))
* **react:** add styles to IconButton component ([b25a477](https://github.com/FacioCode/design/commit/b25a477c4d4951e1cd01c595d6f589c8df3b7395))
* **react:** add support to color prop for `Link` component ([37ee55b](https://github.com/FacioCode/design/commit/37ee55b32cc04e37202b20edfcb2cd2fc00c7b95))





# [1.5.0](https://github.com/FacioCode/design/compare/v1.4.0...v1.5.0) (2021-01-20)


### Features

* **react:** add AlertTitle component ([4c773fb](https://github.com/FacioCode/design/commit/4c773fb8aee875b97b0175b25c145776c35da170))
* **react:** add support to `inverse` color on `Typography` color prop ([060ef26](https://github.com/FacioCode/design/commit/060ef2659894ac59bc4f754e4aa12e595c370f21))
* **react storybook:** add and configure backgrounds addon ([dd68b09](https://github.com/FacioCode/design/commit/dd68b09c35efb08877fc0272ef2a74101cff5a0b))





# [1.4.0](https://github.com/FacioCode/design/compare/v1.2.0...v1.4.0) (2021-01-20)

**Note:** Version bump only for package @faciocode/react





# [1.3.0](https://github.com/FacioCode/design/compare/v1.2.0...v1.3.0) (2021-01-20)

**Note:** Version bump only for package @faciocode/react





# [1.2.0](https://github.com/FacioCode/design/compare/v1.1.0...v1.2.0) (2021-01-20)

**Note:** Version bump only for package @faciocode/react





# [1.1.0](https://github.com/FacioCode/design/compare/v1.0.4...v1.1.0) (2021-01-19)


### Features

* **react:** add Link component ([2162dd9](https://github.com/FacioCode/design/commit/2162dd92b3a293e68b4271f53e3982fa94f0d37b))





## [1.0.4](https://github.com/FacioCode/design/compare/v1.0.3...v1.0.4) (2021-01-18)

**Note:** Version bump only for package @faciocode/react





## [1.0.3](https://github.com/FacioCode/design/compare/v1.0.2...v1.0.3) (2021-01-18)

**Note:** Version bump only for package @faciocode/react





## [1.0.2](https://github.com/FacioCode/design/compare/v1.0.1...v1.0.2) (2021-01-18)

**Note:** Version bump only for package @faciocode/react





## [1.0.1](https://github.com/FacioCode/design/compare/v1.0.0...v1.0.1) (2021-01-18)


### Bug Fixes

* **react:** prevent TypeScript errors when importing types ([37d99d3](https://github.com/FacioCode/design/commit/37d99d349c3761a85b00dc3206881c8ff33dcc8b))





# [1.0.0](https://github.com/FacioCode/design/compare/v0.34.5...v1.0.0) (2021-01-18)

**Note:** Version bump only for package @faciocode/react
