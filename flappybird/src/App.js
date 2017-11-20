import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {bg} from './common/sprite';
import sheet from './res/sheet.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        {bg}
      </div>
    );
  }
}

export default App;
