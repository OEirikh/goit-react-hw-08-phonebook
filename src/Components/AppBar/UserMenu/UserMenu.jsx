import React from 'react';
import { useSelector } from 'react-redux';
import { getUserName } from 'redux/AuthSlise';
import { useUserLogoutMutation } from 'redux/AuthApi';
// import PropTypes from 'prop-types'

function UserMenu() {
  const name = useSelector(getUserName);
  const [userLogout] = useUserLogoutMutation();

  return (
    <div>
      <h2>UserMenu</h2>
      <p>Hey!{name}</p>
      <button
        type="button"
        onClick={() => {
          userLogout();
        }}
      >
        LogOut
      </button>
    </div>
  );
}

// UserMenu.propTypes = {}

export default UserMenu;
