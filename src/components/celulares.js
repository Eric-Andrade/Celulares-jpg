import React, {Component} from 'react';
import './celulares.css';
var ceinicial=
[
    {
        "IdCelular":1,
        "Marca": "SAMSUNG",
        "Modelo": "GRAND PRIME",
        "Ensamblado":"REINO UNIDO" ,
        "Precio": 15000
    },
    {
        "IdCelular":2,
        "Marca": "MOTOROLA",
        "Modelo": "MOTO G5 PLUS",
        "Ensamblado":"MEXICO" ,
        "Precio": 5000
    },
    {
        "IdCelular":3,
        "Marca": "APPLE",
        "Modelo": "IPHONE X",
        "Ensamblado":"DUBAI" ,
        "Precio": 250000
    },
    {
        "IdCelular":4,
        "Marca": "LG",
        "Modelo": "LG K3",
        "Ensamblado":"CHINA" ,
        "Precio": 1300
    },
    {
        "IdCelular":5,
        "Marca": "HUAWEI",
        "Modelo": "P9 LITE",
        "Ensamblado":"BRASIL" ,
        "Precio": "2150"
    }
]
class celulares extends Component {
    constructor(props){
        super(props)
            this.state={
                ce:ceinicial,
                row: {
                    ID:0,
                    Marca:"",
                    Modelo:"",
                    Ensamblado:"",
                    Precio:"",
                },
                // id:3,
                // id2:null,
                // mandar:null,
                // toogle:true,
                // desactivar:true
    

        }
    }
    render() {
        return (
            <div className="container">
                <h1>Celulares</h1>
                <br/>

                <div className="table-container" >
                    <table>
                        <thead>
                            <th></th>
                            <th>ID</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Ensamblado</th>
                            <th>Precio</th>

                        </thead>

                        <tbody>
                            {this.state.ce.map(function(i,ce) {
                                var iE=i+1
                                return(
                                    <tr key={i}>
                                        
                                        <td>{ce.ID}</td>
                                        <td>{ce.Marca}</td>
                                        <td>{ce.Modelo}</td>
                                        <td>{ce.Ensamblado}</td>
                                        <td>{ce.Precio}</td>
                                        
                                    </tr>
                                )
                                
                            },this)}
                        </tbody>
                    </table>
                </div>
            </div>
            
        );
    }
}

export default celulares;