import React, { PureComponent } from 'react'
import Cart from './pages/Cart'
import Detail from './pages/Detail'

export class App extends PureComponent {
  constructor(){
    super()

    this.state = {
      isLogin : true
    }
  }
  render() {
    const { isLogin } = this.state
    return (
      <div>
          <Cart />
          <Detail />
      </div>
    )
  }
}

export default App