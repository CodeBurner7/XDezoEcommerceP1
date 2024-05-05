// // CartContext.js
// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product, quantity) => {
//     setCartItems([...cartItems, { product, quantity }]);
//   };
//   console.log(cartItems);

//   const removeFromCart = (productId) => {
//     setCartItems(cartItems.filter(item => item.product.id !== productId));
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);




import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product, quantity) => {
    setCartItems([...cartItems, { product, quantity }]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.product.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const calculateShippingFee = () => {
    const totalAmount = calculateTotalAmount();
    if (totalAmount > 100000) {
      return 0; // Free shipping for orders over Rs100
    } else {
      return 100; // free rate shipping fee for orders under Rs100
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, calculateTotalAmount, calculateShippingFee, isLoggedIn, setIsLoggedIn }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
