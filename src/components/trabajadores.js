import React, {Component} from 'react';
import './trabajadores.css';
    class trabajadores extends Component {
        state = { 
            T: [],
            
         }
    
        componentDidMount(){
            this.getTrabajadores();
        }
        
         getTrabajadores () {
             var T = [
                {
                    "ID": 1,
                    "Curp": "JIFB010925MASMGRA2",
                    "Nombre": "BRENDA",
                    "Apellidos": "JIMENEZ FIGUEROA",
                    "FechaNacimiento": "2001/09/25",
                    "FechaAdmision": "2017/08/21" ,
                    "Sueldo": "5000",
                    "Puesto": "ATENCION AL PUBLICO" 
                },
                {
                    "ID": 2,
                    "Curp": "CARG010921HDGHMRA5",
                    "Nombre": "GERARDP",
                    "Apellidos": "CHAVEZ ROMAN",
                    "FechaNacimiento": "2001/09/21",
                    "FechaAdmision": "2016/08/18",
                    "Sueldo": "4500",
                    "Puesto": "REPARADOR" 
                },
                {
                    "ID": 3,
                    "Curp": "CUGA010714HDGRRNA1",
                    "Nombre": "ANGEL",
                    "Apellidos": "CRUZ GARCIA",
                    "FechaNacimiento": "2001/07/14",
                    "FechaAdmision": "2013/10/21",
                    "Sueldo": "5000",
                    "Puesto": "GERENTE/DUEÑO" 
            
                },
                {
                    "ID": 4,
                    "Curp": "GOZE001107MDWEROA1",
                    "Nombre": "ELIZABETH",
                    "Apellidos": "GONZALEZ SAUCEDO",
                    "FechaNacimiento": "2000/11/25",
                    "FechaAdmision": "2015/05/16",
                    "Sueldo": "2000",
                    "Puesto": "VENDEDOR" 
            
                },
                {
                    "ID": 5,
                    "Curp": "UYRT120908MIQIERA1",
                    "Nombre": "MIGUEL ANGEL",
                    "Apellidos": "SANCHEZ MORAN",
                    "FechaNacimiento": "2001/04/18",
                    "FechaAdmision": "2014/12/24",
                    "Sueldo": "7000",
                    "Puesto": "CONDUCTOR" 
                
                }
            ]
            this.setState({T})
         }


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
                                
                                <th>Curpg</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Fecha de Admisión</th>
                                <th>Sueldo</th>
                                <th>Puesto</th>                              
                               
                        </tr>
                        </thead>

                        <tbody>
                          {this.state.T.map(function(t,i){
                            return  (
                            <tr key={i}>
                                <td>{t.Curp}</td>
                                <td>{t.Nombre}</td>
                                <td>{t.Apellidos}</td>
                                <td>{t.FechaNacimiento}</td>
                                <td>{t.FechaAdmision}</td>
                                <td>{t.Sueldo}</td>
                                <td>{t.Puesto}</td>
                                
                            </tr> 
                            )
                          })}                               
                            </tbody>
                        </table > 
                        <br/><br/><hr/>

                       
                       
                         
                          <h3 className="text-left">Gestionar Trabajadores</h3>
        
                            
                            <center>
                            <div className="form-group row ">

                   
                            <div className="col-xs-4">
                                <label for="ex1">Nombre</label>
                                <input className="form-control" id="ex1" type="text"/>
                                <label for="ex1">Apellidos</label>
                                <input className="form-control" id="ex1" type="text"/>
                                <label for="ex1">Puesto</label>
                                <input className="form-control" id="ex1" type="text"/>
                            </div>
                            <div className="col-xs-3">
                                <label for="ex2">Fecha de Nacimiento</label>
                                <input className="form-control" id="ex2" type="text"/>

                                <label for="ex2">Fecha de Admisión</label>
                                <input className="form-control" id="ex2" type="text"/>

                                <label for="ex2">Sucursal</label>
                                <input className="form-control" id="ex2" type="text"/>
                            </div>
                            <div className="col-xs-2">
                                <label for="ex3">Curp</label>
                                <input className="form-control" id="ex3" type="text"/>
                                <label for="ex3">Sueldo</label>
                                <input className="form-control" id="ex3" type="text"/>
                               
                            </div>
                    </div>
                    <div className='conteiner-fluid'>
                   

                                <a href="#" className="btn btn-default" role="button">Crear</a>
                                <a href="#" className="btn btn-default" role="button">Actualizar</a>
                                <a href="#" className="btn btn-default" role="button">Eliminar</a>

                   </div>
                                </center>
                             
                          </div>
                       </div>
                       
                
            );
        }
    }
    
    export default trabajadores;