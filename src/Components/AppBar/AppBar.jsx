import React from 'react';
import s from './AppBar.module.css';
// import PropTypes from 'prop-types';
import Navigatin from './Navigation/Navigation';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';

function AppBar() {
  return (
    <div className={s.nav}>
      <Navigatin />
      <AuthNav />
      <UserMenu />
    </div>
  );
}

// AppBar.propTypes = {};

export default AppBar;
