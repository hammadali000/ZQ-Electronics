import { ShieldCheck, Zap, Truck, CreditCard } from "lucide-react";

const perks = [
  {
    icon: Zap,
    title: "Instant Verification",
    desc: "Sirf CNIC aur basic maloomat par foran approval",
  },
  {
    icon: CreditCard,
    title: "Low Advance Plans",
    desc: "Kam tareen peshgi adaigi par apni marzi ka product lein",
  },
  {
    icon: ShieldCheck,
    title: "100% Brand Warranty",
    desc: "Haier, Dawlance, Pel, Honda aur deegar brands ki official warranty",
  },
  {
    icon: Truck,
    title: "Safe Home Delivery",
    desc: "Mehfooz tareeqay se aapki dehleez tak delivery",
  },
];

export default function PromoBanner() {
  return (
    <section className="border-y border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk) => (
            <div key={perk.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                <perk.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-dark">{perk.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}