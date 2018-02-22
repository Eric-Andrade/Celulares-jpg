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
        mandar:null,
        desactivar:true,
        toogle:true
    }
   }
   componentDidMount(){
    document.getElementById("eliminar").style.display = "none"

   }

   Change =(event)=>{

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
    // Validación del Back
        var Ciudad=row.Ciudad.trim()
        var Pais=row.Pais.trim()
        var Direccion=row.Direccion.trim()
        var Telefono=row.Telefono.trim()

        if(/^[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]$/g.test(Ciudad)){
            if(/^[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]$/g.test(Pais)){
                    if(/^[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ00-9\.#.;,? ]$/g.test(Direccion)){
                        if(/^[0-9]$/g.test(Telefono)){
                            this.setState({desactivar:true})
                        }else{this.setState({desactivar:false})
                            console.log("Telefono incorrecto")}
                    }else{this.setState({desactivar:false})
                        console.log("Direccion incorrecto")}
            }else{this.setState({desactivar:false})
                console.log("Pais incorrecto")}
        }else{this.setState({desactivar:false})
            console.log("Ciudad incorrecto")}
            if(Ciudad.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,20}")){
                console.log("Ciudad correcta")
                    if(Pais.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,20}")){
                        console.log("Pais correcto")
                        if(Direccion.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ00-9\.#.;,? ]")){
                            console.log("Direccion correcta")
                                if(Telefono.match("[0-9]{10,13}")){
                                    this.setState({desactivar:false})
                                    console.log("Telefono correcto")
                                }else{this.setState({desactivar:true})}
                        }else{this.setState({desactivar:true})}
                    }else{this.setState({desactivar:true})}
            }else{this.setState({desactivar:true})
                console.log("Ciudad incorrecta")}

   }
   Check=(idcheck)=>{
       var s=this.state.s
       var ext=s.length
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
        document.getElementById("eliminar").style.display = "none"
        
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
    toogle:true,
        row:rowvar
    })
    
   }

   ternaria=()=>{
       if(this.state.toogle){
           this.crear()
       }this.Actualizar()
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
    this.setState({mandar,toogle:false})
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
    this.setState({row,toogle:false})
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
     
    //  this.refresh()
     this.restaurarform()
     this.setState({desactivar:true})
     var s=this.state.s
      var extension=s.length

      for(var r=1;r<=extension;r++){
          document.getElementById('checkbox'+r).checked=false
      }
      document.getElementById("eliminar").style.display="none"
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
    this.setState({desactivar:true})
    var extension=s.length
    document.getElementById("eliminar").style.display="none"

    for(var r=1;r<=extension;r++){
        document.getElementById("checkbox"+r).checked=false
    }
}
    render() {

        return (
            <div>
                
            <div className="container">
            <h1 className="text-center">Sucursales</h1>
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
                            <tr key={i}className="cool">
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
                    <hr/>
                    <br/>
                    <h2 className="text-center">Gestionar Sucursales</h2>
                    <br/>

                    <div className="form-group row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                            <label htmlFor="ex-1" className="letra">Ciudad</label>
                            <input className="form-control" value={this.state.row.Ciudad} onChange={this.Change} name="Ciudad" id="Ciudad" type="text" minLength="2" maxLength="20" required pattern="[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,20}" />

                            <br/>
                            
                            <label htmlFor="ex-1" className="letra">Telefono</label>
                            <input className="form-control" value={this.state.row.Telefono} onChange={this.Change} name="Telefono" id="Telefono" type="text" minLength="10" maxLength="13" required pattern="[0-9]{10,13}" />    
                        </div>

                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">

                            <label htmlFor="ex-1" className="letra">País</label>
                            <input className="form-control" value={this.state.row.Pais} onChange={this.Change} name="Pais" id="Pais" type="text" minLength="2" maxLength="20" required pattern="[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,20}" />

                        </div>

                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <label htmlFor="ex-1" className="letra">Dirección</label>
                            <input className="form-control" value={this.state.row.Direccion} onChange={this.Change} name="Direccion" id="Direccion" type="text" minLength="2" maxLength="100" required pattern="[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ00-9\.#.;,? ]{2,100}" />

                            <input className="form-control" type="hidden"/>
                        </div>
    
                    </div>

                   <center>
                       <br/>
                   
                        <button type="button"  className="btn btn-default margenbtn" onClick={this.ternaria.bind()} disabled={this.state.desactivar}>{this.state.toogle ? 'Crear' : 'Actualizar'}</button>
                        <button type="button"  className="btn btn-default margenbtn" id="eliminar" onClick={this.eliminar}>Eliminar</button>
                  
                    </center>
            </div>
        </div>
        
            
        );
    }
}

export default sucursales;
