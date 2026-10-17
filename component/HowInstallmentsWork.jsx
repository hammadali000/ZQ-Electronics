import { ShoppingBag, Users, FileCheck2, Truck } from "lucide-react";

const steps = [
  {
    icon: ShoppingBag,
    step: "01",
    title: "Product Aur Plan Select Karein",
    text: "Apni marzi ka product chunein. Har item ke mutabiq down payment aur 3, 6, 9 ya 12 mahinay ka plan select karein.",
  },
  {
    icon: Users,
    step: "02",
    title: "Zaroori Documents Jama Karwayein",
    text: "Apna CNIC, 2 Mo'atabar Gawaho'n (Witnesses) ke CNIC aur 1 Bank ka Blank Cheque (Security ke tor par).",
  },
  {
    icon: FileCheck2,
    step: "03",
    title: "Verification Aur Foran Approval",
    text: "Hamari team documents aur witnesses ki tasdeeq karke foran aapka installment plan approve karti hai.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Down Payment Dein Aur Delivery Lein",
    text: "Item ke hisab se down payment ada karein aur apna product le jayein. Baqi raqam asaan mahana qiston mein dein.",
  },
];

export default function HowInstallmentsWork() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-red">
Trustworthy Process          </p>
          <h2 className="mt-1 text-3xl font-extrabold text-brand-dark sm:text-4xl">
How to Buy on Installment          </h2>
          <p className="mt-2 text-slate-600">
Get Your Favorite Products Home in Just 4 Easy Steps          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-md"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                    <item.icon size={26} />
                  </div>
                  <span className="text-2xl font-black text-slate-200 group-hover:text-brand-red">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-3 text-xs font-semibold text-brand-blue">
                Step {item.step} Complete
              </div>
            </div>
          ))}
        </div>

        {/* Requirements Box */}
        <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50/70 p-6 text-center">
          <h4 className="text-sm font-bold uppercase tracking-wider text-brand-blue">
Required Documents (Requirements Checklist)          </h4>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-brand-dark">
            <span className="rounded-lg bg-white px-3 py-1.5 shadow-sm">✓ Asli CNIC Copy</span>
            <span className="rounded-lg bg-white px-3 py-1.5 shadow-sm">✓ 2 Witnesses (Gawah)</span>
            <span className="rounded-lg bg-white px-3 py-1.5 shadow-sm">✓ 1 Bank Blank Cheque</span>
            <span className="rounded-lg bg-white px-3 py-1.5 shadow-sm">✓ 3, 6, 9, 12 Months Plans</span>
          </div>
        </div>
      </div>
    </section>
  );
}