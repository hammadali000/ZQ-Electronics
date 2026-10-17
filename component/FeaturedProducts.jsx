import Link from "next/link";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const featured = products.filter((p) => p.featured);

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-red">
            Top Deals on Installments
          </p>
          <h2 className="mt-1 text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-2 text-slate-600">
Available on Minimum Down Payment & Easy Monthly Installments          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-xl border-2 border-brand-blue bg-brand-blue px-8 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-transparent hover:text-brand-blue"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}