In React, props (short for properties) are a way of passing data from a parent component to a child component. They are read-only and help make components reusable and dynamic.

Think of props like function arguments, and components like functions:

* A parent component provides data (props) to a child component.

* The child component receives props and uses them to render UI.

```jsx
// Child Component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Parent Component
function App() {
  return <Greeting name="Alice" />;
}
```
In simple words,
* A React component is just like a JavaScript function.

* Props are like the arguments you pass into a function. 