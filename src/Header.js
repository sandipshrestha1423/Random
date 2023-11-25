import React, { useEffect } from 'react';
function Header({name }) {
  useEffect(() => {
    console.log('Name prop changed:', name);
  }, [name]);
  return (
    <>
      <div className="header">
        <h1>Hey "{name}"</h1>
      </div>
    </>
  );
}

export default Header;
