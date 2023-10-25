import React, { Component, PureComponent } from 'react'
import Recommend from './Recommend'

export class Home extends PureComponent {
  
  constructor(){
    super()

    this.state = {
        message: "hello",
        counter: 0
    }
  }
  render() {
    console.log('Home Render');
    const { message, counter} = this.state
    return (
      <div>
       Home
      </div>
    )
  }
}

export default Home