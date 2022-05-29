import React from 'react';
// import PropTypes from 'prop-types';
import Navigatin from './Navigation/Navigation';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getLoggedin } from 'redux/AuthSlise';

function AppBar() {
  const Loggedin = useSelector(getLoggedin);

  return (
    <div>
      <Navigatin />
      {!Loggedin ? <AuthNav /> : <UserMenu />}
    </div>
  );
}

// AppBar.propTypes = {};

export default AppBar;
