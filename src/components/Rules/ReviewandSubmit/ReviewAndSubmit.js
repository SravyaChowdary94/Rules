import React from 'react'
import path from "../../../assets/images/Path 65234.png"
import './ReviewAndSubmit.css'
const ReviewAndSubmit = () => {
 
  return (
    <>
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <table className="table form-table">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Condition Definition</th>
                  <th scope="col">Order</th>
                  <th scope="col">Continue On Fail</th>
                  <th scope="col">Expression Details</th>
                  <th scope="col">No. Of Then Conditions</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <p> </p>
                  </td>
                  <td>
                    <p> </p>
                  </td>
                  <td>
                    <p>Fail</p>
                  </td>
                  <td>
                    <p>e1 && e2</p>
                  </td>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <button className="btn expand" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      Expand
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="collapse" id="collapseExample">
                      <div>
                        <div className='row form-buttons'>
                          <div className='col-6'>
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
                                  <td><input type='text' placeholder='18' onChange="18" className="form-control feild-age-form-input"></input></td>
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
                                  <td><input type='text' placeholder='Result' onChange="Result" className="form-control age-form-input"></input></td>
                                  <td><input type='text' placeholder='Eligible' onChange="Eligible" className="form-control age-form-input"></input></td>
                                  <td><img src={path} /></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    <p> </p>
                  </td>
                  <td>
                    <p> </p>
                  </td>
                  <td>
                    <p>Fail</p>
                  </td>
                  <td>
                    <p>e1 && e2</p>
                  </td>
                  <td>
                    <p>2</p>
                  </td>
                  <td>
                    <button className="btn expand" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                      Expand
                    </button>
                  </td>
                </tr>
                <tr>
                  <div className="collapse" id="collapseExample1">
                    <div>
                      <div className='row form-buttons'>
                        <div className='col-6' >
                          <p>
                            When Condition
                          </p>
                        </div>
                        <div className='col-6'>
                          <button type="button" className="btn edit-btn">
                            <span className='add-icon'>
                              <i className="fa fa-plus" aria-hidden="true"></i>
                            </span>
                            Edit
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
                                <td><input type='text' placeholder='18' onChange="18" className="form-control feild-age-form-input"></input></td>
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
                          <button type="button" className="btn edit-btn">
                            <span className='add-icon'>
                              <i className="fa fa-plus" aria-hidden="true"></i>
                            </span>
                            Edit
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
                                <td><input type='text' placeholder='Result' onChange="Result" className="form-control age-form-input"></input></td>
                                <td><input type='text' placeholder='Eligible' onChange="Eligible" className="form-control age-form-input"></input></td>
                                <td><img src={path} /></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default ReviewAndSubmit