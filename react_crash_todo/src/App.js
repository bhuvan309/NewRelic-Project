import React from 'react';
import Course from './Course';
import Game from './Game';
import Login from './Login';


class App extends React.Component {
  render(){
    return(
  <React.Fragment>  
        <Course></Course>
        <Game></Game>
        <Login></Login>
  </React.Fragment>
    );
  }
}

export default App;
