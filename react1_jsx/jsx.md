# JSX (JavaScript XML):

**JSX (JavaScript XML)** is a syntax extension for JavaScript that looks like HTML but runs inside JavaScript.

## Example:
```jsx
const element = <h1 id="id099">hello world</h1>;
```

* This looks like HTML, but it’s not HTML.

* It’s also not valid JavaScript by itself — browsers can’t run it directly.

* Instead, Babel transpiles JSX into normal JavaScript that calls React.createElement.

## Why JSX exists?

Because writing UI like this is much easier to read:
```jsx
<div className="card">
  <h2>Hello, JSX!</h2>
</div>
```

vs the raw JavaScript equivalent:
```js
React.createElement(
  "div",
  { className: "card" },
  React.createElement("h2", null, "Hello, JSX!")
);
```


JSX makes React code declarative and readable.

It’s syntactic sugar for React.createElement.