import React from 'react';
import { Link } from 'react-router';

export const Header = props => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="navbar-brand">
            <b>Employee Directory</b>
          </div>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to={'/Home'}>Home</Link>
          </li>
          <li>
            <Link to={'/About'}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
