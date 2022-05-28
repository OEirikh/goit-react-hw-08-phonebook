import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from 'redux/AuthSlise';
import { useUserLogoutMutation } from 'redux/AuthApi';
import { logOutUser } from 'redux/AuthSlise';
// import PropTypes from 'prop-types'

function UserMenu() {
  const name = useSelector(getUserName);
  const [userLogout, { data, isError, error }] = useUserLogoutMutation();
  const dispatch = useDispatch();
  console.log('data', data, 'error', error, isError);

  return (
    <div>
      <h2>UserMenu</h2>
      <p>Hey!{name}</p>
      <button
        type="button"
        onClick={() => {
          userLogout();
          dispatch(logOutUser());
        }}
      >
        LogOut
      </button>
    </div>
  );
}

// UserMenu.propTypes = {}

export default UserMenu;
