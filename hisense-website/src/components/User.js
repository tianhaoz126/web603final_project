import React, { useContext } from 'react';
import { UserContext } from '../UserContext'; // Import UserContext

function User() {
  const { user } = useContext(UserContext); // Get user from context

  return (
    <section>
      <h2>Your Profile</h2>
      <img src={`${process.env.PUBLIC_URL}/images/user.jpg`} alt="User" />
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <div className="user-preferences">
        <h3>Your Preferences</h3>
        <ul>
          <li>Preferred Store: {user.preferences.store}</li>
          <li>Dietary Preferences: {user.preferences.diet}</li>
          <li>Favorite Cuisine: {user.preferences.cuisine}</li>
        </ul>
      </div>

      <div className="order-history">
        <h3>Your Recent Orders</h3>
        <ul>
          {user.orderHistory.map((order) => (
            <li key={order.id}>
              Order #{order.id} - Delivered on {order.date}
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default User;
