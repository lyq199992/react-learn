/*
 * @Author: liyongqi 2581229638@qq.com
 * @Date: 2023-10-18 11:17:27
 * @LastEditors: liyongqi 2581229638@qq.com
 * @LastEditTime: 2023-10-18 11:21:27
 * @FilePath: \react-learn\first-react-learn\src\02_组件嵌套\c-cpns\Main.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import MainBanner from './MainBanner'

export class Main extends Component {
  constructor() {
    super()

    this.state = {
      banners: ["新歌曲", "MV"]
    }
  }
  render() {
    const { banners } = this.state
    return (
      <div>Main
        <MainBanner banners={banners}/>
      </div>
    )
  }
}

export default Main