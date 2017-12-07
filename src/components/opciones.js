import React, {Component} from 'react';
import './opciones.css';

var nomusuario= "Eric";
var t="Trabajadores";
var s="Sucursales";
var ca="Camiones";
var ce="Celulares";
 class opciones extends Component {
     state = {  }
     render() {
         return (
            <div className="container-fluid">
                 <h1 className= 'text-center'>¡Hola {nomusuario}!</h1>
                <br/><br/><br/>
                <div className= 'container-fluid'>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="thumbnail">
                        {/* <img src="..." alt="..."/> */}
                            <div className="caption">
                            <h2 className= 'text-center'>{t}</h2>
                                <br/><br/><br/>
                                {/* <p>...</p> */}
                                <div className='text-center'>
                                <p><a href="#" className="btn btn-primary" role="button">Administrar {t}</a>
                                </p>
                                </div>
                        </div>
                            </div> 
                            <div className="thumbnail">
                        {/* <img src="..." alt="..."/> */}
                            <div className="caption">
                            <h2 className= 'text-center'>{s}</h2>
                            <br/><br/><br/>
                                {/* <p>...</p> */}
                              <div className='text-center'>
                              <p>
                                <a href="#" className="btn btn-primary" role="button">Administrar {s}</a>
                                </p>
                              </div>
                        </div>
                           </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="thumbnail">
                        {/* <img src="..." alt="..."/> */}
                            <div className="caption">
                            <h2 className= 'text-center'>{ca}</h2>
                            <br/><br/><br/>
                                {/* <p>...</p> */}
                               <div className='text-center'>
                               <p>
                                <a href="#" className="btn btn-primary" role="button">Administrar {ca}</a>                       
                                </p>
                                </div>
                        </div>
                            </div>

                            <div className="thumbnail">
                        {/* <img src="..." alt="..."/> */}
                            <div className="caption">
                            <h2 className= 'text-center'>{ce}</h2>
                            <br/><br/><br/>
                                {/* <p>...</p> */}
                               <div className='text-center'>
                               <p>
                                <a href="#" className="btn btn-primary" role="button">Administrar {ce}</a>                              
                                </p>
                                </div>
                        </div>
                            </div>
                    </div>

                    </div>
                    </div>

            </div>
             
         );
     }
 }
 
 export default opciones;