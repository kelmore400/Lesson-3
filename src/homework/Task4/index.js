import React from "react";

export function Task4 (props) {
        return(
            <div>{props.value % 2 === 0 ? <FunctionalComponent value={props.value}/> : <ClassComponent value={props.value}/>}</div>
        )
}

export function FunctionalComponent(props) {
        return(
            <div><ul><li>Сработал - FunctionalComponent, так как задали четное число - {props.value}</li></ul></div>
        )
}

export class ClassComponent extends React.Component {
    render() {
        return(
            <div><ul><li>Сработал - ClassComponent, так как задали нечетное число - {this.props.value}</li></ul></div>
        )
    }
}