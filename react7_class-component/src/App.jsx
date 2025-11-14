import React, { Component } from 'react'

class User extends Component {

  constructor(props) {
    super(props)
  }

  sayHi() {
    return (<>
      <div>hello there</div>
    </>)
  }

  render() {
    const { name, age } = this.props
    return (
      <>
        {this.sayHi()}
        <div>name: {name}</div>
        <div>age: {age}</div>
      </>
    )
  }
}

function App() {


  return (<>
    <User name={'jayant'} age={21} />
  </>
  )

}

export default App

// check out react lifecycle method diagram at src/assets/react-lifecycle-method-diagram.png