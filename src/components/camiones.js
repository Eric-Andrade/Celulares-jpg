import React, {Component} from 'react';
import './camiones.css';
var cainicial=[
    {
        "ID": 1,
        "Placa": "NK-64-956",
        "Capacidad": "800KG",
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
            ca:cainicial,
            row: {
                ID: 0,
                Placa: "",
                Capacidad: "",
                Modelo: "",
                Año: ""
            },
            id:3,
            id2:null,
            mandar:null,
            toogle:true,
            desactivar:true

        }
    }
    componentDidMount(){
        document.getElementById("eliminar").style.display = "none"
    
       }
    refresh=()=>{
        this.setState({
            ca:cainicial})
    }
    Change =(event)=>{
      
        var row = this.state.row;
        row[event.target.name] = event.target.value.toUpperCase();
        this.setState({
            row
        })

        var rowVacio={
            ID: null,
            Placa: "",
            Capacidad: "",
            Modelo: "",
            Año: "",
            
        }
        // Validación del back
        var Placa=row.Placa.trim()
        var Capacidad=row.Capacidad.trim()
        var Modelo=row.Modelo.trim()
        var Año=row.Año.trim()

        if(/^([A-Z]{2}-[0-9]{2}-[0-9]{3})$/g.test(Placa)){
            console.log("Placa correcta")
                if(/^(([1-9]{1}[0-9]{2,8}KG))$/g.test(Capacidad)){
                    console.log("Capacidad correcta")
                        if(/^([A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{3,20})$/g.test(Modelo)){
                            console.log("Modelo correcto")
                                if(/^[1-2]{1}(\d{3})$/g.test(Año)){
                                    this.setState({desactivar:false})
                                    console.log("Año correcto")
                                }else{this.setState({desactivar:true})}
                        }else{this.setState({desactivar:true})
                            console.log("Modelo incorrecto")}
                }else{this.setState({desactivar:true})
                    console.log("Capacidad incorrecta")}
        }else{this.setState({desactivar:true})
            console.log("Placa incorrecta")}

            // if(Placa.match("([A-Z]{2}-[0-9]{2}-[0-9]{3}){9,9}")){
            //     if(Capacidad.match("([1-9]{1}([0-9]{1,8})*KG)")){
            //         if(Modelo.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{3,20}")){
            //             if(Año.match("[1-9]{1}([0-9]{1,4})*")){
            //                     this.setState({desactivar:false})
            //             }else{this.setState({desactivar:true})}
            //         }else{this.setState({desactivar:true})}
            //     }else{this.setState({desactivar:true})}
            // }else{this.setState({desactivar:true})}


 
    }

    Check=(idcheck)=>{
        var ca=this.state.ca
        var ext=ca.length
        var mandar=idcheck-1
        this.setState({desactivar:true})

        if (ext!=idcheck){
            for(var x=1;x!=idcheck;x++){
            document.getElementById('checkbox'+x).checked = false;
            // console.log("Desactivado= ",x)
            }
        }
        if(ext===idcheck){
        var exte = ext-1; 
        for(exte; exte!=0;exte--){
            document.getElementById('checkbox'+exte).checked = false;
            // console.log("Desactivado= ",exte)
    
        }
        }
        for(ext; ext!=idcheck; ext--){
            document.getElementById('checkbox'+ext).checked = false;
            // console.log("Desactivado= ",ext)
    
        }
        if(document.getElementById('checkbox'+idcheck).checked){
            this.leer(mandar);
            document.getElementById("eliminar").style.display = "inline"
    
        }else {
            this.restaurarform()
            // this.Unchecked()
            // document.getElementById("eliminar").style.display = "none"
            
        }
    }

    restaurarform=()=>{
        let rowvar ={
            ID: 0,
            Placa: "",
            Capacidad: "",
            Modelo: "",
            Año: ""
        }
        this.setState({
           row: rowvar,toogle:true

        })
        document.getElementById("eliminar").style.display="none"
    }

    ternaria=()=>{
        if(this.state.toogle){
            this.crear()
        }this.actualizar()
    }
    crear=()=>{
        var ids=this.state.id+1
        this.setState({
            id2:ids})

        var row={
            ID:ids,
            Placa:this.state.row.Placa,
            Capacidad:this.state.row.Capacidad,
            Modelo:this.state.row.Modelo,
            Año:this.state.row.Año
        }

        var equis=this.state.ca.concat([row])
        cainicial=equis
        this.refresh()
        this.setState({
            cambiaragg:1,id:ids})
        this.restaurarform()

    }
    leer=(mandar)=>{

        this.setState({mandar,toogle:false})
        var ca=this.state.ca
        var convertir=JSON.stringify(ca)
        var obj=JSON.parse(convertir)

        var IDl=obj[mandar].ID
        var Placal=obj[mandar].Placa
        var Capacidadl=obj[mandar].Capacidad
        var Modelol=obj[mandar].Modelo
        var Añol=obj[mandar].Año

        this.setState({id2:IDl})

        var row={
            ID:IDl,
            Placa:Placal,
            Capacidad:Capacidadl,
            Modelo:Modelol,
            Año:Añol
        }
        this.setState({row})

    }
    actualizar=()=>{
        var mandar=this.state.mandar
        var row={
            ID:this.state.row.ID,
            Placa:this.state.row.Placa,
            Capacidad:this.state.row.Capacidad,
            Modelo:this.state.row.Modelo,
            Año:this.state.row.Año
        }
        this.state.ca[mandar]=row

        // this.refresh()
        this.restaurarform()
        this.setState({desactivar:true})
        var ca=this.state.ca
        var extension=ca.length
        for(var r=1;r<=extension;r++){
            document.getElementById('checkbox'+r).checked=false
        }
        document.getElementById("eliminar").style.display="none"

    }
    eliminar=()=>{
    var ca=this.state.ca
    var convertir=JSON.stringify(ca)
    var obj=JSON.parse(convertir)

    for(var i=0;i<ca.length;i++){
        console.log(obj[i].ID)
        console.log(this.state.id2)
        if(obj[i].ID==this.state.id2){
            obj.splice(i,1)
            break;
        }
    }
    this.setState({ca:obj})
    console.log("Sin elemento: ", this.state.id2)
    this.restaurarform()
    this.setState({desactivar:true})

    var extension=ca.length
    document.getElementById("eliminar").style.display="none"

    for(var r=1;r<=extension;r++){
        document.getElementById("checkbox"+r).checked=false
    }

    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Camiones</h1>
                <br/>

                <div className="table-container" id="letratabla">

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
                                <tr key={i} className="cool">
                                    <td><label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input desc" id={"checkbox"+iE} onClick={()=>this.Check(iE)} />
                                    <span className="custom-control-indicator " id={"checkbox"+iE} onClick={()=>this.Check(iE)} ></span>
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

                </div>
                <br/>
                <hr/>
                
                    
                        <div className="form-group row cenin">
                        <h2>Gestionar Camiones</h2>
                        <br/>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <label className="letra">Placa</label>
                                <input className="form-control" type="text" value={this.state.row.Placa} name="Placa" id="Placa" onChange={this.Change} minLength="9" maxLength="9" required pattern="([A-Z]{2}-[0-9]{2}-[0-9]{3})"/>

                                <label className="letra">Capacidad</label>
                                <input className="form-control" type="text" value={this.state.row.Capacidad} name="Capacidad" id="Capacidad" onChange={this.Change} minLength="3" maxLength="8" required pattern="(([1-9]{1}[0-9]{2,8}KG))"/>
                            </div>

                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <label className="letra">Modelo</label>
                                <input className="form-control" type="text" value={this.state.row.Modelo} name="Modelo" id="Modelo" onChange={this.Change} minLength="3" maxLength="20" required pattern="[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{3,20}"/>

                                <label className="letra">Año</label>
                                <input className="form-control" type="text" value={this.state.row.Año} name="Año" id="Año" onChange={this.Change} minLength="4" maxLength="4" required pattern="[1-9]{1}([0-9]{1,4})*"/>

                                <input type="hidden"></input>

                            </div>
                            <button type="button" className="btn btn-default margenbtn"onClick={this.ternaria.bind()}disabled={this.state.desactivar}>{this.state.toogle ? 'Crear' : 'Actualizar'}</button>
                            <button type="button" className="btn btn-default margenbtn" id="eliminar" onClick={this.eliminar.bind()}>Eliminar</button>
                        </div>

                        
                  
                


            </div>
            
        );
    }
}

export default camiones;