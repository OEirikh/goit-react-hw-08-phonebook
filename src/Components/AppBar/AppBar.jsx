import React from 'react';
// import PropTypes from 'prop-types';
import Navigatin from './Navigation/Navigation';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/AuthSlise';

function AppBar() {
  // const getToken = state => state.auth;

  const isLogin = useSelector(getIsLogin);
  console.log(isLogin);

  // console.log(isLogin);
  return (
    <div>
      <Navigatin />
      {!isLogin ? <AuthNav /> : <UserMenu />}
    </div>
  );
}

// AppBar.propTypes = {};

export default AppBar;
