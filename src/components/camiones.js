import React, {Component} from 'react';
import './camiones.css';
var cainicial=[
    {
        "ID": 1,
        "Placa": "NK-64-956",
        "Capacidad": "80KG",
        "Modelo": "SCANIA",
        "Año": "2018"
    },
    {     
        "ID": 2,
        "Placa": "KY-00-783",
        "Capacidad": "300KG",
        "Modelo": "MAN",
        "Año": "2018"
    },
    {
        
        "ID": 3,
        "Placa": "EC-67-239",
        "Capacidad": "100KG",
        "Modelo": "HINO",
        "Año": "1999"
    }
]

class camiones extends Component {
    constructor(props){
        super(props)

        this.state={
            ca:cainicial

        }
    }
    render() {
        return (
            <div className="container">
                <h2 className="text-center">Celulares</h2>
                <br/>

                <div className="table-conteiner">

                <table className="table-container table table-bordered table-striped" >
                    <thead>
                        <th></th>
                        <th>ID</th>
                        <th>Placa</th>
                        <th>Capacidad</th>
                        <th>Modelo</th>
                        <th>Año</th>
                    </thead>

                    <tbody>
                        {this.state.ca.map(function(ca,i){
                            var iE=i+1
                            return(
                                <tr key={i}>
                                    <td><label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input desc" />
                                    <span className="custom-control-indicator" ></span>
                                    </label></td>
                                    <td>{ca.ID}</td>
                                    <td>{ca.Placa}</td>
                                    <td>{ca.Capacidad}</td>
                                    <td>{ca.Modelo}</td>
                                    <td>{ca.Año}</td>
                                </tr>
                            )
                        },this)}
                    </tbody>
                </table>
                <br/>
                <hr/>

                <div className="margen">
                </div>
                </div>


            </div>
            
        );
    }
}

export default camiones;