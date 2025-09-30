//Hooks are special functions that let you “hook into” React’s features (like state and lifecycle methods) inside functional components.

import { useState } from 'react'

/*
The useState hook is a special function in React that lets you add state variables to functional components.
  - State is data that can change over time.
  - When state changes, the component re-renders to reflect the new data.
*/

function App() {
  // state variable
  let [count, setCount] = useState(0)
  return (
    <>
      <button onClick={()=>{setCount(++count)}}>count++</button>
      <span>{count}</span>
    </>
  )
  
}

export default App
