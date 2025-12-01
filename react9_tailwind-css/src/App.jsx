import './App.css'

import React from 'react'

const App = () => {
  return (
    <div className='bg-blue-300 border-3 border-blue-600 w-[500px] h-[250px] rounded-xl flex justify-center items-center gap-10 text-white'>
      <div className='child-box' key={1}>child 1</div>
      <div className='child-box' key={2}>child 2</div>
      <div className='child-box' key={3}>child 3</div>
      <div className='child-box' key={4}>child 4</div>
    </div>
  )
}

export default App