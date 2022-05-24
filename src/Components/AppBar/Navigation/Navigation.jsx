import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types'

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              // style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contacts"
              // className={({ isActive }) =>
              //   isActive ? activeClassName : undefined
              // }
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// Navigation.propTypes = {}

export default Navigation;
