import React from 'react'
import './Sidebar.css';

const Sidebar = ({ data }) => {
  return (
    <div className="d-flex align-items-start">
      <div className="nav flex-column nav-pills me-3 sidebar-border" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <ul className="nav flex-column nav-fill">
        {data.map((dataList, index) => (
        <li key={index} className="nav-item ">
          <a href='#'>{dataList.name}</a>
          {/* <span><img src={dataList.img} /></span> */}
          
        </li>
      ))}
        </ul>
        </div>
    </div>
  )
}

export default Sidebar