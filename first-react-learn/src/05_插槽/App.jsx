/*
 * @Author: liyongqi 2581229638@qq.com
 * @Date: 2023-10-18 12:38:04
 * @LastEditors: liyongqi 2581229638@qq.com
 * @LastEditTime: 2023-10-18 12:40:56
 * @FilePath: \react-learn\first-react-learn\src\05_插槽\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import NavBar from './nav-bar'

export class App extends Component {
  render() {
    return (
      <div>
        <h2>App</h2>
        <NavBar>
            <h2>children111</h2>
            <h2>childre213n111</h2>
        </NavBar>
      </div>
    )
  }
}

export default App