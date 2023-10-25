import React, { Component } from 'react'
import Home from './Home';
import Recommend from './Recommend';
import Profile from './Profile';

export class App extends Component {
  constructor(){
    super()

    this.state = {
        message: "hello",
        counter: 0
    }
  }
  changeText(){
    this.setState({
      message: ''
    })
  }
  render() {
    console.log('App Render');
    const { message, counter} = this.state
    return (
      <div>
        <h2>App-{message}-{counter}</h2>
        <button onClick={e => this.changeText()}>修改文本</button>
        <Home/>
        <Recommend />
        <Profile message={message}/>
      </div>
    )
  }
}

export default App