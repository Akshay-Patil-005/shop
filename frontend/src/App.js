import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Khad from './Pages/Khad';
import Dhanya from './Pages/Dhanya';
import Khat from './Pages/Khat';
import Cart from '../src/Components/Cart/Cart';
import Center from './Pages/Center';
import Footer from './Components/Footer/Footer';
// import Product from './Components/Assets/Product'; // Update with the correct path

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevItems) => {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      });
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Khad />} />
          <Route path="/Dhanya" element={<Dhanya />} />
          <Route path="/Khat" element={<Khat />} />
          <Route
            path="/Center"
            element={<Center addToCart={addToCart}  removeFromCart={removeFromCart} />}
          />
          <Route
            path="/Cart"
            element={<Cart items={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
