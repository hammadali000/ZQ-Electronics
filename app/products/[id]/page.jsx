import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/component/ProductCard";
import PlanSelector from "@/component/PlanSelector";
import { products, categories } from "@/data/products";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  return {
    title: product ? `${product.name} | ZQ Electronics` : "Product not found",
  };
}

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const category = categories.find((c) => c.slug === product.category);

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="bg-brand-soft">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/products" className="hover:text-brand-blue">
            Products
          </Link>
          {category && (
            <>
              {" / "}
              <Link
                href={`/products?category=${category.slug}`}
                className="hover:text-brand-blue"
              >
                {category.name}
              </Link>
            </>
          )}
        </nav>

        <div className="grid gap-8 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square rounded-xl bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold text-brand-dark sm:text-3xl">
              {product.name}
            </h1>

            <p className="mt-4 text-3xl font-black text-brand-blue">
              Rs. {product.price.toLocaleString()}
            </p>
            <p className="text-sm text-slate-500">Cash price</p>

            <PlanSelector
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
              }}
            />
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-4 text-xl font-bold text-brand-dark">
              More in {category ? category.name : "this category"}
            </h2>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}