import React from 'react'
import path from "../../../assets/images/Path 65234.png"
import './FeildsandCondition.css'

const FeildsandConditions = () => {
  return (
    <div>
      <div className='container'>
        <div>
          <div className='row'>
            <div className='col-12'>
                <div className='condition'>
                <div className='condition-check'>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue="" 
                id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Continue On Fail
                </label>
              </div>
              </div>
              <div className='condition-input'>
                <div className="col-auto condition-form-check">
                  <input type="text" id="condition defination" 
                  className="form-control" aria-labelledby="Condition defeination" />
                </div>
                <div className="col-auto">
                  <input type="text" id="Rule Order" 
                  className="form-control" aria-labelledby="Rule Order" />
                </div>
              </div>
                </div>
            </div>
          </div>
        </div>
        <div className='row form-buttons'>
          <div className='col-6' >
            <p>
              When Condition
            </p>
          </div>
          <div className='col-6'>
            <button type="button" className="btn addrow-btn">
              <span className='add-icon'>
                <i className="fa fa-plus" aria-hidden="true"></i>
              </span>
              Add Row
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <table className="table form-table">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Field</th>
                  <th scope="col">Operator</th>
                  <th scope="col">Another Field</th>
                  <th scope="col">And / Or</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <button className="btn btn-outline-secondary dropdown-toggle form-dropdown form-dropdowns dropdown-button"
                      type="button" data-bs-toggle="dropdown" aria-expanded="false">$ Age:interger</button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Age</a></li>
                    </ul>
                  </td>
                  <td>
                    <button className="btn btn-outline-secondary dropdown-toggle form-dropdown form-dropdowns dropdown-button"
                      type="button" data-bs-toggle="dropdown" aria-expanded="false">grater than</button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">less than and equal</a></li>
                    </ul>
                  </td>
                  <td><input type='text' placeholder='18' defaultValue="18" className="form-control feild-age-form-input"></input></td>
                  <td>
                    <button className="btn btn-outline-secondary dropdown-toggle form-dropdown form-dropdowns dropdown-button"
                      type="button" data-bs-toggle="dropdown" aria-expanded="false">Or</button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">And</a></li>
                    </ul>
                  </td>
                  <td><img src={path} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='row form-buttons'>
          <div className='col-6' >
            <p>
              Then Condition
            </p>
          </div>
          <div className='col-6'>
            <button type="button" className="btn addrow-btn">
              <span className='add-icon'>
                <i className="fa fa-plus" aria-hidden="true"></i>
              </span>
              Add Row
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <table className="table form-table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Field Name (Spaces are not allowed)</th>
                  <th scope="col">Data Type</th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td><input type='text' placeholder='Result' 
                  defaultValue="Result" className="form-control age-form-input"></input></td>
                  <td><input type='text' placeholder='Eligible' 
                  defaultValue="Eligible" className="form-control age-form-input"></input></td>
                  <td><img src={path} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeildsandConditions