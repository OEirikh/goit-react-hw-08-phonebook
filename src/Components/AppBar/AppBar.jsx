import React from 'react';
import Navigatin from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';

function AppBar() {
  return (
    <div>
      <Navigatin />
      <UserMenu />
    </div>
  );
}

export default AppBar;
