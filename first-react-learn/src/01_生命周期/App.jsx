
import React from "react";
import HelloWorld from "./HelloWorld";

class App extends React.Component {
    // 1. 执行 constructor
    constructor() {
        console.log('App constructor');
        super()
        this.state = {
            message: "hello world",
            isShow: true
        }
    }
    isChange() {
        this.setState({isShow: !this.state.isShow})

    }
    render() {
        console.log('App render');
        return (
            <div>
                {this.state.isShow && <HelloWorld /> }
                <button onClick={(e) => this.isChange()}>切换</button>
                <h2>哈哈哈</h2> 
            </div>
        )
    }
}

export default App;
