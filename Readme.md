# learning & repeating typescript in vanilla javascript

😉 ... repeating the basics is always a good idea. This follows the tutorial by [Maxwell](https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w). It´s actually a Academind course, but you can find the first three hour [here](https://www.youtube.com/watch?v=BwuLxPH8IDs) - the actual 15+ hours course on [Academind](https://pro.academind.com/p/understanding-typescript) costs 19$ a month or 34$ for the single course - 🤷‍♂️.

my learnings....

## 1. html inputfields

-   the ! means that I´m sure as a developer that the selected element exists, because ts can`t access the html
-   as HTMLInputElement/ HTMLButtonElement tells the ts compiler what kind of methods are available

```ts
const button = document.querySelector('button')! as HTMLButtonElement;
const input1 = document.getElementById('num1')! as HTMLInputElement;
```

## 2. Tuple

a tuple is length fixed array with specified types

```ts
type Person = {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
};
```

in the example role is a tuple, which can only have two elements. On position 0 have to be a number, on position 1 it have to be string.

## 3. Enum

a enum is an automatically enumerated global constant identifiers. It assigns labels to numbers.

```ts
enum Role { ADMIN, READ_ONLY, AUTHOR }
...
hobbies: ["Sports", "Cooking"],
role: Role.ADMIN
...
```

the enum represents something like that (because it automatically starts with 0 and increments after that)

```js
const Role = {
    ADMIN: 0,
    READ_ONLY: 1,
    AUTHOR: 2,
};
```

You can override the start-value to whatever number you like.

```ts
enum Role {
    ADMIN = 5,
    READ_ONLY,
    AUTHOR,
}
```

which is something like

```js
const Role = {
    ADMIN: 5,
    READ_ONLY: 6,
    AUTHOR: 7,
};
```

or you can assign also strings or mix it

```ts
enum Role {
    ADMIN = 5,
    READ_ONLY = 500,
    AUTHOR = 267,
}

enum Role2 {
    USER = 'user',
    GUEST = 'guest',
}

enum Food {
    MUSHROOMS = 'jammi',
    LENTILS = 1000,
}
```

## 4. union types

it`s combining different types and could also defines allowed values to pass in a function (f.e.)

```ts
type Combine = {
    input1: number | string;
    input2: 45 | 65;
    resultConversion: 'as-number' | 'as-text';
};
```

or

```ts
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
....

type Combine = {
    input1: Combinable;
    input2: 45 | 65;
    resultConverversion: ConversionDescriptor;
}
```

## 5. function as a parameter

````ts
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    ...
}
````
## 6. never type

functions, which never return anything, have this return type - f.e. error functions or infinite loops

````ts
function generateError (message: string, code: number): never {
    throw { message, errorCode: code };
    // .../*  */
}
````