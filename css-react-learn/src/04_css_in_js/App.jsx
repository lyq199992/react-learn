import React, { PureComponent } from "react";
import { AppWrapper } from "./style";

export class App extends PureComponent {
  render() {
    return (
      <AppWrapper size={150} color={"red"}>
        <div className="section">
          <h2 className="title">标题</h2>
          <p className="content">我是内容</p>
        </div>
        <div className="footer">
          <p>免责声明</p>
        </div>
      </AppWrapper>
    );
  }
}

export default App;
