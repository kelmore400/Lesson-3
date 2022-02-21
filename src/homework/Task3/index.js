import React from "react";
import { v4 } from 'uuid';

const users = [
    { 
        id: 1,
        name: 'Kate'
    }, 
    { 
        id: 2,
        name: 'Dima'
    }, 
    { 
        id: 3,
        name: 'Nataly'
    }, 
    { 
        id: 4,
        name: 'Oleg'
    }, 
    { 
        id: 5,
        name: 'Danil'
    }
];

export class Task3 extends React.Component {
    render() {
        return (
            <ul>
                {users.map(({name}) => 
                    (<li key={v4()}>{name} - ключ: {v4()}</li>)
                )}
            </ul>
        )
    }
}