import React, { useState } from 'react';
import './LoggaIn.css';

function LoggaIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="login-container">
      <h2>Logga in</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Användarnamn:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        
        <label htmlFor="password">Lösenord:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        
        <button type="submit">Logga in</button>
      </form>
      <a href="/forgot-password">Glömt lösenord?</a>
    </div>
  );
}

export default LoggaIn;
