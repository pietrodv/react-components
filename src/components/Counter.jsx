import React, {Component} from 'react';
import '../Counter.css';

class Counter extends Component {
  state = {count: 0};

  handleClickMinus = () => {
    if (this.state.count > 0) {
      this.setState({count: this.state.count - 1});
    }
  }

  handleClickPlus = () => { 
    this.setState({count: this.state.count + 1});  
  }

  render() {
    return (
      <div class="counter">
        <button onClick={this.handleClickMinus}> - </button>
          <h1 class="count">{this.state.count}</h1>
        <button onClick={this.handleClickPlus}> + </button>
      </div>
    );
  }
}

export default Counter;
