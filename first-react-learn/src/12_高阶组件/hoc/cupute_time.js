import { PureComponent } from "react";

function computeTime(OriginComponent){
  class NewComponent extends PureComponent{
    UNSAFE_componentWillMount(){
      this.beginTime = new Date().getTime()
    }
    componentDidMount(){
      this.endTime = new Date().getTime()
      const interval = this.endTime - this.beginTime
      console.log(`花费了${interval}ms`);
    }

    render(){
      return <OriginComponent/>
    }
  }
  return <NewComponent />
}

export default computeTime