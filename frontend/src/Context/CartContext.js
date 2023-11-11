// context/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (allProducts) => {
    const existingItem = cartItems.find((item) => item.id === allProducts.id);

    if (existingItem) {
      setCartItems((prevItems) => {
        return prevItems.map((item) =>
          item.id === allProducts.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      });
    } else {
      setCartItems((prevItems) => [...prevItems, { ...allProducts, quantity: 1 }]);
    }

    // Update the cart count
    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    // Update the cart count
    setCartCount((prevCount) => Math.max(0, prevCount - 1));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
