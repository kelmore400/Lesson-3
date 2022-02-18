import React from "react";
import { v4 } from 'uuid';


// const arr = [
//     {
//         id: 1,
//         value: 'some val1'
//     },
//     {
//         id: 2,
//         value: 'some val2'
//     },
//     {
//         id: 3,
//         value: 'some val3'
//     },
//     {
//         id: 4,
//         value: 'some val4'
//     },
//     {
//         id: 5,
//         value: 'some val5'
//     }
// ];
// const arr = [1, 2, 33, 556, 67, 643, 7887, 686];

export class ListComponent extends React.Component {
    render() {
        return(
            <div>
                {this.props.items.map(({ id, value})=> {
                    // console.log(v4());
                    return <p key={v4()}>{value}</p>
                })}
            </div>
            // <ul>
            //     {arr.map(({id, value}) => {
            //         console.log(v4());
            //         return <li key={v4()}>{value}</li>
            //         // return <li key={id}>{value}</li>
            //         // return <li key={obj.id}>{obj.value}</li>
            //         // return <li key={`${element}__${index}`}>{element}</li>
            //     })}
            // </ul>
        )
    }
}