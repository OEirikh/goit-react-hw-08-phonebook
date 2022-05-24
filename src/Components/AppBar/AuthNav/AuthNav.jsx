import React from 'react';
import { NavLink } from 'react-router-dom';

// import PropTypes from 'prop-types'

function AuthNav(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="register"
              // className={({ isActive }) =>
              //   isActive ? activeClassName : undefined
              // }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// AuthNav.propTypes = {}

export default AuthNav;
