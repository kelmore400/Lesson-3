import React from "react";
import './style.css';

export class Task2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 }
        this.onClickIncrease = this.onClickIncrease.bind(this);
        this.onClickDecrease = this.onClickDecrease.bind(this);
    }
    onClickIncrease() {
        this.setState({value: this.state.value + 1});
    }
    onClickDecrease() {
        this.setState({value: this.state.value - 1});
    }

    render() {
        return (
            <div>
                <h3>Counter: {this.state.value}</h3>
                <div className="btns">
                <button onClick={this.onClickIncrease}>+</button>
                <button onClick={this.onClickDecrease}>-</button>
                </div>
            </div>
        )
    }
}