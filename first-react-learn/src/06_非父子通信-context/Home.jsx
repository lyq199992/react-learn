import React, { Component } from 'react'
import HomeInfo from './HomeInfo'
import themeContext from './context/themeContext'
import HomeBanner from './HomeBanner'

export class Home extends Component {
  //  React Context ≈ Vue Provide inject
  render() {
    
    const {age, uname} = this.props
    return (
      <div>
        Home : {age} - {uname}
        <HomeInfo />
        <HomeBanner />
      </div>
    )
  }
}
HomeInfo.contextType = themeContext
export default Home