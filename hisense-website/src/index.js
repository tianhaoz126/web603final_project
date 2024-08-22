import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { UserProvider } from './UserContext'; // Import UserProvider

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
