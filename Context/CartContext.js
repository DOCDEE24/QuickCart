import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // avoid duplicates: if item already in cart, increase qty, otherwise add with qty 1
    setCartItems((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: qty } : p)));
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce((sum, i) => sum + (Number(i.price?.replace?.(/[^0-9.-]+/g, '')) || 0) * (i.quantity || 1), 0);

  const resetCart =() => {
  setCartItems([]);  
  }

  return (
  <CartContext.Provider
    value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      resetCart,
      total,
    }}
  >
    {children}
  </CartContext.Provider>
);
};

export const useCart = () => useContext(CartContext);