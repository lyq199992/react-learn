import React from 'react'
import themeContext from './context/themeContext'

export default function HomeBanner() {
  return (
    <div>
        <h2>Banner</h2>
        {/* 函数式组件 */}
        <themeContext.Consumer>
            {
                (value) => {
                    return <h2>{value.name}</h2>
                }
            }
        </themeContext.Consumer>
    </div>
  )
}
