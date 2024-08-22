import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Grocery from './components/Grocery';
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Hisense Logo" className="App-logo" />
          <h1>Hisense Refrigerator AI</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/user">User</Link></li>
              <li><Link to="/grocery">Grocery</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/grocery" element={<Grocery />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Hisense. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

