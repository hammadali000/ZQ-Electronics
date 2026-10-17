"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // items look like: [{ id: "1", qty: 2 }, { id: "5", qty: 1 }]
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Load the saved cart when the site opens
  useEffect(() => {
    try {
      const saved = localStorage.getItem("zq-cart");
      if (saved) setItems(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  // Save the cart every time it changes
  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem("zq-cart", JSON.stringify(items));
    } catch {}
  }, [items, loaded]);

  function addToCart(id) {
    setItems((prev) => {
      const found = prev.find((i) => i.id === id);
      if (found) {
        return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id, qty: 1 }];
    });
  }

  function changeQty(id, qty) {
    if (qty < 1) return;
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  }

  function removeFromCart(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function clearCart() {
    setItems([]);
  }

  const cartCount = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, cartCount, addToCart, changeQty, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}