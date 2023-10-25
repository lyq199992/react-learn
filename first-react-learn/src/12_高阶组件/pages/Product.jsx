import React, { PureComponent } from 'react'
import withTheme from '../hoc/with_theme'

export class Product extends PureComponent {
  render() {
    return (
      <div>
        Product: {this.props.color}
      </div>
    )
  }
}


export default withTheme(Product)