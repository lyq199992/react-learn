/*
 * @Author: liyongqi 2581229638@qq.com
 * @Date: 2023-10-18 12:38:22
 * @LastEditors: liyongqi 2581229638@qq.com
 * @LastEditTime: 2023-10-18 12:40:50
 * @FilePath: \react-learn\first-react-learn\src\05_插槽\nav-bar\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'

export class NavBar extends Component {
  
  render() {
    return (
      <div className='nav-bar'>
        <div className='left'>{this.props.children[0]}</div>
        <div className="center">{this.props.children[1]}</div>
        <div className="center">right</div>
      </div>
    )
  }
}

export default NavBar