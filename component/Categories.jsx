import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Air Conditioners", slug: "air-conditioners", image: "/ac.jpeg" },
  { name: "Refrigerators", slug: "refrigerators", image: "/Refi.jpeg" },
  { name: "Kitchen Appliances", slug: "kitchen-appliances", image: "/kitchen.jpg" },
  { name: "Microwave Ovens", slug: "microwave-ovens", image: "/micro.jpeg" },
  { name: "Deep Freezers", slug: "deep-freezers", image: "/freezer.jpeg" },
  { name: "Washing Machines", slug: "washing-machines", image: "/washing.jpeg" },
  { name: "Air Coolers", slug: "air-coolers", image: "/air.jpeg" },
  { name: "LED TVs", slug: "led-tvs", image: "/led.jpeg" },
  { name: "Kitchen Hobs", slug: "kitchen-hobs", image: "/hobs.jpeg" },
  { name: "Bikes", slug: "bike", image: "/bike.jpeg" },
  { name: "Geysers", slug: "geysers", image: "/geyser.jpeg" },
  { name: "Mobiles", slug: "mobile", image: "/mobile.jpeg" },
];

export default function Categories() {
  return (
    <section className="bg-brand-soft py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-brand-dark">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-square w-full bg-white p-3">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-contain p-3 transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-brand-dark py-3 text-center text-sm font-semibold text-white transition group-hover:bg-brand-red">
                {cat.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}