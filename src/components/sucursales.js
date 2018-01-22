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
        s:sinicial,
        row:{
            ID:0,
            Ciudad:"",
            Pais:"",
            Direccion:"",
            Telefono:""
        },
        id:5,
        id2:null,
        mandar:null
    }
   }
   componentDidMount(){
    document.getElementById("eliminar").style.display = "none"

   }

   Change =(event)=>{
       var ids=this.state.ID+1
       this.setState({id2:ids})
    var row=this.state.row
    row[event.target.name] = event.target.value.toUpperCase();
    this.setState({row})

        var rowvacio={
            ID:null,
            Ciudad:" ",
            Pais:" ",
            Direccion:" ",
            Telefono:" "
        }

   }
   Check=(idcheck)=>{
       var s=this.state.s
       var ext=s.length
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

   refresh=()=>{
       this.setState({s:sinicial})
   }
   
   restaurarform=()=>{
       
    let  rowvar={
        ID:null,
        Ciudad:"",
        Pais:"",
        Direccion:"",
        Telefono:""
    }
    this.setState({
        row:rowvar
    })
   }
   crear=()=>{
       console.log("iniciado")
    var ids=this.state.id+1
    this.setState({
        id2:ids
    })
    var row={
        ID:ids,
        Ciudad: this.state.row.Ciudad,
        Pais: this.state.row.Pais,
        Direccion: this.state.row.Direccion,
        Telefono: this.state.row.Telefono

    }
    var create=this.state.s.concat([row])
    sinicial=create
    this.refresh()
        this.setState({
            cambiaragg:1, id:ids
        })
        this.restaurarform()


}

leer =(mandar)=>{
    this.setState({mandar})
    var s=this.state.s
    var convertir=JSON.stringify(s);
    var obj=JSON.parse(convertir)
    var IDl=obj[mandar].ID
    var Ciudadl=obj[mandar].Ciudad
    var Paisl=obj[mandar].Pais
    var Direccionl=obj[mandar].Direccion
    var Telefonol=obj[mandar].Telefono

    this.setState({id2:IDl})

    var row={
        ID:IDl,
        Ciudad:Ciudadl,
        Pais:Paisl,
        Direccion:Direccionl,
        Telefono:Telefonol
    }
    this.setState({row})
}

Actualizar=()=>{
     var mandar=this.state.mandar
     var row={
         ID:this.state.row.ID,
         Ciudad:this.state.row.Ciudad,
         Pais:this.state.row.Pais,
         Direccion:this.state.row.Direccion,
         Telefono:this.state.row.Telefono
     }
     this.state.s[mandar]=row
     
     this.refresh()
     this.restaurarform()
     var s=this.state.s
      var extension=s.length

      for(var r=1;r<=extension;r++){
          document.getElementById('checkbox'+r).checked=false
      }
      document.getElementById("").style.display="none"
}

eliminar=()=>{
    var s=this.state.s
    var convertir=JSON.stringify(s)
    var obj=JSON.parse(convertir)

    for(var i=0;i<s.length;i++){
        console.log(obj[i].ID)
        console.log(this.state.id2)
        if(obj[i].ID==this.state.id2){
            obj.splice(i,1)

            
            break;

        }
    }
    this.setState({s:obj})
    

    this.restaurarform()

    var extension=s.length
    document.getElementById("eliminar").style.display="none"

    for(var r=1;r<=extension;r++){
        document.getElementById("checkbox"+r).checked=false
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
                            <th></th>
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
                             <td><label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input desc" id={"checkbox"+iE} onClick={()=>this.Check(iE)} />
                                    <span className="custom-control-indicator " id={"checkbox"+iE} onClick={()=>this.Check(iE)} ></span>
                                </label></td>
                            <td>{s.ID}</td>
                            <td>{s.Ciudad}</td>
                            <td>{s.Pais}</td>
                            <td>{s.Direccion}</td>
                            <td>{s.Telefono}</td>
                            </tr>
                        )
                    },this)}

                    </tbody>

                   
                </table>
            
                    
                </div>
            </div>
            <div className="margen container">
            <br/><br/><br/>
                    <hr/>

                    <h3 clasName="text-left">Gestionar Sucursales</h3>
                    <br/><br/>

                    <div className="form-group row">
                        <div className="col-xs-3">

                            <label htmlFor="ex-1">Ciudad</label>
                            <input className="form-control" value={this.state.row.Ciudad} onChange={this.Change} name="Ciudad" id="Ciudad" type="text" />

                            <br/>
                            
                            <label htmlFor="ex-1">Telefono</label>
                            <input className="form-control" value={this.state.row.Telefono} onChange={this.Change} name="Telefono" id="Telefono" type="text" />    
                        </div>

                        <div className="col-xs-3 ">

                            <label htmlFor="ex-1">País</label>
                            <input className="form-control" value={this.state.row.Pais} onChange={this.Change} name="Pais" id="Pais" type="text" />

                        </div>

                        <div className="col-xs-6">
                            <label htmlFor="ex-1">Dirección</label>
                            <input className="form-control" value={this.state.row.Direccion} onChange={this.Change} name="Direccion" id="Direccion" type="text" />

                            <input className="form-control" type="hidden"/>
                        </div>
    
                    </div>

                   <center>
                       <br/>
                   <div clasName="conteiner-fluid">
                        <button type="button"  className="btn btn-default" onClick={this.crear}>Crear</button>
                        <button type="button"  className="btn btn-default" id="eliminar" onClick={this.eliminar}>Eliminar</button>
                   </div>
                    </center>
            </div>
        </div>
        
            
        );
    }
}

export default sucursales;
