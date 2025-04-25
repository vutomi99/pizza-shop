import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (pizza, toppings, totalPrice) => {
    setCartItems(prev => [
      ...prev,
      { id: Date.now(), pizza, toppings, totalPrice },
    ]);
  };

  const removeFromCart = (id) => setCartItems(prev => prev.filter(item => item.id !== id));
  const clearCart = () => setCartItems([]);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
