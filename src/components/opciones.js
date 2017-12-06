import React, {Component} from 'react';
import './opciones.css';

var nomusuario= "";
 class opciones extends Component {
     state = {  }
     render() {
         return (
             <div>
                 <h1>¡Hola {nomusuario}!</h1>
            </div>
             
         );
     }
 }
 
 export default opciones;