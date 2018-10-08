import React, { Component } from 'react';
import './App.css';
import UserList from './UsersList';
import NavBar from './NavBar';
class App extends Component {
  render() {
  
    return (
      <div className="App">
        <NavBar />
        {/* <UserList /> */}
      </div>
    );
  }
}

export default App;
