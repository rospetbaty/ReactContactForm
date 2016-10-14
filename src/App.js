import React, { Component } from 'react';
import Logo from './Logo.png';
import './App.css';
import Rating from './components/rating.js';
import Form from './components/form.js';
import Dropdown from './components/dropdown.js';



class App extends Component {
 render() {
    return (
      <div className="page-header text-center">
        <div className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
          <h1>Contact Form</h1>

        </div>
        <div className="App-main">
          <Form />
        </div>

        <p className="App-intro">

        </p>
      </div>







    );
  }
}






export default App;
