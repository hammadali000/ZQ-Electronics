"use client";

import { useState } from "react";
import { Calculator, MessageCircle } from "lucide-react";

export default function InstallmentCalculator() {
  const [price, setPrice] = useState(120000);
  const [months, setMonths] = useState(12);
  const [advancePercent, setAdvancePercent] = useState(25);

  const advanceAmount = Math.round((price * advancePercent) / 100);
  const balance = price - advanceAmount;
  const markupRate = months === 3 ? 0.05 : months === 6 ? 0.10 : months === 9 ? 0.15 : 0.20;
  const markupAmount = Math.round(balance * markupRate);
  const totalRemainingPayable = balance + markupAmount;
  const monthlyInstallment = Math.round(totalRemainingPayable / months);

  const whatsappMessage = encodeURIComponent(
    `Assalam o Alaikum ZQ Electronics! Maine Calculator par plan check kiya hai:\n- Total Amount: Rs. ${price.toLocaleString()}\n- Advance (${advancePercent}%): Rs. ${advanceAmount.toLocaleString()}\n- Duration: ${months} Months\n- Monthly Installment: Rs. ${monthlyInstallment.toLocaleString()}\n\nRequirements: 2 Witnesses aur 1 Blank Cheque mere paas tayyar hain.`
  );

  return (
    <section className="bg-gradient-to-b from-slate-50 to-blue-50/50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-md">
            <Calculator size={26} />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-red">
            Instant Estimate
          </span>
          <h2 className="mt-1 text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Installment Plan Calculator
          </h2>
          <p className="mt-2 text-slate-600">
            Item ke mutabiq advance aur 3, 6, 9 ya 12 mahinay ka plan select karein
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Controls */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-7">
            {/* Price Slider */}
            <div className="mb-8">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-700">
                  Product Ki Qeemat (Cash Price):
                </label>
                <span className="text-2xl font-black text-brand-blue">
                  Rs. {price.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="20000"
                max="500000"
                step="5000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-brand-blue"
              />
              <div className="mt-3 flex flex-wrap gap-2">
                {[30000, 60000, 100000, 150000, 250000].map((quick) => (
                  <button
                    key={quick}
                    type="button"
                    onClick={() => setPrice(quick)}
                    className={`rounded-lg border px-3 py-1 text-xs font-semibold transition ${
                      price === quick
                        ? "border-brand-blue bg-brand-blue text-white"
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:border-brand-blue"
                    }`}
                  >
                    Rs. {(quick / 1000).toLocaleString()}k
                  </button>
                ))}
              </div>
            </div>

            {/* Advance Percentage */}
            <div className="mb-8">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-700">
                  Down Payment / Advance:
                </label>
                <span className="font-bold text-brand-dark">
                  {advancePercent}% (Rs. {advanceAmount.toLocaleString()})
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[20, 25, 30, 40].map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => setAdvancePercent(pct)}
                    className={`rounded-xl border py-2.5 text-center text-sm font-bold transition ${
                      advancePercent === pct
                        ? "border-brand-red bg-brand-red text-white shadow-sm"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>
            </div>

            {/* Duration (3, 6, 9, 12 Months) */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Installment Duration (Mahinay):
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[3, 6, 9, 12].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMonths(m)}
                    className={`rounded-xl border py-2.5 text-center text-sm font-bold transition ${
                      months === m
                        ? "border-brand-blue bg-brand-blue text-white shadow-sm"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {m} Months
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="flex flex-col justify-between rounded-2xl bg-brand-dark p-6 text-white shadow-xl lg:col-span-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                Estimated Plan
              </p>
              <div className="mt-4 rounded-xl bg-white/10 p-4">
                <p className="text-xs text-blue-100">Estimated Monthly Installment</p>
                <p className="mt-1 text-3xl font-black text-white sm:text-4xl">
                  Rs. {monthlyInstallment.toLocaleString()}
                  <span className="text-xs font-normal text-blue-200"> / month</span>
                </p>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-300">Total Price:</span>
                  <span className="font-semibold">Rs. {price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-300">Down Payment ({advancePercent}%):</span>
                  <span className="font-semibold text-yellow-300">
                    Rs. {advanceAmount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-300">Plan Duration:</span>
                  <span className="font-semibold">{months} Months</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-slate-300">Requirements:</span>
                  <span className="font-semibold text-emerald-400">2 Witnesses + 1 Blank Cheque</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={`https://wa.me/923000000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-center font-bold text-white shadow-lg transition hover:bg-emerald-600"
              >
                <MessageCircle size={20} />
                WhatsApp Par Plan Confirm Karein
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}