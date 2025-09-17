# The Flow
```js
jsx -> babel -> React.createElement -> react -> React element (object) -> reactDOM -> vanilla js
```
## 1. JSX
```jsx
<h1 id="id099">hello world</h1>
```

(Not valid JS — just syntax sugar for React.)

## 2. Babel
Babel transpiles JSX → plain JS:
```js
React.createElement("h1", { id: "id099" }, "hello world");
```

## 3. React
React.createElement builds a React element object (a plain JS object):
```js
{
  type: "h1",
  props: {
    id: "id099",
    children: "hello world"
  }
}
```

## 4. ReactDOM
Takes that React element object and turns it into real DOM nodes by calling vanilla JS APIs under the hood:
```js
const h1 = document.createElement("h1");
h1.id = "id099"; 
h1.textContent = "hello world";
document.getElementById("root").appendChild(h1);
```

## 5. Browser (Vanilla JS)
At the end of the day, the browser only sees this in the DOM:
```html
<h1 id="id099">hello world</h1>
```
