import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

export class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false,
    };
  }
  render() {
    const { isShow } = this.state;
    return (
      <div>
        <button onClick={(e) => this.setState({ isShow: !isShow })}>
          切换
        </button>
        <CSSTransition
          in={isShow}
          unmountOnExit={true}
          classNames="l"
          timeout={1000}
        >
          <h2>哈哈哈</h2>
        </CSSTransition>
      </div>
    );
  }
}

export default App;
