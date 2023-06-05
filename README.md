# 🔥Blaze ![language](https://img.shields.io/badge/language-typescript-blue.svg)

> React-Native boilerplate

Blaze is an `all-encompassing` React Native boilerplate, meticulously crafted to ignite your development process.

## 📚 Table of Contents

- [Integrations](#integrations)
- [Installation](#package-installation)
- [Usage](#rocket-usage)
- [Support](#hammer_and_wrench-support)
- [Contributing](#memo-contributing)
- [License](#scroll-license)

## 📦 Integrations

This boilerplate is powered by:

- [React Navigation](https://reactnavigation.org/).
- [React Native Paper](https://callstack.github.io/react-native-paper/).

## 📦 Installation

Before using this boilerplate, you need to check if you have `Node.js` and `NPM` installed on your computer.

To check if you have `Node.js` installed, run this command in your terminal:

```sh
node -v
```

If you get an answer like this, it means that `Node.js` is installed and you may go to the [next section](#scaffolding-your-app).

```sh
v18.16.0
```

To confirm that you have `NPM` installed you can run this command in your terminal:

```sh
npm -v
```

If you get an answer like this, it means that `Node.js` is installed and you may go to the [next section](#scaffolding-your-app).

```sh
9.5.1
```

If `Node.js` or `NPM` is not installed you can install them on [this link](https://nodejs.org/en/) or use [Node Version Manager](https://github.com/nvm-sh/nvm).

Don't forget to update `NPM` after installing `Node.js`:

```sh
npm install npm@latest -g
```

### Scaffolding your app

Install [degit](https://github.com/Rich-Harris/degit).

```sh
npm install -g degit
```

Scaffold your project into a new folder

```sh
degit https://github.com/som3aware/blaze my-app-folder
```

## 🚀 Usage

### Screens

- Define your screens under [/screens](./src/screens/).
- Follow the screen structure in [One.tsx](./src/screens/One.tsx).
- Export your screen from [/screens/index.ts](./src/screens/index.ts).

### Navigation

Add your application stack navigation screens in [AppStackNavigator.tsx](./src/navigation/AppStackNavigator.tsx)

## 🛠️ Support

Please [open an issue](https://github.com/som3aware/blaze/issues/new) for support.

## 📝 Contributing

Clone the repo and reate a branch, add commits, and [open a pull request](https://github.com/som3aware/blaze/compare/).

## 📜 License

[MIT](./LICENSE) © [Ahmed Ismail](https://github.com/som3aware)
