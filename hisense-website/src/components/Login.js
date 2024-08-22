import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext'; // Import UserContext

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Get setUser from context

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated user data for authentication
    const mockUser = {
      id: 1,
      email: 'janesmith@example.com',
      password: 'password123',
      name: 'Jane Smith',
      preferences: {
        store: 'Whole Foods',
        diet: 'Vegetarian',
        cuisine: 'Italian',
      },
      orderHistory: [
        { id: 1, date: 'Aug 20, 2024', items: ['Apples', 'Almond Milk'] },
        { id: 2, date: 'Sep 5, 2024', items: ['Bananas', 'Whole Wheat Bread'] },
        { id: 3, date: 'Sep 19, 2024', items: ['Carrots', 'Almond Milk'] },
      ],
    };

    if (email === mockUser.email && password === mockUser.password) {
      setUser(mockUser);
      navigate('/user');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <section>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default Login;
