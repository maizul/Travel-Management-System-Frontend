import React from 'react';
import { Link } from 'react-router-dom';
const AUsers = (props) => {
    const {id,name,email,phone,password}=props.item
    return (
        

            <div className="image-cards col-md-3">
                
               <table>
              
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{name}</td>
                        </tr>
                        <tr>   
                            <td>ID:</td>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <td>email:</td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td>phone:</td>
                            <td>{phone}</td>
                        </tr>
                        <tr>
                            <td>password:</td>
                            <td>{password}</td>
                        </tr>
                        
                        
                        
                    </tbody>
                    <Link to={"/userdelete/"+id}><h4><b>Delete</b></h4></Link>
                </table>
            </div>
    );
};

export default AUsers;