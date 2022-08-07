import React from 'react'
import "./Facility.scss"

const Facility = () => {
  return (
    <div className="home mt-5">
      <h1 className="text-center">Our Facilities</h1>
      <div className="d-flex flex-row">
      <hr className="line"/>
      <div className="container mx rounded-circle">
      </div>      
      <hr className="line2"/>
      </div>
      <div className="home1 container d-flex flex-wrap">
        <div className="home_details mx-5 px-3">
          <div className="home1_img">
          {/* <i class="fa-solid fa-lamp bg-danger text-bg-secondary"></i> */}
            <i className="fa-solid fa-couch bg-danger text-bg-secondary"></i>
          </div>
          <h5 className="mt-2">Office Furniture</h5>
          <p>This is the data for facility</p>
        </div>
        <div className="home_details mx-5 px-3">
          <div className="home1_img  rounded-circle">
          <i className="fa-solid fa-couch bg-warning text-bg-secondary"></i>
          </div>
          <h5 className="mt-2">Interior Decortor</h5>
          <p>This is the data for facility</p>

        </div>
        <div className="home_details mx-5 px-3">
          <div className="home1_img  rounded-circle">
            <i className="fa-solid fa-couch bg-success text-bg-secondary"></i>
          </div>
          <h5 className="mt-2">Wooden Partition</h5>
          <p>This is the data for facility</p>
        </div>
        <div className="home_details mx-5 px-3">
          <div className="home1_img  rounded-circle">
            <i className="fa-solid fa-couch bg-primary text-bg-secondary"></i>
          </div>
          <h5 className="mt-2">Aluminium Partition</h5>
          <p>This is the data for facility</p>
        </div>
      </div>
    </div>
  )
}

export default Facility;