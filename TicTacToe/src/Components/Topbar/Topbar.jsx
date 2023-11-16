import "./Topbar.css"
import React from 'react'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <div className='topbar container-fluid d-flex justify-content-between align-items-center mb-5'>
        <div className="logo">
            <Link to={'/'}>
                <img src="/icon.png" alt="logo" className='img-fluid' />
            </Link>
        </div>

        <div className="nav">
          <ul className="navbar list-unstyled m-0">
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/register'}>Register</Link></li>
          </ul>
        </div>
    </div>
  )
}
