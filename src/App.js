import React, { Component } from 'react';
import logo from './logo.svg';
import Trabajadores from './components/trabajadores';
import Opciones from './components/opciones';
import Welcome from'./components/welcome';
import './App.css';
import Sucursales from './components/sucursales';
import Camiones from './components/camiones';
import trabajadores from './components/trabajadores';



class App extends Component {
  state = {  }
  render() {
    return (
      <Sucursales/>
      
    );
  }
}
export default App;