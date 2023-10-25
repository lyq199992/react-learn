import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(){
    super()

    this.titleRef = createRef()

  }
  changeText(){
    console.log(this.titleRef.current);
  }
  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello World</h2>
        <button onClick={e => this.changeText()}>update</button>
      </div>
    )
  }
}
