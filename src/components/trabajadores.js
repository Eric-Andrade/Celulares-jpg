import React, {Component} from 'react';
import './trabajadores.css';
import Trabajadores from 'Trabajadores.json';
var apellido={width:'23%'};
var nombre={width:'20%'};
var sueldo={width:'15%'};
    class trabajadores extends Component {
        state = { 
            // Propiedades
            T: Trabajadores,
            Produccion: ""
         }
        render() {
            return (
                <div>
                    {/* TABLA */}
                    <div className="container">
                        <h2 className='text-center'>Trabajadores</h2>
                        <input className="form-control" id="myInput" type="text" placeholder="Buscar.."/>
                        <br/>

                        {
                            this.state.T.map
                        }
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Fecha de Admisión</th>
                                <th>Sueldo</th>
                                <th>Puesto</th>
                                <th>Placa</th>
                                <th>Curp</th>
                                <th>Sucursal</th>
                        </tr>
                        </thead>
                        </table>
                    </div>
                    <br/><br/><br/>
                    <hr/>
                    {/* INPUT */}
                    <div className="container">
                    <h2>Gestionar Trabajadores</h2>
                        <form>
                            <div className="form-group " style={nombre}>
                                <label for="nom">Nombre:</label>
                                <input type="text" className="form-control" id="nom"/>
                            </div>
                            <div className="form-group input_width">
                                <label for="ape">Apellidos:</label>
                                <input type="text" className="form-control" id="ape"/>
                            </div>
                            <div className="form-group"style={sueldo}>
                                <label for="fena">Fecha de Nacimiento:</label>
                                <input type="text" className="form-control" id="fena"/>
                            </div>
                            <div className="form-group"style={sueldo}>
                                <label for="fead">Fecha de Admisión:</label>
                                <input type="text" className="form-control" id="fead"/>
                            </div>
                            <div className="form-group" style={sueldo}>
                                <label for="su">Sueldo:</label>
                                <input type="text" className="form-control" id="su"/>
                            </div>
                            <div className="form-group " style={apellido}>
                                <label for="pu">Puesto:</label>
                                <input type="text" className="form-control" id="pu"/>
                            </div>
                            <div className="form-group"style={nombre}>
                                <label for="pl">Placa:</label>
                                <input type="text" className="form-control" id="pl"/>
                            </div>
                            <div className="form-group"style={nombre}>
                                <label for="cu">Curp:</label>
                                <input type="text" className="form-control" id="cu"/>
                            </div>
                            <div className="form-group input_width">
                                <label for="suc">Sucursal:</label>
                                <input type="text" className="form-control" id="suc"/>
                            </div>
                            
                        </form>
                    </div>

                   <div className='conteiner-fluid'>
                   

                                <a href="#" className="btn btn-default" role="button">Crear</a>
                                <a href="#" className="btn btn-default" role="button">Actualizar</a>
                                <a href="#" className="btn btn-default" role="button">Eliminar</a>

                   </div>



                </div>
                
            );
        }
    }
    
    export default trabajadores;