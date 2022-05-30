import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types'

function Navigation() {
  return (
    <div>
      <nav>
        <NavLink
          to="contacts"
          // className={({ isActive }) =>
          //   isActive ? activeClassName : undefined
          // }
        >
          Contacts
        </NavLink>
      </nav>
    </div>
  );
}

// Navigation.propTypes = {}

export default Navigation;
