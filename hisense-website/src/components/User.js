import React from 'react';
import userImage from '../images/user.jpg';

function User() {
  return (
    <section>
      <h2>Your Profile</h2>
      <img src={userImage} alt="User" />
      <p><strong>Name:</strong> Jane Smith</p>
      <p><strong>Email:</strong> janesmith@example.com</p>
      <p>Welcome back! Here you can update your preferences, view your shopping history, and manage your account settings.</p>
    </section>
  );
}

export default User;
