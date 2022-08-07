import React from 'react'

import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div>

      <footer className="text-center text-lg-start bg-dark text-muted">

        <section
          className="d-flex justify-content-center justify-content-lg-between bg-danger p-4 border-bottom"
        >

          <div className="me-5 fs-4 mx-3 p-0 d-none d-lg-block text-white">
            <span>Get connected with us on social networks:</span>
          </div>

          <div class="social-links">
            <a href="/" className="bg-white"><i className="fab fa-facebook-f"></i></a>
            <a href="/" className="bg-white"><i className="fab fa-instagram"></i></a>
            <a href="/" className="bg-white"><i className="fab fa-twitter"></i></a>
            <a href="/" className="bg-white"><i className="fab fa-github"></i></a>
            <a href="/" className="bg-white"><i className="fab fa-linkedin-in"></i></a>
          </div>



        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-white">

                <h6 className="text-capatise fw-bold mb-4 fs-5">
                  <img src={logo} alt="logo" className="rounded-circle mx-2" height={40} width={40} />
                  <span style={{ color: "red" }}>D</span>eepak <span style={{ color: "red" }}>I</span>nterior
                </h6>
                <p>
                  Our company provide best services in the field of Interior Designing
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-white">

                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">Home</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Furniture</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Interior Decor</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Laravel</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-white">

                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-white">

                <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <p><i className="fas fa-home me-3"></i> Shop No.G-45, Shivaji Complex ,Becharaji, Mahasana (Gujarat) , 384210</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  deepakinterior17@gmail.com
                </p>
                <p><i className="fas fa-phone me-3"></i> 7486865244</p>
                <p><i className="fas fa-mobile me-3"></i> 9911825013</p>
              </div>

            </div>

          </div>
        </section>

        <div className="text-center p-4 text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="/"> Deepak Interior</a>
        </div>

      </footer>

    </div>
  )
}

export default Footer