/*
 * @Author: liyongqi 2581229638@qq.com
 * @Date: 2023-10-18 11:27:26
 * @LastEditors: liyongqi 2581229638@qq.com
 * @LastEditTime: 2023-10-18 11:27:48
 * @FilePath: \react-learn\first-react-learn\src\04_组件通信案例\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEt
 */
import React, { Component } from 'react'
import TabControl from './TabControl';

export class App extends Component {
    constructor() {
        super()

        this.state = {
            titles: ["流行", "新款", "精选"]
        }
    }
  render() {
    const { titles } = this.state;
    return (
      <div>
        <h2>App</h2>
        <TabControl titles = {titles} />
      </div>
    )
  }
}

export default App