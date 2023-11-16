import React, { useRef, useState } from 'react'
import Topbar from '../Components/Topbar/Topbar'
import Footer from '../Components/Footer/Footer'
import { Link } from "react-router-dom";
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function Register() {
  const [ show, setShow ] = useState( false );
    const handleClick = () => {
        const emailValue = email.current?.value;
        const passwordValue = password.current?.value
    }
    const hide_show_password = async()=>{
        setShow( !show );
    }
    const email = useRef(null);
    const password = useRef(null);

  return (
    <>
        <div className="main">
            <Topbar/>
            <div className="register-page">
                <form>
                    <h3 className='form-head'>Register</h3>
                    <div className="form-outline form-floating mb-4">
                        <input type="text" id="registerName" className="form-control" placeholder='Name' />
                        <label className="form-label" htmlFor="registerName">Name</label>
                    </div>

                    <div className="form-outline form-floating mb-4">
                        <input type="email" id="registerEmail" className="form-control" placeholder='Email' />
                        <label className="form-label" htmlFor="registerEmail">Email</label>
                    </div>

                    <div className="form-outline form-floating mb-4">
                        <input type="password" id="registerPassword" className="form-control" placeholder='Password' />
                        <label className="form-label" htmlFor="registerPassword">Password</label>
                    </div>

                    <div className="form-outline form-floating mb-4">
                        <input type="password" id="registerRepeatPassword" className="form-control" placeholder='Confirm Password' />
                        <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-3">Register</button>

                    <div className="text-center">
                        <p>Already have an account? <Link to={'/login'}>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
    </>
  )
}
