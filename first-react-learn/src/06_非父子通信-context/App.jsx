import React, { Component } from 'react'
import Home from './Home'
import themeContext from './context/themeContext'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      info: {
        name: "kobe",
        age: 15
      }
    }
  }
  render() {
    const {info} = this.state
    return (
      <div>
        <h2>App</h2>
        {/* 1. 给 Home 传递 */}
        <themeContext.Provider value={info}>
          <Home />
        </themeContext.Provider>
        {/* 2. 普通 Home */}
        {/* <Home {...info}/> */}
      </div>
    )
  }
}
