import React from 'react';
import { NavLink } from 'react-router-dom';


function Login(){
    //const [email, setEmail] = 
    return(
    <div>
        <div className="container">
            <div className="row  mt-5 ">
                <div className='col-md-3'></div>
                <div className='col-md-5 bg-dark'>
                    <div className = 'form-group mt-5 '>   
                        <label className ="text-white">Email address</label>
                        <input type="email" className="form-control"></input>
                    </div> 
                    <div className = 'form-group'>   
                        <label className ="text-white">Password</label>
                        <input type="password" className="form-control"></input>
                    </div>
                    <button className='my-5 btn btn-block btn-primary' >Login</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Login;