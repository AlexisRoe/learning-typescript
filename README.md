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

## To-Do-List

First project to learn typescript in a react app is a good old To-Do-List

Here some learnings from that

### 1. JSX.Element

a component, which returns jsx is called "JSX:Element" for the return value

### 2. useState

the useState-Hook will be defined with a generic useState<string> for example. This generic is defined in the @types/react. The generic defines the default value, which will be stored in the state or returned by the function (set...).

Another way of definition is - It means the state have to be an array and each element of the array is defined by the interface "ToDo"

````tsx

interface ToDo {
    text: string,
    complete: boolean,
}

...

const [todos, setTodos] = useState<ToDo[]>([])
````

### 2. FormElements

A submit event of a form is definded as
`````tsx
type FormElem = React.FormEvent<HTMLFormElement>;
...
const handleSubmit = (event: FormElem): void => {
        event.preventDefault();
        setValue("");
    }
````

And a onChange event of an inputfield is defined as
````tsx
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
...
const handleChange = (event: ChangeEvent): void => {
        setValue(event.target.value)
    }
`````