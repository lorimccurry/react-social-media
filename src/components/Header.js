import React from 'react';

function Header({ user, setUser }) {
  return (
    <div>
      Welcome, {user}
      <button onClick={e => setUser('')}>Logout</button>
    </div>
  );
}

export default Header;
