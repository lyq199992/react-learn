import React from "react";


class HelloWorld extends React.Component {
     // 1. 执行 constructor
     constructor() {
        console.log('helloworld constructor');
        super()
        this.state = {
            message: "hello world"
        }
    }
    handleChange(){
        this.setState({message: '123'})
    }
    render() {
        console.log('helloworld render');
        const { message } = this.state
        return (
            <div>
                <h2>hello world</h2>
                {message}
                <button onClick={(e) => this.handleChange()}>修改</button>
            </div>
        )
    }
    // 3. 组件被挂载
    componentDidMount(){
        console.log('didMount');
    }
    // 4. 组件被修改
    componentDidUpdate(preProps, prevState, snapshot) {
        console.log('update', preProps, prevState, snapshot);
    }
    // 5. 组件被卸载
    componentWillUnmount() {
        console.log('hello unmount');
    }
    // 6. 是否更新组件
    shouldComponentUpdate() {
        return true;
    }
    // 7. 记录快照
    getSnapshotBeforeUpdate(){
        // 这里面返回的数据，在 componentDidUpdate 可以拿到
        return {
            scroll: 1000
        }
    }
}

export default HelloWorld;