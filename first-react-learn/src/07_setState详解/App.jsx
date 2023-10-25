import React, { Component } from 'react'

export class App extends Component {
    constructor(){
        super()

        this.state = {
            message: "Hello World",
            counter : 0
        }
    }
    changeText(){
        // 1. setState 用法
        // 内部使用 Object.assign 进行合并
        this.setState({
            message: "aaa"
        })
        // 2. callback
        // this.setState((state, props) => {
        //     console.log(state, props);
        //     return {
        //         message: "你好"
        //     }
        // })
        // 3. 对象 + callback，拿到更新后的值做操作
        this.setState({}, () => {})
    }
    increment(){
        this.setState({
            counter : this.state.counter + 1
        })
        
        this.setState({
            counter : this.state.counter + 1
        })
        
        this.setState({
            counter : this.state.counter + 1
        })
    }
    render() {
        const { message, counter } = this.state
        console.log(111);
        return (
        <div>
            <h2>message: {message}</h2>
            <button onClick={e => this.changeText()}>修改文本</button>
            <h2>当前计数：{counter}</h2>
            <button onClick={e => this.increment()}>+1</button>
        </div>
        )
    }
}

export default App