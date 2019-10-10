import React, { Component } from 'react';
import Projects from './components/Project';
import Mercury from './components/Mercury';
import './App.css';

class App extends Component {

  constructor(){  
    super();
    this.state = {
      mercurys:[
        {
          temprature:'23',
          category:'liquid'
        },
        {
          temprature:'10',
          category:'solid'
        },
        {
          temprature:'50',
          category:'gas'
        }
  
      ]
    ,  
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'

        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }

      ]
    
    
    
    }

  }
 
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          My First React App
        </p>
        <Projects projects={this.state.projects}  />
        <Mercury mercurys={this.state.mercurys} />
      </div>
    );
  }
}

export default App;
