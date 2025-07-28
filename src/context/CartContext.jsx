import React, {  useState } from "react";
const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    setCartList(prev =>
      prev.find(i => i.id === item.id)
        ? prev.map(i =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...prev, { ...item, quantity: 1 }]
    );
  };

  const increaseQuantity = (id) => {
    setCartList(prev =>
      prev.map(i =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartList(prev =>
      prev
        .map(i =>
          i.id === id && i.quantity > 1
            ? { ...i, quantity: i.quantity - 1 }
            : i
        )
        .filter(i => i.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartList(prev => prev.filter(i => i.id !== id));
  };

  const clearCart = () => setCartList([]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;