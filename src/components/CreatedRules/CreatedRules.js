import React from 'react';
import './CreatedRules.css'

const CreatedRules = () => {
    return (
        <div>
            <div classNameName='container'>
                <div classNameName='row'>
                    <div classNameName='col-12'>
                        <button classNameName='btn new-rule-btn'>
                            <span classNameName='add-icon'>
                                <i classNameName="fa fa-plus" aria-hidden="true"></i>
                            </span> Create New Rule</button>
                    </div>
                </div>
                <div classNameName='row'>
                    <div classNameName='col-12'>
                    <table classNameName="table form-table">
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
                    <button className="btn expand" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      Expand
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
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
                  <th scope="row">4</th>
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
                  <th scope="row">5</th>
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
                </tbody>
                </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatedRules