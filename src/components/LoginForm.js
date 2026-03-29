import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayStatus from './DisplayStatus';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (messageType === 'success') {
      const timer = setTimeout(() => {
        navigate('/flavors');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [messageType, navigate]);

  const handleLogin = async () => {
    if (!username || !password) {
      setMessageType('error');
      setMessage('Username and password cannot be empty.');
      return;
    }

    if (password.length < 8) {
      setMessageType('error');
      setMessage('Password must be at least 8 characters.');
      return;
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      const user = users.find(
        (u) => u.username === username && u.email.toLowerCase() === password.toLowerCase()
      );

      if (user) {
        setMessageType('success');
        setMessage('Login successful');
      } else {
        setMessageType('error');
        setMessage('Invalid username or password.');
      }
    } catch (error) {
      setMessageType('error');
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
      <h2>Login</h2>
      <div style={{ marginBottom: '15px' }}>
        <label>Username </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Password </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      <p>
        <a href="#!" style={{ background: 'none', color: '#8b4a2b', padding: '0' }}>
          Forgot Password?
        </a>
      </p>
      {message && <DisplayStatus type={messageType} message={message} />}
    </form>
  );
}

export default LoginForm;
