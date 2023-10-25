import React, { PureComponent } from 'react'

// 定义高阶组件
function hoc(WrapperComponent) {
  class NewCpn extends PureComponent{
    render(){
      return <WrapperComponent name="why"/>
    }
  }
  return NewCpn;
}

class HelloWorld extends PureComponent{
  render(){
    return (
      <div>
        hello world
      </div>
    )
  }
}

const HelloWorldHOC = hoc(HelloWorld)

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorldHOC />
      </div>
    )
  }
}

export default App