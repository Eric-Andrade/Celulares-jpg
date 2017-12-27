import React, {Component} from 'react';
import './prueba.css';

class Prueba extends Component {
    state = {  }
    render() {
        return (
          <div>  
            <div className="card mb-5">
            <div className="card-header">Fearures</div>
            <div className="card-block p-0">
                <table className="table table-bordered table-sm m-0">
                    <thead className="">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Registration Date</th>
                            <th>E-mail address</th>
                            <th>Premium Plan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input desc"/>
                                    <span className="custom-control-indicator"></span>
                                </label>
                            </td>
                            <td>John Lilki</td>
                            <td>September 14, 2013</td>
                            <td>jhlilk22@yahoo.com</td>
                            <td>No</td>
                        </tr>
                    </tbody>    
            </table>
            </div>
            </div>
        </div>
        );
    }
}

export default Prueba;
