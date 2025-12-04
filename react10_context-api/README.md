# Higher Order Components
A Higher-Order Component (HOC) in React is an advanced pattern used for reusing component logic.
It’s a function that takes a component as an argument and returns a new enhanced component.
## 💡 Key Concepts

| Concept        | Explanation                                    |
| -------------- | ---------------------------------------------- |
| Pure Function  | HOC does not modify the original component     |
| Props Proxying | Passes additional or modified props            |
| Composition    | Enhances components rather than modifying them |
| Reusability    | Helps avoid duplication of logic               |

## 🧩 Simple Example:

```jsx
import React from 'react'

const Normal = ({ name, age, address }) => {
  return (
    <>
      <div>name: {name}</div>
      <div>age: {age}</div>
      <div>address: {address}</div>
    </>
  )
}

const HigherOrderComponent = (Component) => {
  return (props) => {
    return (<>
      <Component {...props} />
      <div>varified: true</div>
    </>)
  }

}

const IsVerified = HigherOrderComponent(Normal)
const App = () => {
  const isVerified = true
  return (
    <div>
      {
        isVerified ?
          <IsVerified name={'jayant'} age={21} address={'jaipur'} /> :
          <Normal name={'jayant'} age={21} address={'jaipur'} />
      }

    </div>
  )
}

export default App
```

# Controlled Component & Uncontrolled Component

## 🎮 Controlled Component:
A controlled component is a form input that React fully controls.
The `value `of the input comes from `React state`, and updates go through React.
### Example:
```jsx
import { useState } from "react";

function ControlledExample() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

```
✔ React always knows the current input value.

✔ Easy validation, conditional UI, immediate control.

## 🎯 Uncontrolled Components

An uncontrolled component stores data in the DOM itself, not in `React state`.

We typically use refs to read the value when needed.

### Example:
```jsx
import { useRef } from "react";

function UncontrolledExample() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
```
✔ Less code, better for simple forms or large forms

✖ Harder to track and validate while typing

✖ React doesn’t immediately know the value

# Lifting State Up in React

In React, “lifting state up” refers to moving state from a child component to a common parent component so that multiple children can share and synchronize that state.

Lifting state up means storing shared state in a parent component and passing it down via props—ensuring consistent and synchronized data across components.

## example

```jsx
import React, { useState } from 'react'

const Parent = () => {
  const [name, setName] = useState('')
  return (
    <div>
      <Child name={name} setName={setName}/>
      <p>from parent: {name}</p>
    </div>
  )
}

const Child = ({name, setName}) => {
  return (
    <div>
      <input type="text" value={name} onChange={e=>setName(e.target.value)} />
      <p>from child: {name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Parent/>
    </div>
  )
}

export default App
```

# Context Api

The Context API in React is a feature that allows you to share data across components without having to pass props manually through every level of the component tree (also known as prop drilling).

## 🧠 Why do we need the Context API?

Normally, to pass data from a parent to a deeply nested child, you must pass props through every component in the chain—even if those components don’t use the data. This becomes messy and hard to manage.

Context API solves this by providing a global-like state that any component can access directly.

## 🔑 Key Components of Context API

| Feature                      | Purpose                                       |
| ---------------------------- | --------------------------------------------- |
| `createContext()`      | Creates a context object                      |
| `Provider`                   | Wraps components and provides the shared data |
|`useContext()` | Allows components to access the shared data   |

## 🚀 When to Use Context API

### ✔ Global state like:

* Theme (light/dark)

* User login/auth info

* Language settings

* Shopping cart state

## Example: 

### Context.js

```js
import { createContext } from "react";

export const MyContext = createContext('this is default value')

```

### App.jsx
```jsx
import React, { useState, useContext } from 'react'
import { MyContext } from './Context'

const A = () => {
  const [name, setName] = useState('')

  return (
    <div>
      <h1>component A</h1>
      <h2>{name}</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <MyContext.Provider value={{name, setName}}>
        <B />
      </MyContext.Provider>
    </div>
  )
}

const B = () => {

  return (
    <div>
      <h1>component B</h1>
      <C />
    </div>
  )
}

const C = () => {

  return (
    <div>
      <h1>component C</h1>
      <D />
    </div>
  )
}

const D = () => {
  const {name, setName} = useContext(MyContext)

  return (
    <div>
      <h1>component D</h1>
      <h2>{name}</h2>
      <input type="text" value={name} onChange={e=>setName(e.target.value)} />
    </div>
  )
}
const App = () => {
  const data = useContext(MyContext) // this value will be default
  
  return (
    <div>
      <h2>{data}</h2>
      <A />
    </div>
  )
}

export default App
```