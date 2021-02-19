# learning-typescript

Part of my path to learn typescript, this repository follows the Online Tutorial made by [TechZ](https://www.youtube.com/channel/UC2S7KicQMgJaVY1Kjw1druQ). In this project we build a To-Do App and a Rick-and-Morty-API

Source:

-   [Video Tutorial on Youtube](https://www.youtube.com/watch?v=BnIhk4igd8I&t=8911s)

## Installation and Config

### configuration if you start from scratch

Because I start with the ready-to-go Image

```node
npx create-react-app my-app --template typescript
```

I don`t need the Setup from the tutorial 😝 ....

configuration of webpack.config.js

```js
const path = require('path');
const rules = [
    {
        test: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
    },
];

module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: { rules },
    resolve: { extensions: ['.ts', '.tsx', '.js'] },
    devServer: {
        contentBase: './',
        port: 5000,
    },
};
```

configuration of .babelrc

```json
{
    "presets": ["@babel/env", "@babel/react", "@babel/typescript"]
}
```

installation manually

```node
npm i @bable/core @bable/preset/env @bable/preset-react @bable/preset-typescript webpack webpack-cli webpack-dev-server babel-loader react react-dom @types/react @types/react-dom
```

change scripts

```json
...
    "scripts": {
        "start": "webpack-dev-server --open",
        "build": "webpack"
    }
...
```

### start with this repository

```node
git clone https://github.com/AlexisRoe/learning-typescript
cd learning-typescript
code .
```

##
