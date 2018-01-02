import React, {Component} from 'react';
import './trabajadores.css';
var Tinicial=
 [
    {

        "ID": 1,
        "Curp": "JIFB010925MASMGRA2",
        "Nombre": "BRENDA",
        "Apellidos": "JIMENEZ FIGUEROA",
        "FechaNacimiento": "2001-09-25",
        "FechaAdmision": "2017-08-21" ,
        "Sueldo": "5000",
        "Puesto": "ATENCION AL PUBLICO" 
    },
    {
        "ID": 2,
        "Curp": "CARG010921HDGHMRA5",
        "Nombre": "GERARDO",
        "Apellidos": "CHAVEZ ROMAN",
        "FechaNacimiento": "2001-09-21",
        "FechaAdmision": "2016-08-18",
        "Sueldo": "4500",
        "Puesto": "REPARADOR" 
    },
    {
        "ID": 3,
        "Curp": "CUGA010714HDGRRNA1",
        "Nombre": "ANGEL",
        "Apellidos": "CRUZ GARCIA",
        "FechaNacimiento": "2001-07-14",
        "FechaAdmision": "2013-10-21",
        "Sueldo": "5000",
        "Puesto": "GERENTE/DUEÑO" 

    },
    {
        "ID": 4,
        "Curp": "GOZE001107MDWEROA1",
        "Nombre": "ELIZABETH",
        "Apellidos": "GONZALEZ SAUCEDO",
        "FechaNacimiento": "2000-11-25",
        "FechaAdmision": "2015-05-16",
        "Sueldo": "2000",
        "Puesto": "VENDEDOR" 

    },
    {
        "ID": 5,
        "Curp": "UYRT120908MIQIERA1",
        "Nombre": "MIGUEL ANGEL",
        "Apellidos": "SANCHEZ MORAN",
        "FechaNacimiento": "2001-04-18",
        "FechaAdmision": "2014-12-24",
        "Sueldo": "7000",
        "Puesto": "CONDUCTOR" 
    
    }
]
    class trabajadores extends Component {
        constructor (props){
            super(props);
            // this.funeliminar() = this.funeliminar().bind(this);
            this.state = { 
                T: Tinicial,
                tipo:"text",
                tipo2: "text",
                row: {
                        ID: 0,
                        Curp: "",
                        Nombre: "",
                        Apellidos: "",
                        FechaNacimiento: "",
                        FechaAdmision: "",
                        Sueldo: "",
                        Puesto: "" 
                    },
                toogleform : true,
                id: 5,
                id2: null,
                mandar: null
             }
        }
         componentDidMount(){
            document.getElementById("eliminar").style.display = "none"
            // document.getElementById("FechaNacimiento").value = ""
            

         }
        onBlur=()=>{
            this.setState({tipo: 'text'})
        }
        onBlur2=()=>{
            this.setState({tipo2: 'text'})
        }
        
        onfocus=()=>{
            this.setState({tipo:'date'})
        }
        onfocus2=()=>{
            this.setState({tipo2:'date'})
        }
         refresh =()=>{
            this.setState({
                T:Tinicial
            })
         }
         change =(event)=>{
            var row = this.state.row;
            row[event.target.name] = event.target.value.toUpperCase();
            this.setState({
                row, 
            })
         }

         check=(idcheck)=> {
            
            var T=this.state.T;
            var ext= T.length;
            var mandar=idcheck-1;
            // console.log(idcheck)
 
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
                this.Traer(mandar);
                document.getElementById("eliminar").style.display = "inline"

            }else {
                this.restaurarForm()
                // this.Unchecked()
            }

         }

        // getTrabajadores () {
        //     this.setState({ T: Tinicial })
        // } 

        //  PARA ACTUALIZAR/CREAR
        ternaria= ()=>{
            if(this.state.toogleform){
                this.crear() 
                

            }this.actualizar()
        }
        // ACTIVAR BOTÓN ELIMINAR

        // funeliminar=()=>{
        //     if(this.state.toogleform){
        //         document.getElementById("eliminar").style.display = "none"

        //     }
        //     document.getElementById("eliminar").style.display= "inline"
        // }
        
        // PARA DESACTIVAR CHECKBOX
        // Unchecked = ()=>{
        //     this.restaurarForm()
        // }
        //  PARA CREAR
        crear= ()=>{
            console.log("iniciado")
            var ids=this.state.id+1;
            this.setState({
                id2: ids
            });

            var row = {
                ID: ids,
                Curp: this.state.row.Curp,
                Nombre: this.state.row.Nombre,
                Apellidos: this.state.row.Apellidos,
                FechaNacimiento: this.state.row.FechaNacimiento,
                FechaAdmision: this.state.row.FechaAdmision,
                Sueldo: this.state.row.Sueldo,
                Puesto: this.state.row.Puesto 
            }
                var equis=this.state.T.concat([row])
                Tinicial=equis
                this.refresh()
                    this.setState({
                        cambiaragg:1,id:ids
                    })
                    this.restaurarForm()
        }
        //  RESTAURAR FORMULARIO
        restaurarForm = () =>{
            let rowvar = {
                ID: null,
                Curp: "",
                Nombre: "",
                Apellidos: "",
                FechaNacimiento: "",
                FechaAdmision: "",
                Sueldo: "",
                Puesto: "" 
            }
            this.setState({
               row: rowvar, toogleform: true
            })
        }

        // PARA TRAER
        Traer =(mandar)=>{
            this.setState({mandar,toogleform: false})
            var T=this.state.T;
            var convertir=JSON.stringify(T);
            var obj=JSON.parse(convertir);
            var idacttra=obj[mandar].ID
            var Curpacttra=obj[mandar].Curp
            var Nombreacttra=obj[mandar].Nombre
            var Apellidosacttra=obj[mandar].Apellidos
            var FechaNacimientoacttra=obj[mandar].FechaNacimiento
            var FechaAdmisionacttra=obj[mandar].FechaAdmision
            var Sueldoacttra=obj[mandar].Sueldo
            var Puestoacttra=obj[mandar].Puesto

            this.setState({
                id2:idacttra
            })
            var row = {
                ID: idacttra,
                Curp: Curpacttra,
                Nombre: Nombreacttra,
                Apellidos: Apellidosacttra,
                FechaNacimiento: FechaNacimientoacttra,
                FechaAdmision: FechaAdmisionacttra,
                Sueldo: Sueldoacttra,
                Puesto: Puestoacttra 
            }
            this.setState({
                row
            })
        }
        // ACTUALIZAR

        actualizar=()=>{
            console.log("cambio")
            var mandar = this.state.mandar;
            var row = {
                ID: this.state.row.ID,
                Curp: this.state.row.Curp,
                Nombre: this.state.row.Nombre,
                Apellidos: this.state.row.Apellidos,
                FechaNacimiento: this.state.row.FechaNacimiento,
                FechaAdmision: this.state.row.FechaAdmision,
                Sueldo: this.state.row.Sueldo,
                Puesto: this.state.row.Puesto  
            }
            this.state.T[mandar]= row;
            
            console.log(this.state.T)
            this.refresh()
            this.restaurarForm()
        }

        // PARA ELIMINAR

        eliminar =()=>{
            var T= this.state.T
            var convertir=JSON.stringify(T)
            var obj=JSON.parse(convertir)
                for(var i=0; i<obj.length; i++){

                    if(obj[i].ID == this.state.id2){
                        obj.splice(i,1)

                        break;

                    }
                }
                this.setState({T:obj})
                console.log("Sin elemento: ", this.state.id2)
                this.restaurarForm()
                var extension=T.length
                document.getElementById("eliminar").style.display="none"

                for(var r=1;r<=extension;r++){
                    document.getElementById("checkbox"+r).checked=false
                }

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
                                <th></th>
                                <th>ID</th>
                                <th>Curp</th>
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
                              var iE=i+1;
                            return  (
                            <tr key={i}>
                                <td><label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input desc" id={'checkbox'+iE} onClick={()=>this.check(iE)}/>
                                    <span className="custom-control-indicator" id={'checkbox'+iE} onClick={()=>this.check(iE)}></span>
                                </label></td>
                                <td>{t.ID}</td>
                                <td>{t.Curp}</td>
                                <td>{t.Nombre}</td>
                                <td>{t.Apellidos}</td>
                                <td>{t.FechaNacimiento}</td>
                                <td>{t.FechaAdmision}</td>
                                <td>{t.Sueldo}</td>
                                <td>{t.Puesto}</td>
                                
                            </tr> 
                            )
                          },this)}                               
                            </tbody>
                        </table > 
                        <br/><br/><hr/>

                       
                       
                         
                          <h3 className="text-left">Gestionar Trabajadores</h3>
        
                            
                            <center>
                            <div className="form-group row ">

                   
                            <div className="col-xs-4">
                                <label htmlFor="ex1">Nombre</label>
                                <input className="form-control" value={this.state.row.Nombre} name="Nombre" id="Nombre" onChange={this.change} type="text"/>
                                <label htmlFor="ex1">Apellidos</label>
                                <input className="form-control" value={this.state.row.Apellidos} name="Apellidos" id="Apellidos" onChange={this.change} type="text"/>
                                <label htmlFor="ex1">Puesto</label>
                                <input className="form-control" value={this.state.row.Puesto} name="Puesto" id="Puesto" onChange={this.change} type="text"/>
                            </div>
                     
                            <div className="col-xs-2">
                                <label htmlFor="ex3">Curp</label>
                                <input className="form-control"  value={this.state.row.Curp} name="Curp" id="Curp" onChange={this.change} type="text"/>
                                <label htmlFor="ex3">Sueldo</label>
                                <input className="form-control" value={this.state.row.Sueldo} name="Sueldo" id="Sueldo" onChange={this.change} type="text"/>
                                <input className="form-control" value={this.state.row.id2} name="ID" id="ID" onChange={this.change} type="hidden"/>
                            </div>
                            <div className="col-xs-3">
                                <label htmlFor="ex2">Fecha de Nacimiento</label>
                                <input className="form-control" value={this.state.row.FechaNacimiento} name="FechaNacimiento" id="FechaNacimiento"  onChange={this.change} type={ this.state.tipo } onFocus={this.onfocus} onBlur={this.onBlur}/>

                                <label htmlFor="ex2">Fecha de Admisión</label>
                                <input className="form-control" value={this.state.row.FechaAdmision} name="FechaAdmision" id="FechaAdmision"  onChange={this.change} type={ this.state.tipo2 } onFocus={this.onfocus2} onBlur={this.onBlur2}/>
                               
                            </div>
                    </div>
                    <div className='conteiner-fluid'>
                   

                               
                                <button type="button"  className="btn btn-default" onClick={this.ternaria.bind()}>{this.state.toogleform ? 'Crear' : 'Actualizar'}</button>
                                <button type="button" id="eliminar" className="btn btn-default" onClick={this.eliminar.bind()}>Eliminar</button>
                                {/* <button type="button"  className="btn btn-default" onClick={this.eliminar.bind()}>Cancelar</button> */}
                                 

                   </div>
                                </center>
                             

                          </div>
                       </div>
                       
                
            );
        } 
    }
    
    export default trabajadores;