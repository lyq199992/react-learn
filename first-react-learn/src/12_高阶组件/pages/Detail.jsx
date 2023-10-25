import React, { PureComponent } from 'react'
import computeTime from '../hoc/cupute_time'

export class Detail extends PureComponent {
  
  render() {
    return (
      <div>
        <h2>Detail Page</h2>

      </div>
    )
  }
}

export default computeTime(Detail)