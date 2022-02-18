import React from "react";
import { v4 } from 'uuid';

const user = [
    {
        id: 1,
        name: "Ivan",
        age: 23
    },
    {
        id: 2,
        name: "Kate",
        age: 22
    },
    {
        id: 3,
        name: "Ann",
        age: 20
    },
    {
        id: 4,
        name: "Olga",
        age: 19
    }
];

export class NewListComponent extends React.Component {
    render() {
        return (
            <div>
                {user.map(({id, name, age}) => {
                    return <p key={v4()}>{id, name, age}</p>
                })}
            </div>
        )
    }
}