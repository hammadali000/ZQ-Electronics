import { Star, CheckCircle } from "lucide-react";

const reviews = [
  {
    name: "Muhammad Usman",
    city: "Abbottabad",
    product: "Haier 1.5 Ton Inverter AC",
    comment:
      "Alhamdulillah bohat behtareen experience raha. Maine 12 maheene ki qist par Haier AC liya tha. Sirf CNIC verification ke baad aglay din delivery ho gayi thi.",
    rating: 5,
  },
  {
    name: "Tariq Mahmood",
    city: "Havelian",
    product: "Honda CD 70 2026",
    comment:
      "Bike ka installment plan bohat asaan aur transparent hai. Koi hidden charges nahi liye gaye. Har mahinay easy installment pay ho jati hai.",
    rating: 5,
  },
  {
    name: "Haji Abdul Rasheed",
    city: "Haripur",
    product: "4-Door Refrigerator & Washing Machine",
    comment:
      "Ghar ke liye fridge aur automatic washing machine li thi. Quality 100% original brand warranty ke sath mili. Highly recommended for installments!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-red">
            Verified Customer Stories
          </p>
          <h2 className="mt-1 text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Our Satisfied Customers
          </h2>
          <p className="mt-2 text-slate-600">
            Thousands of happy families trust ZQ Electronics for easy installments
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div>
                <div className="flex gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed italic text-slate-700">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-brand-dark">{rev.name}</h3>
                    <p className="text-xs text-slate-500">{rev.city}, Pakistan</p>
                  </div>
                  <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle size={12} /> Verified Buyer
                  </span>
                </div>
                <p className="mt-2 text-xs font-medium text-brand-blue">
                  Product Purchased: {rev.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}