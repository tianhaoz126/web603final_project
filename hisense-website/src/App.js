import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Grocery from './components/Grocery';
import Login from './components/Login';
import { UserContext } from './UserContext'; // Import UserContext
import logo from './logo.svg';

function App() {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Hisense Logo" className="App-logo" />
          <h1>Hisense Refrigerator AI</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              {user ? (
                <>
                  <li><Link to="/user">User</Link></li>
                  <li><Link to="/grocery">Grocery</Link></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </>
              ) : (
                <li><Link to="/login">Login</Link></li>
              )}
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={user ? <User /> : <Login />} />
            <Route path="/grocery" element={user ? <Grocery /> : <Login />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer>
          <div className="footer-content">
            <p>&copy; 2024 Hisense. All rights reserved.</p>
            <div className="footer-links">
              <a href="/">Privacy Policy</a> | 
              <a href="/">Terms of Service</a> | 
              <a href="/">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;