## 1. useEffect

useEffect is a React Hook that runs side effects in your functional component.

* Side effects = anything that affects the outside world or is asynchronous, e.g.:

  * API calls

  * Timers (setTimeout, setInterval)

  * DOM manipulations

  * Event listeners

Basic syntax:
```jsx
useEffect(() => {
  // code that runs after render
}, [dependencies]);
```

* dependencies → an array of variables the effect “listens” to.

* If a variable in the array changes, the effect runs again.

## 2. Dependency Array Behavior

The dependency array tells React when to run your effect:

| Dependency Array | Effect Runs When                                               |
| ---------------- | -------------------------------------------------------------- |
| `[]`             | Only once, **after first render** (like `componentDidMount`)   |
| `[var1, var2]`   | After first render **and every time `var1` or `var2` changes** |
| omitted          | **Every render** of the component (like `componentDidUpdate`)  |

**Example:**

```jsx
useEffect(() => {
  console.log("Effect ran!");
}, [count]); // runs whenever 'count' changes
```

## 3. State Variables and Re-rendering

State variables in React are created using useState:

```jsx
const [count, setCount] = useState(0);
```

* Changing state using setCount(newValue) triggers:

  1. Re-render of the component

  2. Effects that depend on this state (in their dependency array) will run after the render.

**Important:** Changing a state not listed in useEffect dependencies will not trigger that effect.

## 4. onChange and State Update

### 1. What is onChange?

* onChange is an event handler used in form elements like `<input>`, `<textarea>`, or `<select>`.

* It fires every time the value of the element changes (e.g., when the user types a character in an input box).

**Example:**
```jsx
<input type="text" onChange={handleChange} />
```

Here, `handleChange` is a function that will be called whenever the user types something.

### 2. How onChange Works with State

In React, inputs are often controlled components: the value of the input is tied to state.

```jsx
const [text, setText] = useState("");

<input
  type="text"
  value={text}           // controlled by state
  onChange={(e) => setText(e.target.value)} // updates state
/>
```

Step-by-step flow:

  * User types a character → onChange event triggers.

  * setText(e.target.value) updates the state variable text.

  * Updating state causes the component to re-render.

  * The input's value is updated to match the new state.

  * Any useEffect that depends on text will now run (after render).

### 3. Why It’s Important

`onChange` + `useState` allows reactive forms: the UI automatically updates with state.

Every keystroke updates the state → re-render → any dependent effect runs.

### 4. Mini Example

```jsx
function InputLogger() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Text changed:", text);
  }, [text]);

  return (
    <input
      type="text"
      value={text} 
      onChange={(e) => setText(e.target.value)} // updates state on every keystroke
    />
  );
}
```

Flow here:

Type "a" → onChange → text = "a" → re-render → useEffect logs "a"

Type "b" → onChange → text = "ab" → re-render → useEffect logs "ab"

## Key Points to Remember

* useEffect runs after render, not before.

* The dependency array controls when it runs.

* State updates trigger re-render, which may trigger useEffect.

* Avoid state updates inside useEffect that depend on that same state → infinite loops.