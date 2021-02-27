# Typescript

## Features

- Object-oriented programming.
- Boost your JavaScript code.
- Higher productivity.
- Powerful type system.
- Build to ES5, ES6 and more.
- Very active / Open source project.
- Regular updates.
- Growing community.
- It can prevent about 15% of bugs.
- You can use TypeScript for backend with nodejs.

## Commands

- `npm install -g typescript`: install typescript globally.
- `tsc -v`: watch the typescript version.
- `tsc file.ts`: convert file to javascript file `file.js`.
- `tsc --watch file.ts`: convert file to javascript file `file.js` dynamically.
- `tsc --init`: generate the configuration file.

## Primitive values

- Number.
- Boolean.
- String.
- Array.
- Tuples.
- Enum.
- Any: the value can have any type.
- Void: the value does not have a type, it is used in return from functions.
- Null: the value is empty or null.
- Undefined: the value has not been defined.
- Never: used in functions that does not return nothing and exceptions.
- object: not primitive value. This is not Object from JavaScript Object class.

Any is used in functions that ended, Never for infinite functions or that throw an error.

Typescript can infer the type with just the value.
