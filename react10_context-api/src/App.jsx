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