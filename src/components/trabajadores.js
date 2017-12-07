import React, {Component} from 'react';
import './trabajadores.css';
var apellido={width:'25%'};

    class trabajadores extends Component {
        state = {  }
        render() {
            return (
                <div>
                    {/* TABLA */}
                    <div className="container">
                        <h2 className='text-center'>Trabajadores</h2>
                        <input className="form-control" id="myInput" type="text" placeholder="Buscar.."/>
                        <br/>
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
                            <div className="form-group input_width">
                                <label for="nom">Nombre:</label>
                                <input type="text" className="form-control" id="nom"/>
                            </div>
                            <div className="form-group" style={apellido}>
                                <label for="ape">Apellidos:</label>
                                <input type="text" className="form-control" id="ape"/>
                            </div>
                            <div className="form-group">
                                <label for="fena">Fecha de Nacimiento:</label>
                                <input type="text" className="form-control" id="fena"/>
                            </div>
                            <div className="form-group">
                                <label for="fead">Fecha de Admisión:</label>
                                <input type="text" className="form-control" id="fead"/>
                            </div>
                            <div className="form-group">
                                <label for="su">Sueldo:</label>
                                <input type="text" className="form-control" id="su"/>
                            </div>
                            <div className="form-group input_width">
                                <label for="pu">Puesto:</label>
                                <input type="text" className="form-control" id="pu"/>
                            </div>
                            <div className="form-group">
                                <label for="pl">Placa:</label>
                                <input type="text" className="form-control" id="pl"/>
                            </div>
                            <div className="form-group">
                                <label for="cu">Curp:</label>
                                <input type="text" className="form-control" id="cu"/>
                            </div>
                            <div className="form-group">
                                <label for="suc">Sucursal:</label>
                                <input type="text" className="form-control" id="suc"/>
                            </div>
                            
                        </form>
                    </div>

                </div>
                
            );
        }
    }
    
    export default trabajadores;