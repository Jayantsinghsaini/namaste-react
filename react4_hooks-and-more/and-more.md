## Virtual DOM (VDOM):

* The DOM (Document Object Model) is a tree-like structure representing your HTML elements in the browser.

* Directly updating the real DOM is slow, especially when frequent UI updates happen.

* React introduced the Virtual DOM, which is:

* A lightweight in-memory copy of the real DOM.

* When your component’s state/props change, React re-renders a new virtual DOM tree instead of touching the real DOM immediately.

* React then compares the new VDOM with the previous one → figures out what changed → updates only the necessary parts of the real DOM.

## Reconciliation Algorithm:
Reconciliation in React is the process by which React efficiently updates the actual DOM to reflect changes in a component's state or props. This process involves comparing the new Virtual DOM tree with the previous one and identifying the minimal set of changes needed to update the real DOM. 
## How Reconciliation Works:

* **Virtual DOM Creation:** When a component's state or props change, React creates a new Virtual DOM tree representing the updated UI.

* **Diffing Algorithm:** React then uses a "diffing algorithm" to compare this new Virtual DOM tree with the previous one. This algorithm identifies the differences between the two trees.

* **Heuristic Rules:** To optimize this comparison, React employs a heuristic algorithm based on two key assumptions:

    * **Different Element Types:** If two elements have different types (e.g., a `<div>` becomes a` <span>`), React will destroy the old DOM node and create a new one. This involves unmounting the old component and mounting the new one. 

    * **Keys for Lists:** When rendering lists of elements, providing a unique key prop to each item helps React identify which items have changed, been added, or removed, allowing for more efficient updates. Without keys, React might re-render the entire list unnecessarily.

* **DOM Updates:** Based on the identified differences, React calculates the most efficient way to update the actual DOM. It only modifies the specific parts of the DOM that have changed, avoiding costly full re-renders.

## React Fiber:
React Fiber is a complete re-implementation of React's core reconciliation algorithm, introduced in React 16. It is a fundamental internal change to how React processes updates and renders the user interface.

## Key aspects of React Fiber:
* **Asynchronous and Interruptible:** Unlike the previous "stack reconciler," which was synchronous and couldn't be interrupted, Fiber allows React to pause, resume, and even abort rendering work. This is crucial for handling high-priority updates like user input without blocking the main thread and causing a janky user experience.

* **Incremental Rendering:** Fiber enables React to break down rendering work into smaller units, called "fibers," and spread this work across multiple frames. This improves the perceived performance, especially for complex animations, layouts, and gestures.

* **Prioritization:** It allows React to assign different priorities to various types of updates, ensuring that critical updates (e.g., user input) are processed before less urgent ones.

```
Q: why react fast in simple words?? 
A: because it efficiently manipulate DOM.
```

