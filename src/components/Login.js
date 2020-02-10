import React from 'react';

function Login({ setUser }) {
  const [username, setUsername] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setUser(username);
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Input username"
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
