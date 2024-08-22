import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext'; // Import UserContext

const products = [
  { id: 1, name: 'Apples', price: 1.99, image: `${process.env.PUBLIC_URL}/images/apples.jpg` },
  { id: 2, name: 'Bananas', price: 0.99, image: `${process.env.PUBLIC_URL}/images/bananas.jpg` },
  { id: 3, name: 'Carrots', price: 0.89, image: `${process.env.PUBLIC_URL}/images/carrots.jpg` },
  { id: 4, name: 'Almond Milk', price: 2.49, image: `${process.env.PUBLIC_URL}/images/almondmilk.jpg` },
  { id: 5, name: 'Whole Wheat Bread', price: 2.29, image: `${process.env.PUBLIC_URL}/images/bread.jpg` },
];

function Grocery() {
  const { user } = useContext(UserContext); // Get user from context
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (product, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const checkout = () => {
    alert(`Checkout - Total: $${getTotal()}`);
    setCart([]);
  };

  return (
    <section>
      <h2>Welcome, {user.name}!</h2> {/* Display the user's name */}
      <h3>Grocery Shopping</h3>
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="shopping-cart">
        <h3>Your Shopping Cart</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <h4>{item.name}</h4>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>
                  Quantity: 
                  <input 
                    type="number" 
                    value={item.quantity} 
                    min="1" 
                    onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
                  />
                </p>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <h4>Total: ${getTotal()}</h4>
        <button onClick={checkout} disabled={cart.length === 0}>
          Checkout
        </button>
      </div>
    </section>
  );
}

export default Grocery;
