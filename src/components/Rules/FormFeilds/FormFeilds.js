import React, { useState } from 'react'
import './FormFeilds.css'
import path from "../../../assets/images/Path 65234.png"

const TableRow = ({ id, onDelete }) => {
    const handleDelete = () => {
        onDelete(id);
    };
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>
                <input type='text' placeholder='age' defaultValue="age" className="form-control age-form-input" />
            </td>
            <td>
                <button className="btn btn-outline-secondary dropdown-toggle form-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Integer
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Age</a></li>
                </ul>
            </td>
            <td>
                <button onClick={handleDelete} className='delete-button'><img src={path} /></button>
            </td>
        </tr>
    );
};
const FormFeilds = () => {
    const [rows, setRows] = useState([]);
    let [idCounter, setIdCounter] = useState(2);

    const addRow = () => {
        const newId = idCounter;
        setIdCounter((prevId) => prevId + 1);
        setRows((prevRows) => [...prevRows, { id: newId }]);
    };

    const deleteRow = (id) => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    };
    return (
        <div>
            <div className='container'>
                <div className='row form-buttons'>
                    <div className='col-6' >
                        <div id="radio-form-input">
                            <div className="form-check form-check-inline" >
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Upload Swagger</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                <label className="form-check-label" htmlFor="inlineRadio2">Input Manually</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <button type="button" className="btn addrow-btn" onClick={addRow}>
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
                                    <td><input type='text' placeholder='age' defaultValue="age" className="form-control age-form-input"></input></td>
                                    <td>
                                        <button className="btn btn-outline-secondary dropdown-toggle form-dropdown"
                                            type="button" data-bs-toggle="dropdown" aria-expanded="false">Integer</button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Age</a></li>
                                        </ul>
                                    </td>
                                    <td>
                                     <button onClick={deleteRow} className='delete-button'><img src={path} /></button></td>
                                </tr>
                                {rows.map((row) => (
                                    <TableRow key={row.id} id={row.id} onDelete={deleteRow} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormFeilds