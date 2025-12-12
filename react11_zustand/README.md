# Zustand (State Management Library)
---

### **What is Zustand?**

Zustand is a **small, fast, and scalable state management library for React**.
It allows you to manage global state without the boilerplate of Redux, Context API, or other heavier solutions.

Key points:

* Very lightweight (~1 KB gzipped).
* No boilerplate code.
* Works well with both React and React Native.
* Supports middlewares, like persistence, logging, and devtools.

---

### **Basic Example**

1. **Install Zustand:**

```bash
npm install zustand
```


2. **Create a store:**

```javascript
import { create } from "zustand";

export const useMyStore = create((set)=>({
    count: 0, 
    increment: () => set((state)=>({count: state.count + 1})),
    decrement: () => set((state)=>({count: state.count - 1})),
    name: '',
    setName: (value) => set(()=>({name: value}))
}))
```

3. **Use the store in a component:**

```javascript
import { useMyStore } from "./app/useMyStore"

function App() {
  const { count, increment, decrement } = useMyStore()
  // we can also use this technique for getting action from store (better for preventing unnecessary re-render)
  const name = useMyStore((state) => state.name)
  const setName = useMyStore((state) => state.setName)

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>

      <div>name: {name}</div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}

export default App
```

✅ That’s it! No reducers, no `useReducer`, no context providers—just simple and direct state management.

---

### **Why Use Zustand?**

* **Simpler than Redux**: No actions or reducers needed.
* **Efficient**: Only components using a slice of the state re-render.
* **Flexible**: Works for both local and global state.



### 1️⃣ **`create()`**

* This is the main function from Zustand that **creates a store**.
* You pass it a function (often called the “store initializer”) that defines your state and actions.
* Returns a **hook** (usually named `useStore`) that you can use in React components.

**Example:**

```javascript
import create from 'zustand';

const useStore = create((set, get) => ({
  count: 0,
  increase: () => set({ count: get().count + 1 })
}));
```

* Here, `create` gives us a `useStore` hook.
* `set` and `get` are provided to manage and access the store.

---

### 2️⃣ **`set()`**

* `set` is a function used to **update the state** in the store.
* It takes an **object** or a **function** that returns an object representing the new state.

**Examples:**

**Using an object:**

```javascript
set({ count: 5 }); // sets count to 5
```

**Using a function (recommended for updates based on current state):**

```javascript
set((state) => ({ count: state.count + 1 })); 
```

* `state` here is the **current state** of the store.

---

### 3️⃣ **`get()`**

* `get` is a function that allows you to **read the current state** inside your store.
* Often used inside actions to get the latest state before updating it.

**Example:**

```javascript
increase: () => {
  const current = get().count;  // get current count
  set({ count: current + 1 });  // update it
}
```

* Useful if you want the action to depend on the current value of state.

---

### 4️⃣ **`state`**

* `state` is **just a reference to the current state object**, usually available inside the `set` function when you pass a callback.
* Example:

```javascript
set((state) => ({ count: state.count + 1 }));
```

* Here, `state` is the **current store state**, and you return a new partial state to update.

---

### ✅ Putting all together

* `create()` → creates the store.
* `set()` → updates the state.
* `get()` → reads the current state.
* `state` → a snapshot of current state inside `set()`.

---


