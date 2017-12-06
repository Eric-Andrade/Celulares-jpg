import React, {Component} from 'react';
import './iniciosesion.css';

class iniciosesion  extends Component {
    state = {  }
    render() {
        return (
          
            <div className='container-fluid'>
                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Iniciar Sesión</button>

                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                    

                    <div className="modal-content text-left">
                        <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Iniciar Sesión</h4>
                        </div>
                        <div className="modal-body">
                            <form action="/action_page.php">
                                <div className="form-group"/>
                                <label for="email">Usuario:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter Usuario" name="email"/>
                            
                                <div className="form-group"/>
                                <label for="pwd">Contraseña:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter Contraseña" name="pwd"/>
                                <br/>
                                <div className="checkbox"/>
                                {/* <label><input type="checkbox" name="remember"/> Remember me</label> */}
                                <div className= 'text-right'>
                                <button type="submit" className=" btn btn-default">Entrar</button>
                                </div>
                            </form>  
                        </div>
                        {/* <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div> */}
                    </div>
                    
                    </div>
            </div>
            </div>
        );
    }
}

export default iniciosesion;