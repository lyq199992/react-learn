/*
 * @Author: liyongqi 2581229638@qq.com
 * @Date: 2023-10-18 11:15:24
 * @LastEditors: liyongqi 2581229638@qq.com
 * @LastEditTime: 2023-10-18 11:18:07
 * @FilePath: \react-learn\first-react-learn\src\02_组件嵌套\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import Header from './c-cpns/Header'
import Main from './c-cpns/Main'
import Footer from './c-cpns/Footer'
export class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App