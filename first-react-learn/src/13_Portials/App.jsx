import React, { PureComponent } from 'react'
import {createPortal} from 'react-dom'
export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <h1>Portials</h1>
        {
          createPortal(<h2>h2h2hh22</h2>, document.querySelector('#why'))
        }
      </div>
    )
  }
}

export default App