import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <svg className="me-2" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
            <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Aura News
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/technology' ? 'active' : ''}`} to="/technology">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/science' ? 'active' : ''}`} to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/environment' ? 'active' : ''}`} to="/environment">
                Environment
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/random' ? 'active' : ''}`} to="/random">
                Random News
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 