import React from 'react';
import { SSL_OP_ALL } from 'constants';

// const sups = [
//     {author: "countrymouse", body: "Corvids are cool. Fight the power.", timestamp: new Date()},
//   ];

// this.state = {
//     allSups: sups,
//     randomState: null
//     anotherRandomState: null
// }

// object = {
//     name: "greg",
//     height: 72
// };

/* <MyComponent name={object.name} height={object.height}/> */

//I'm passing to you an object structured as... {name: object.name, height: object.height}. so when the component function uses it, props.name gets the key in the real object called that

// props is this object: { body: allSups[i].body, author: allSups[i].author, timestamp: allSups[i].timestamp }
// syntax for render will be: body={allSups[i].body} author={allSups[i].author} timestamp={allSups[i].timestamp}

let Sup = function ({aSup}) {
    return (<div className="Sup-container">
        <h2>{aSup.body}</h2>
        <p>{aSup.author}</p>
        <p>{aSup.timestamp.toString()}</p>
    </div>)
}

export default Sup;