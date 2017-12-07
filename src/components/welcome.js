import React, {Component} from 'react';
import Iniciosesion from './iniciosesion';
import './welcome.css';
var welcome="¡Bienvenido!"
var empresa="Celulares-JPG"
var Tel1="9703486"
var Tel2="9708612"
var Correo="celularesjpg@gmail.com"

class Welcome extends Component {

    render() {
        return (
            <div className="container">
                <h1 className='text-center'>{welcome}</h1>
                   <div className="container">
                    <div className= 'text-right'>
                    <Iniciosesion/>
                    </div>
                     </div>
                <hr/><br/><br/>

                <hr/>
                  <div >
                      <h3 className='text-center'>{empresa}</h3>
                        <h4 className='text-left'>Telefono1: {Tel1}</h4>
                        <h4 className='text-right'> <span className="glyphicon glyphicon-envelope"></span> {Correo}</h4>
                      <h4 className='text-left'>Telefono2: {Tel2}</h4>
                  </div> 

                     {/*link para ver opciones*/}
                     
              
            </div>
        );
    }
}

export default Welcome;