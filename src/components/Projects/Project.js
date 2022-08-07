import React, { useState } from 'react'
import project from './ProjectItem';
import './Project.css'
const Project = () => {
  const [items, setItems] = useState(project);

  const filterItem = (category) => {

    const updateItems = project.filter((curElem) => {
      return curElem.category === category;
    })
    setItems(updateItems);
  }
  return (
    <div className="project container">
      <h2 className="mt-5 text-center main-heading">Project Work's</h2>
      <div className="d-flex flex-row">
      <hr className="line"/>
      <div className="container1 mx-4 rounded-circle">
      </div>      
      <hr className="line2"/>
      </div>
      <div className="project_list container">
        <div className="project-tab d-flex">
          <button className="btn btn-danger mx-4" onClick={() => filterItem('furniture')}>Furniture</button>
          <button className="btn btn-danger mx-4" onClick={() => filterItem('Aluminium')}>Aluminium</button>
          <button className="btn btn-danger mx-4" onClick={() => filterItem('Design')}>Interior Design</button>
          <button className="btn btn-danger mx-4" onClick={() => filterItem('')}>Furniture</button>
          <button className="btn btn-danger mx-4" onClick={() => setItems(project)}>All</button>
        </div>
      </div>
      <div className="project-items container-fluid mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {
                items.map((elem) => {
                  const { id, image, category } = elem;

                  return (
                    <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4">
                      <div className="row Item-inside">
                        <div className="col-12 col-md-8 col-lg-4 img-div rounded-3">
                          <img src={image} alt="" height={400} width={400} className="p-4 rounded-4" />
                        </div>
                      </div>
                    </div>

                  )
                })}



            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Project