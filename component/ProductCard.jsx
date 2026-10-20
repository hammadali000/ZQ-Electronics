"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartContext";
import { DEFAULT_MONTHS } from "../data/plans";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) return null;

  function handleAdd() {
    addToCart(product.id, DEFAULT_MONTHS);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-square bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4 transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-brand-dark">
          {product.name}
        </h3>
        <p className="mt-2 text-lg font-extrabold text-brand-blue">
          Rs. {product.price.toLocaleString()}
        </p>
        <p className="text-xs text-slate-500">Cash price</p>

        <div className="mt-4 flex flex-col gap-2">
          <button
            type="button"
            onClick={handleAdd}
            className={`rounded-lg py-2 text-sm font-semibold text-white transition ${
              added ? "bg-emerald-500" : "bg-brand-red hover:bg-red-700"
            }`}
          >
            {added ? "Added ✓" : "Add to Cart"}
          </button>
          <Link
            href={`/products/${product.id}`}
            className="block rounded-lg border border-brand-blue py-2 text-center text-sm font-semibold text-brand-blue transition hover:bg-brand-blue hover:text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}