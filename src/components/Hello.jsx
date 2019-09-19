// // This is a component
// import React from 'react';
// import ReactDOM from 'react-dom';

// const Hello = (props) => {
//  return <h1>Hello {props.name}</h1>;
// }

// const helloBoris = <Hello name='Boris' />;

// This is a class inherited component
import React, {Component} from 'react';
import '../Hello.css';

class Hello extends Component {

    state = { clicked: false }

    handleClick() {
        this.setState({clicked: !this.state.clicked });
    }

    render() {
        return (
        <h1 onClick={this.handleClick} className={this.state.clicked ? 'clicked' : ''}>
            Hello {this.props.name}!
        </h1>
        );
    }
}

export default Hello;
