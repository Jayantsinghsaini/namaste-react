// A React component is a reusable piece of UI logic.
// It’s like a JavaScript function (or class) that returns JSX (HTML-like syntax) describing what should appear on the screen.
// There are two ways to create react component:
//  a) Functional Component 
//  b) Class Component (older, less common now)

import React, { Component } from "react";
import { createRoot } from 'react-dom/client';

// Functional Component
function Greeting1() {
  return (
    <>
      <h1>Hello World from Greeting1</h1>
    </>
  )
}

function Greeting2() {
  return <><h1>Hello World from Greeting2</h1></>
}

const Greeting3 = () => <><h1>Hello World from Greeting3</h1></>

const Greeting4 = () => {
  return <><h1>Hello World from Greeting4</h1></>
}

const Greeting5 = () => (
  <><h1>Hello World from Greeting5</h1></>
)

// Class Component
class Hello extends Component {
  sayHi() {
    return <span>Hi</span>
  }
  sayBye = () => <span>Bye</span>

  render() {
    return (
    <>
      <h1>Hello class</h1>
      <h2>&nbsp;&nbsp;'{this.sayHi()}' from Hello class's sayHi()</h2>
      <h2>&nbsp;&nbsp;'{this.sayBye()}' from Hello class's sayBye()</h2>
    </>
    )
  }
}

const root = createRoot(document.getElementById("root"));

root.render(<>
  <Greeting1></Greeting1>
  <Greeting2 />
  <Greeting3 />
  {Greeting4()}
  {Greeting5()}
  <Hello />
</>);