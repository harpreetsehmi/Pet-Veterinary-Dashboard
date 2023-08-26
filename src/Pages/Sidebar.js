import React from 'react'
import logo from "../Assets/lgo.png"
import dash from "../Assets/d.png"
import service from "../Assets/s.png"
import pet from "../Assets/p.png"
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-details">
        
      <Link to="/dashboard"><img src={logo} alt="logo"/></Link>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#" className="active">
            <i className="bx bx-grid-alt"><img src={dash} alt="icon"/></i>
           <Link to="/dashboard"><span className="links_name">Dashboard</span></Link> 
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-box"><img src={pet} alt="icon"/></i>
            <Link to="/petmanagement"><span className="links_name">Pet Management</span></Link>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-list-ul"><img src={service} alt="icon"/></i>
            <Link to="/services"><span className="links_name">Service List</span></Link>
          </a>
        </li>
       
      </ul>
    </div>
  )
}

export default Sidebar