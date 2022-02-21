import React from "react";
import { v4 } from 'uuid';

const users = ["Kate", "Dima", "Nataly", "Oleg", "Danil"];

export class Task1 extends React.Component {
    render() {
        return (
            <ul>
                {users.map((user) => 
                    (<li key={v4()}>{user}</li>)
                )}
            </ul>
        )
    }
}