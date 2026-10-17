import Link from "next/link";
import { MapPin, ShieldCheck, BadgePercent, Truck, Headset } from "lucide-react";

export const metadata = {
  title: "About Us | ZQ Electronics",
  description: "ZQ Electronics: quality home appliances and electronics on easy installments.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "100% Original Products",
    text: "Sirf asli aur branded products, official company warranty ke sath.",
  },
  {
    icon: BadgePercent,
    title: "Easy Installments",
    text: "3, 6, 9 aur 12 mahinay ke asaan plans, kam advance par.",
  },
  {
    icon: Truck,
    title: "Safe Delivery",
    text: "Documents verification ke baad mehfooz delivery.",
  },
  {
    icon: Headset,
    title: "After Sales Support",
    text: "Qist aur warranty ke har masle mein hum aapke sath hain.",
  },
];

const shops = [
  { name: "ZQ Electronics", place: "Jab Pul, Abbottabad" },
  { name: "ZQ Electronics", place: "Circular Road, Haripur" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Top banner */}
      <section className="bg-brand-dark py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">About ZQ Electronics</h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Your Home, Our Priority. We help families bring home quality
            appliances and electronics through simple, transparent monthly
            installment plans.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-brand-dark">Who we are</h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            ZQ Electronics sells air conditioners, refrigerators, washing
            machines, LED TVs, kitchen appliances, bikes, mobiles and more from
            trusted brands like Haier and Dawlance. Our aim is simple: you should
            not have to wait years to afford what your home needs.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Choose your product, pick a plan, submit your documents (CNIC, 2
            witnesses and 1 blank cheque), and take your product home. The rest
            is paid in easy monthly installments.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-soft py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-brand-dark">
            Why customers choose us
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shops */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-brand-dark">Visit our shops</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {shops.map((shop) => (
              <div
                key={shop.place}
                className="flex items-start gap-3 rounded-xl border border-slate-200 p-5"
              >
                <MapPin className="mt-0.5 shrink-0 text-brand-red" size={22} />
                <div>
                  <p className="font-bold text-brand-dark">{shop.name}</p>
                  <p className="text-sm text-slate-600">{shop.place}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-block rounded-lg bg-brand-red px-8 py-3 font-semibold text-white hover:bg-red-700"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}