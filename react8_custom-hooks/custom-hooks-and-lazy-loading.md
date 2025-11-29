# Custom Hook
Custom Hooks in React are a way to reuse stateful logic across components using JavaScript functions. They let you extract component logic involving hooks (like useState, useEffect, etc.) into reusable functions.

## ✅ Why Use Custom Hooks?
| Problem                                         | Solution                                          |
| ----------------------------------------------- | ------------------------------------------------- |
| You have repeating logic in multiple components | Extract logic into a custom hook                  |
| Components become too large and complex         | Move logic out to keep them clean                 |
| Hard to test shared logic                       | Custom hooks isolate the logic for easier testing |

## 🧩 Rules of Hooks Still Apply

### Inside custom hooks:

 * Use other hooks like `useState`, `useEffect`, `useContext`
 * Must start with "`use`" (like `useFetch`, `useLocalStorage`)
 * Cannot be called conditionally inside the hook

## 📌 Example: A simple useOnlineStatus hook 

### useOnlineStatus.jsx

```jsx
import {useEffect, useState} from 'react'

function useOnlineStatus(){
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(()=>{
    window.addEventListener('offline', ()=>{
      setOnlineStatus(false)
    })
    window.addEventListener('online', ()=>{
      setOnlineStatus(true)
    })
  }, [])

  return onlineStatus
}

export default useOnlineStatus;
```
### App.jsx
```jsx
import React, {useState} from 'react'
import useOnlineStatus from './useOnlineStatus'
const App = () => {
  const status = useOnlineStatus()
  return (
    <div>online status: {status?'🟢': '🔴'}</div>
  )
}

export default App
```

# Lazy Loading

Lazy loading in React is a performance optimization technique that allows you to load components only when they’re needed—instead of including everything in the initial bundle. 

Lazy loading reduces size of your production bundle by splitting the code into smaller chunks. Those chunks also get stored in the build/dist folder.

Example chunk file names:

 `dist/assets/Card-C6Z4xcou.js`

 `dist/assets/index-DVhwohwn.js`


## 🧠 Understanding How It Works

| Feature        | Role                                           |
| -------------- | ---------------------------------------------- |
| `lazy()` | Splits code into chunks automatically          |
| `<Suspense></Suspense>`     | Displays fallback UI during component download |
| Fallback UI    | Loader / spinner shown until component loads   |

## 🎯 Why Use Lazy Loading?

| Benefit                 | Explanation                           |
| ----------------------- | ------------------------------------- |
| Faster initial load     | You download only what's required     |
| Better user experience  | Load component only when needed       |
| Saves network bandwidth | Great for large apps with many routes |

## 🚀 Basic Example:

### Card.jsx
```jsx
import React from 'react'

const Card = () => {
  return (
    <div>this is very huge content card</div>
  )
}

export default Card
```

### App.jsx
```jsx
import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'

const Card = lazy(() => import('./Card'))
// import Card from './Card'

const Body = () => {
  return (
    <div>
      this is page of our application
      <br />
      <Link to={'/card'}>to card</Link>
    </div>
  )
}

const App = () => {
  const route = createBrowserRouter([
    { path: '/', element: <Body /> },
    { path: '/card', element: <Suspense fallback={<h1>loading...</h1>}><Card /></Suspense> },
  ])
  return (
    <RouterProvider router={route} />
  )
}

export default App
```