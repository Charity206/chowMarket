import { useState } from "react";
import {CartContext}   from "./CartContext";

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const [showCart, setShowCart] = useState(false);

  // ADD TO CART
  const addToCart = (food) => {

    setCart([...cart, food]);

  };

  // REMOVE ITEM
  const removeItem = (id) => {

    setCart(cart.filter((item) => item.id !== id));

  };

  // TOTAL
  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        total,
        showCart,
        setShowCart
      }}
    >

      {children}

    </CartContext.Provider>

  );
}

export default CartProvider;