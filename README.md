# Components Boilerplate

A boilerplate for developing a components system.

- [Development](#development)
  - [Install dependencies](#install-dependencies)
  - [Start the project](#start-the-project)
  - [Build](#build)
  - [Release](#release)
  - [Testing](#testing)
  - [Notes](#notes)
- [Installation](#installation)

## Development

### Install dependencies

```bash
yarn
```

### Start the project

```bash
yarn storybook
```

### Build

The package can be built with `yarn build` and will use the `vite.config.ts` config and `src/index.ts` entry point.

Everything inside the `public` folder will be included in the bundle and you can also find the final `package.json` there.

### Release

The components can be released by running the `Release` action.

The package will be pushed to the `build` branch.

### Testing

Install Playwright with the following command:

```
npx playwright install
```

You will need to run `yarn build` in the root folder and `yarn` in the `examples/react-js` folder before you start any test.

Start the test runner:

```
yarn test:e2e
```

### Notes

#### Stylelint

Any change in `.stylelintrc.json` needs to be copied to `.vscode/settings.json` for VSCode formatting to work in `.scss` files. See this [issue](https://github.com/stylelint/vscode-stylelint/issues/328).

## Installation

### As a package

```bash
yarn add components-boilerplate
```

<br/>

#### Install peer dependencies

```bash
yarn add react react-dom ariakit
```

#### Import styling

Add the following import to your `index.ts`:

```jsx
import "components-boilerplate/components-boilerplate.css";
```

#### Import a component

```jsx
import { Footer } from "components-boilerplate";

function App() {
  return (
    <footer>
      <Footer />
    </footer>
  );
}
```
