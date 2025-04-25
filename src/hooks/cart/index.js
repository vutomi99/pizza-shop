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
      { id: Date.now(), pizza, toppings, quantity: 1, totalPrice },
    ]);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice:
                (item.pizza.price + item.toppings.reduce((sum, t) => sum + t.price, 0)) * (item.quantity + 1),
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.id === id && item.quantity > 1) {
          const newQuantity = item.quantity - 1;
          return {
            ...item,
            quantity: newQuantity,
            totalPrice:
              (item.pizza.price + item.toppings.reduce((sum, t) => sum + t.price, 0)) * newQuantity,
          };
        }
        return item;
      })
    );
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
