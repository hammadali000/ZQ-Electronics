"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";

export default function AddToCartButton({ productId, months = 12 }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addToCart(productId, months);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-white shadow-lg transition ${
        added ? "bg-emerald-500" : "bg-brand-red hover:bg-red-700"
      }`}
    >
      <ShoppingCart size={20} />
      {added ? "Added to cart ✓" : "Add to Cart"}
    </button>
  );
}