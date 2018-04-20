import React from 'react';
import './App.css';
import './App.js';
import Sup from './sup';

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

//I'm passing to you an object called... {name: object.name}. so when the component function uses it, props.name gets the key in the real object called that

// props is this object: {array: allSups}. syntax for render will be: array={allSups}

let SupList = (props) => {

    return (<div className="SupList-container">
        {
            props.array.map(element => {
                return (<Sup aSup={element}/>);
            })
        }
    </div>)
}

export default SupList;