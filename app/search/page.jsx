import Link from "next/link";
import ProductCard from "@/component/ProductCard";
import { products, categories } from "@/data/products";

export const metadata = {
  title: "Search | ZQ Electronics",
};

export default async function SearchPage({ searchParams }) {
  const { q } = await searchParams;
  const query = (q || "").trim().toLowerCase();

  const results = query
    ? products.filter((p) => {
        const categoryName =
          categories.find((c) => c.slug === p.category)?.name || "";
        return (
          p.name.toLowerCase().includes(query) ||
          categoryName.toLowerCase().includes(query) ||
          (p.badge || "").toLowerCase().includes(query)
        );
      })
    : [];

  return (
    <main className="bg-brand-soft">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {!query ? (
          <>
            <h1 className="text-3xl font-extrabold text-brand-dark">Search</h1>
            <p className="mt-2 text-slate-600">
              Type a product name in the search bar at the top.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-extrabold text-brand-dark">
              Results for &ldquo;{q}&rdquo;
            </h1>
            <p className="mt-1 text-slate-600">
              {results.length} {results.length === 1 ? "product" : "products"} found
            </p>
          </>
        )}

        {query && results.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <p className="font-semibold text-brand-dark">
              No products match your search.
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Check the spelling or try a shorter word, like &ldquo;AC&rdquo; or &ldquo;fridge&rdquo;.
            </p>
            <Link
              href="/products"
              className="mt-4 inline-block rounded-lg bg-brand-blue px-6 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              View all products
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}