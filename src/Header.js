import React, { useContext } from 'react';
import UserContext from './context/UserContext';
function Header() {
  const { user } = useContext(UserContext);
  
  return (

    <>
      <div className="header">
        <h1>Hey "{user.name }"</h1>
      </div>
    </>
  );
}

export default Header;
