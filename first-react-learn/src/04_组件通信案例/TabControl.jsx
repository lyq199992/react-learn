import React, { Component } from 'react'
import './style.css'
export class TabControl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0
        }
    }

    changeIndex(index){
        this.setState({currentIndex: index})
    }   
  render() {
    const {titles} = this.props
    const { currentIndex } = this.state
    return (
      <div className='tab-control'>
        {
            titles.map((item, index) => {
                return (
                    <div className={`item ${index === currentIndex ? 'active' : ''}`} onClick={(e) => this.changeIndex(index)} key={item}>
                        <span className='text' >{item}</span>    
                     </div>
                )
            })
        }
      </div>
    )
  }
}

export default TabControl