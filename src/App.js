import React, { Component } from 'react';
import logo from './logo.svg';
import Trabajadores from './components/trabajadores';
// import Opciones from './components/opciones';
// import Welcome from'./components/welcome';
import './App.css';


class App extends Component {
  state = {  }
  render() {
    return (
      <Trabajadores/>
    );
  }
}

export default App;
