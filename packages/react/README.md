# Facio Design System components for React

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![npm package](https://img.shields.io/npm/v/@faciocode/react/latest.svg)](https://www.npmjs.com/package/@faciocode/react)

## 

### Getting started

Install and get started with Facio Design System components for React for web applications.

#### 1. How to install

If your project uses `react` and `react-dom` version `16.14.0` or higher, run:

```shell script
npm i --save @faciocode/react
```

The [`@faciocode/react` npm package](https://www.npmjs.com/package/@faciocode/react) installs all Facio Design System UI components for React that you need.

This command will use the latest stable release. Please, always use `latest` distribution channel.

##### Not a React-based project?

Install our style tokens separately:

```shell script
npm i --save @faciocode/styles
```

#### 2. How to load the fonts

This package does not provide "Open Sans" font, only its font family names.

Load the Open Sans font with `400`, `600`, `700` and `800` font weights:

```html
<link href="https://fonts.gstatic.com"
      rel="preconnect" />
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap"
      rel="stylesheet">
```

#### 3. How to use

A quick example to get you started:

(Note that we enclose all your application in a `ThemeProvider` component)

```jsx
import {
  CssBaseline,
  ThemeProvider
} from "@faciocode/react";

export const App = () => {
  <ThemeProvider>
    <CssBaseline />
    <ContainedButton color={"brand"}>
      Hello Button
    </ContainedButton>
  </ThemeProvider>
} 
```

Check our [Design System Storybook](http://storybook.facio.dev/) for all React components.

This package only works fine with the use of `<ThemeProvider />`, **essential** for applying styles correctly.

Please do not try to override Facio Design System theme palette or another style tokens. Use the Design System themes and components as-is.

### Additional information

- Please note the package peer dependencies `react >= 16.14.0` and `react-dom >= 16.14.0`;
- We recommend at least LTS Node version (`v14.15.4+`);
- If your project uses TypeScript, we need TypeScript `4.1.2` at least;

#### Bundled in this package

Installing `@faciocode/react` will also install the following packages:

- `@faciocode/mui-styles`
- `@faciocode/styles`
- `@material-ui/core`
- Other dependencies for styling.

You don't need to install them separately to use the Design System.

### Questions?

For how-to questions and other issues, please use the [issues section on our GitHub repo](https://github.com/faciocode/design/issues).

### Changelog

Just upgraded? Please read the [Changelog](https://github.com/FacioCode/design/blob/main/packages/react/CHANGELOG.md).
