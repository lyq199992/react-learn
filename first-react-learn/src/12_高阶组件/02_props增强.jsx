import React, { PureComponent } from 'react'



// 定义组件
function enhancedUserInfo(originComponent){
  class NewComponent extends PureComponent {
    constructor(){
      super()
      this.state = {
        userInfo: {
          name: "why",
          level: 99
        }
      }
    }
    render(){
      return <originComponent {...this.props} {...this.state.userInfo}/>
    }
  }
  return <NewComponent />
}
const Home = enhancedUserInfo(function (props){
  return <h1>Home-{props.name}</h1>
})
function Profile(props){
  return <h1>Profile</h1>
}
function HelloFriend(props){
  return <h1>HelloFriend</h1>
}

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <HelloFriend />
        <Profile />
      </div>
    )
  }
}

export default App