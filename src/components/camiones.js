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
            activar:true

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
        var ids=this.state.ID+1
        this.setState({id2:ids})
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

        if(/^([A-Z]{2}-\d{2}-\d{3})*$/g.test(Placa)){
            this.setState({activar:true})
            console.log("Placa correcta")
                if(/^(\d{1,4}KG)*$/g.test(Capacidad)){
                    this.setState({activar:true})
                    console.log("Capacidad correcta")
                        if(/^([A-Z]{2}-\d{2}-\d{3}[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{3,20})*$/g.test(Modelo)){
                            this.setState({activar:true})
                            console.log("Modelo correcto")
                                if(/^[0-9]*$/g.test(Año)){
                                    this.setState({activar:true})
                                    console.log("Año correcto")
                                }else{this.setState({activar:false})}
                        }else{this.setState({activar:false})
                            console.log("Modelo incorrecto")}
                }else{this.setState({activar:false})
                    console.log("Capacidad incorrecta")}
        }else{this.setState({activar:false})
            console.log("Placa incorrecta")}


            if(Placa.match("([A-Z]{2}-\d{2}-\d{3}){9,9}")){
                if(Capacidad.match("(\d{1,4}KG){1,4}")){
                    if(Modelo.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{3,20}")){
                        if(Año.match("[0-9]{4,4}")){
                                this.setState({activar:true})
                        }else{this.setState({activar:false})}
                    }else{this.setState({activar:false})}
                }else{this.setState({activar:false})}
            }else{this.setState({activar:false})}


 
    }

    Check=(idcheck)=>{
        var ca=this.state.ca
        var ext=ca.length
        var mandar=idcheck-1

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

        this.refresh()
        this.restaurarform()
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
    
    this.restaurarform()

    var extension=ca.length
    document.getElementById("eliminar").style.display="none"

    for(var r=1;r<=extension;r++){
        document.getElementById("checkbox"+r).checked=false
    }

    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Camiones</h2>
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
                <br/>
                <hr/>
                <h3 className="text-left">Gestionar Camiones</h3>
                <br/>
                
                    <center>
                        <div className="form-group row">
                            <div className="col-xs-4">
                                <label>Placa</label>
                                <input className="form-control" type="text" value={this.state.row.Placa} name="Placa" id="Placa" onChange={this.Change} minlength="9" maxlength="9"required pattern="([A-Z]{2}-\d{2}-\d{3}){9,9}"/>

                                <label>Capacidad</label>
                                <input className="form-control" type="text" value={this.state.row.Capacidad} name="Capacidad" id="Capacidad" onChange={this.Change} minlength="1" maxlength="4" required pattern="(\d{1,4}KG){1,4}"/>
                            </div>

                            <div className="col-xs-4">
                                <label>Modelo</label>
                                <input className="form-control" type="text" value={this.state.row.Modelo} name="Modelo" id="Modelo" onChange={this.Change} minlength="3" maxlength="20" required pattern="[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{3,20}"/>

                                <label>Año</label>
                                <input className="form-control" type="text" value={this.state.row.Año} name="Año" id="Año" onChange={this.Change} minlength="4" maxlength="4" required pattern="[0-9]{4,4}"/>

                                <input type="hidden"></input>
                            </div>

                        </div>

                        <button type="button" className="btn btn-default" onClick={this.ternaria.bind()} disabled={this.state.activar}>{this.state.toogle ? 'Crear' : 'Actualizar'}</button>
                        <button type="button" className="btn btn-default" id="eliminar" onClick={this.eliminar}>Eliminar</button>
                    </center>
                </div>


            </div>
            
        );
    }
}

export default camiones;