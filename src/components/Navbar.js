import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm">
        <div className="container-fluid">
          <div className="">
            <img src={logo} alt="logo" className='mx-1 mt-1' height={40} weight={40} />
          </div>
          <a className="navbar-brand my-0" href="/"><span style={{ color: "red" }}>D</span>eepak <span style={{ color: "red" }}>I</span>nterior</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0 fs-5">
              <li className="nav-item px-2">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link active" href="/">Appliances Repair</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link active" href="/">Furniture's</a>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link active" to="Contact">Contact Us</Link>
              </li>

              <li className="nav-item px-2">
                <a className="nav-link active" href="/">About</a>
              </li>
            </ul>
            <div className="justify-content-sm-center">
              <ul className='d-flex flex-row mt-3 pt-0 mx-5'>
                <button className='btn btn-outline-danger rounded-1 py-2'><i class="fa fa-credit-card" aria-hidden="true"></i> Payment</button>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar