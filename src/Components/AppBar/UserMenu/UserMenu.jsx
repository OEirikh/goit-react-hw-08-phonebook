import React from 'react';

import { useSelector } from 'react-redux';
import { getUserName } from 'redux/AuthSlise';
import { useUserLogoutMutation } from 'redux/AuthApi';

function UserMenu() {
  const name = useSelector(getUserName);
  const [userLogout] = useUserLogoutMutation();

  return (
    <div>
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

export default UserMenu;
