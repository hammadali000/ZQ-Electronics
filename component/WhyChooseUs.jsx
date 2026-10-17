import { ShieldCheck, Truck, CreditCard, Headset, BadgePercent } from "lucide-react";

const reasons = [
  {
    icon: BadgePercent,
    title: "Transparent Plans",
    text: "Koi hidden charges nahi. 3, 6, 9 aur 12 mahinay ka wazeh hisab.",
  },
  {
    icon: ShieldCheck,
    title: "100% Brand Warranty",
    desc: "Haier, Dawlance, Pel, Honda ki official company warranty.",
  },
  {
    icon: CreditCard,
    title: "Item-Wise Down Payment",
    text: "Har product ke hisab se munasib aur asaan down payment.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    text: "Documents verification ke baad foran mehfooz delivery.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    text: "Qist adaigi aur after-sales support ke liye hum hamesha dastyab hain.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-red">
Why Choose Us          </p>
          <h2 className="mt-1 text-3xl font-extrabold text-brand-dark sm:text-4xl">
Why Choose ZQ Electronics          </h2>
          <p className="mt-2 text-slate-600">
Get electronics with trust, convenience, and reliability          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-md">
                <item.icon size={28} />
              </div>
              <h3 className="mb-2 font-bold text-brand-dark">{item.title}</h3>
              <p className="text-xs leading-relaxed text-slate-600">
                {item.text || item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}