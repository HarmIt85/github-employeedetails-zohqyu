import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/employeedetails" className="nav-link">
            Employee Details
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
