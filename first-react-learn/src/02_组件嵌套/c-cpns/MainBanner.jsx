import React, { Component } from 'react'

export class MainBanner extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { banners } = this.props;
    return (
      <div>MainBanner
        {banners}
      </div>
    )
  }
}

export default MainBanner