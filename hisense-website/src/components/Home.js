import React from 'react';
import fridgeImage from '../images/fridge.jpg';

function Home() {
  return (
    <section>
      <h2>Revolutionize Your Kitchen</h2>
      <img src={fridgeImage} alt="Smart Fridge" />
      <p>
        Discover the latest in AI-powered kitchen technology with the Hisense Refrigerator. 
        Manage your groceries, track food expiration dates, and get personalized recipe suggestions all from one place.
      </p>
    </section>
  );
}

export default Home;
