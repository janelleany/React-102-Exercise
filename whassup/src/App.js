import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SupList from './supList.js';
import uuid from "uuid/v4";

const sups = [
  {author: "countrymouse", body: "Corvids are cool. Fight the power.", timestamp: new Date()},
  {author: "spotsgiraffe", body: "A group of giraffes is called a tower.", timestamp: new Date()},
  {author: "janelleany", body: "I'm hungry", timestamp: new Date()},
  {author: "nybblr", body: "Destroy all classes", timestamp: new Date()}
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSups: []
    }
  }


  componentDidMount() {
    this.setState( {allSups: sups} );
  }

  // componentDidMount() {
  //   fetch(https://jsonplaceholder.typicode.com/posts)
  //   .then(response => response.json())
  //   .then(this.setState({allSups: }))
  // }

  


  render() {
    return (<div className="App-container">
    <h1>Hello!</h1>
    <SupList array={this.state.allSups}/>
    </div>)
  }
}

export default App;

// let Display = connect(
//   (state) => { //takes in the *entire* store's state but then only returns what the component needs...
//       return { sups: state.sups }; //passed down as props to the component.
//   },
//   (dispatch) => {
//       return { dispatch: dispatch };
//   },
// )(DisplayDumb);

// <Provider store={store}>
// //the App component
//   </Provider>


//the section of the JSX "tag" that looks like the attributes section of an HTML tag is where you pass the props you want into the component's function. it is an object.
//so then you match its keys with the keys you mentioned in the component

//user = {
//   name: "janelle",
//   height: 69
// }

//let MyComponent = function (props) {
  // return <div>{props.name + " " + props.height}</div>
// }


//ReactDOM.render(<MyComponent name={user.name} age={user.height}/>)
//I'm passing to you an object called... {name: user.name}. so when the component function uses it, props.name gets the key with that name
