import React from 'react';

function Lesson2() {
  const baseUrl = `https://api.github.com/users/`;
  const [user, setUser] = React.useState(null);
  const [userName, setUserName] = React.useState('lorimccurry');
  const searchInput = React.useRef();

  React.useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    // fetch(endpoint)
    // .then(response => response.json())
    // .then(data => setUser(data))
    const response = await fetch(`${baseUrl}${userName}`);
    const data = await response.json();
    setUser(data);
  }

  function handleClearInput() {
    searchInput.current.value = '';
    searchInput.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search User"
        onChange={e => setUserName(e.target.value)}
        ref={searchInput}
      />
      <button onClick={getUser}>Search</button>
      <button onClick={handleClearInput}>Clear</button>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <img src={user.avatar_url} alt="avatar" style={{ height: 50 }} />
        </div>
      ) : (
        <p>loading....</p>
      )}
    </div>
  );
}

export default Lesson2;
