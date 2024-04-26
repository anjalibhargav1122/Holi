import React from 'react'
import img from './holi img/fest.jpg'
import './Cs.css'
import { NavLink } from 'react-router-dom'

const Holi = () => {
  return (
    <div>
      <div className='container-fluid bx_sd '>
        <div className='container'>
          <nav className="navbar navbar-expand-lg navbar-light bg-transparant">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img className='w-25 h-25' src={img} /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink to='/' className='text-decoration-none'>
                      <a className="nav-link fs-3 ft " aria-current="page" href="#">Home</a></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to='/coffee' className='text-decoration-none'>
                      <a className="nav-link fs-3 ft ms-5" aria-current="page" href="#">Coffee</a></NavLink>

                  </li>


                </ul>

              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Holi