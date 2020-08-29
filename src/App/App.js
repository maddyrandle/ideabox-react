import React, { Component } from 'react';

import './App.css';
import Nav from '../Nav/Nav';
import NewIdea from '../NewIdea/NewIdea';
import Ideas from '../Ideas/Ideas';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='app-container'>
        <Nav />
        <NewIdea />
        <Ideas />

      </div>
    );
  };
}

export default App;
