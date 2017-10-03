import React, { Component } from 'react';
import './App.css';
import ListUsers from './components/ListUsers.js';
import Add from './components/components/Add.js';
import Delete from './components/components/Delete.js';

class App extends Component {
  render() {
    return (
      <div className="App-box">
        <div className="container">
          <Add />
          <ListUsers />
          <Delete />

        </div>
      </div>
    );
  }
}

export default App;
