import React from "react";

class StateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            inputValue: ''
        }
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleClickAdd() {
        this.setState({value: this.state.value + 1});
    }
    handleClick() {
        this.setState((prevValue, props) => {
            console.log(prevValue, props);
            return {value: this.state.value - 1};
        });
        // this.setState({value: this.state.value - 1});
    }
    handleFocus() {
        console.log("focused");
    }
    handleBlur() {
        console.log("blur");
    }
    handleChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
        // console.log(e.target.value);
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    render() {
        console.log(this.state);
        return(
        <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleClickAdd}>+</button>
        <button onClick={this.handleClick}>-</button>
        <form onSubmit={this.handleSubmit}>
        <input type="text" onFocus={() => this.handleFocus()} onBlur={() => this.handleBlur()}/>
        <input type="text" onChange={(e) => this.handleChange} />
        <input type="submit"/>
        </form>
        <h2>{this.state.inputValue}</h2>
        </div>
        )
    }
}
export default StateComponent;