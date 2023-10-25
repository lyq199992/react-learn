import React, { Component } from 'react'

export class App extends Component {
  inputChange(e){
    console.log(e.target.value);
    this.setState({username : e.target.value})
  }
  render() {
    const {username} = this.state
    return (
      <div>
        <input type='text' value={username} onChange={e => this.inputChange(e)}/>
      </div>
    )
  }
}

export default App