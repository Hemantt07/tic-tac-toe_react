import React, { useRef, useState } from 'react'
import Topbar from '../Components/Topbar/Topbar'
import Footer from '../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import axios from 'axios';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function Login() {
  const [ show, setShow ] = useState( false );
  
    const handleClick = async (e) => {
        try {
            e.preventDefault();
    
            const res = await fetch('http://127.0.0.1:8000/');
            const result = await response.json();
            console.log(result); 
        } catch (error) {
            console.log(error);
        }
    };
    const hide_show_password = async()=>{
        setShow( !show );
    }
    const email= useRef(null);
    const password= useRef(null);

  return (
    <>
    <div className="main">
        <Topbar/>
        <div className='login-page'>
            <form>
                <h3 className='form-head'>Login</h3>
                <div className="form-outline form-floating mb-4">
                    <input type="email" id="loginName" className="form-control" autoComplete='off' placeholder='Username'/>
                    <label className="form-label" htmlFor="loginName">Email or username</label>
                </div>

                <div className="form-outline form-floating mb-4">
                    <input type={show ? 'text' : 'password'} id="loginPassword" className="form-control" autoComplete='off' placeholder='Password'/>
                    <label className="form-label" htmlFor="loginPassword">Password</label>
                    <RemoveRedEyeIcon className='removePass' onClick={hide_show_password}/>
                </div>

                <div className="row mb-4">
                    <div className="col-md-6 d-flex justify-content-start">
                    <div className="form-check mb-3 mb-md-0">
                        <input className="form-check-input" type="checkbox" id="loginCheck" defaultChecked />
                        <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                    </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-end">
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleClick}>Log in</button>

                <div className="text-center">
                    <p>Not a member? <Link to={'/register'}>Register</Link></p>
                </div>
            </form>
        </div>
    </div>
    <Footer/>
    </>
  )
}
