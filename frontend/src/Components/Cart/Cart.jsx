import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../Context/CartContext'; // Import CartContext

const Cart = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(CartContext); // Use cartItems, removeFromCart, and addToCart from CartContext

  const cartItemsList = cartItems.map((item) => (
    <div key={item.id} className="cart-item">
      <div className="item-info">
        <span>{item.name}</span>
        <span>${parseFloat(item.price.replace(/[^\d.]/g, ''))}</span> {/* Parse the price as a float */}
      </div>
      <div className="quantity">
        <button onClick={() => removeFromCart(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => addToCart(item)}>+</button>
      </div>
    </div>
  ));

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return total + itemPrice * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2>खरेदी </h2>
      {cartItems.length ? cartItemsList : <p>खरेदी वॉलेट रिकामे </p>}
      <div className="total">एकुण : ₹{totalPrice.toFixed(2)}</div> {/* Display the total with the currency symbol */}
    </div>
  );
};

export default Cart;
