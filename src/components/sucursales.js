import React, {Component} from 'react';
import './sucursales.css';
var sinicial=
[
    {
        "ID": 1,
        "Ciudad": "AGUASCALIENTES",
        "Pais": "MEXICO",
        "Direccion": "OJOCALIENTE I #213",
        "Telefono": "4499150881"
    },
    {
        "ID": 2,
        "Ciudad": "DURANGO",
        "Pais": "MEXICO",
        "Direccion": "ZARAGOZA #109 SUR ZONA CENTRO C.P: 34000",
        "Telefono": "6181532456"
    },
    {
        "ID": 3,
        "Ciudad": "DURANGO",
        "Pais": "MEXICO",
        "Direccion": "MEXICO 45, DURANGO",
        "Telefono": "016188174748"
    },
    {
        "ID": 4,
        "Ciudad": "TLAXCALA",
        "Pais": "MEXICO",
        "Direccion": "SAN FRNASISCO, TLAXCALA DE XICOHTENATL, CENTRO, 90000 TLAXCALA DE XICOHTENATL",
        "Telefono": "012464621511"
    },
    {
        "ID": 5,
        "Ciudad": "FLORENCIA",
        "Pais": "ITALIA",
        "Direccion": "PONTE VECCHIO, 50125 FIRENZE FI",
        "Telefono": "39055294883"
    }
]

class sucursales extends Component {
   constructor(props){
       super(props)
       this.state={
        s:sinicial
    }
   }
    render() {

        return (
            <div>
                
            <div clasName="container">
            <h2 className="text-center">Sucursales</h2>
            <br/>
                <div className="table-container margen">
                <table className="table-container table table-bordered table-striped">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ciudad</th>
                            <th>País</th>
                            <th>Dirección</th>
                            <th>Telefono</th>
                        </tr>
                        
                    </thead>
        
                    <tbody>
                    {this.state.s.map(function(s,i){
                        var iE=i+1;
                        return(
                            <tr key={i}>
                            <td>{s.ID}</td>
                            <td>{s.Ciudad}</td>
                            <td>{s.Pais}</td>
                            <td>{s.Direccion}</td>
                            <td>{s.Telefono}</td>
                            </tr>
                        )
                    })}

                    </tbody>

                   
                </table>
                <hr/>
                    <br/><br/><br/>

                    <h3 clasName="text-left">Gestionar Sucursales</h3>
                </div>

     
            </div>
        </div>
        
            
        );
    }
}

export default sucursales;
