import React from 'react';
import groceryImage from '../images/grocery.jpg';

function Grocery() {
  return (
    <section>
      <h2>Grocery Shopping</h2>
      <img src={groceryImage} alt="Grocery Shopping" />
      <ul>
        <li>Apples - $2.99/lb</li>
        <li>Bananas - $1.29/lb</li>
        <li>Carrots - $1.99/lb</li>
        <li>Milk - $3.49/gal</li>
        <li>Bread - $2.49/loaf</li>
      </ul>
      <p>Conveniently order your groceries online and have them delivered straight to your door.</p>
    </section>
  );
}

export default Grocery;
