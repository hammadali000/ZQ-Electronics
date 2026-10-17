import Link from "next/link";
import ProductCard from "@/component/ProductCard";
import { products, categories } from "@/data/products";

export default async function ProductsPage({ searchParams }) {
  const { category } = await searchParams;

  const activeCategory = categories.find((c) => c.slug === category);
  const list = activeCategory
    ? products.filter((p) => p.category === activeCategory.slug)
    : products;

  return (
    <main className="bg-brand-soft">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-extrabold text-brand-dark">
          {activeCategory ? activeCategory.name : "All Products"}
        </h1>
        <p className="mt-1 text-slate-600">{list.length} products available</p>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          <Link
            href="/products"
            className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold"
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}