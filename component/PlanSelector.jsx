"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import AddToCartButton from "./AddToCartButton";
import {
  planOptions,
  calculatePlan,
  planLabel,
  CASH,
  DEFAULT_MONTHS,
} from "../data/plans";

const PHONE = "923000000000"; // apna asli number lagayein

export default function PlanSelector({ product }) {
  const [months, setMonths] = useState(DEFAULT_MONTHS);

  const isCash = months === CASH;
  const { advance, monthly, totalPrice } = calculatePlan(product.price, months);

  const whatsappMessage = encodeURIComponent(
    isCash
      ? `Assalam o Alaikum ZQ Electronics! Mujhe yeh product cash par chahiye:\n- ${product.name}\n- Cash Price: Rs. ${product.price.toLocaleString()}`
      : `Assalam o Alaikum ZQ Electronics! Mujhe yeh product installment par chahiye:\n- ${product.name}\n- Cash Price: Rs. ${product.price.toLocaleString()}\n- Plan: ${months} months\n- Total Price (plan ke hisab se): Rs. ${totalPrice.toLocaleString()}\n- Advance: Rs. ${advance.toLocaleString()}\n- Monthly Installment: Rs. ${monthly.toLocaleString()}`
  );

  return (
    <div className="mt-6">
      <p className="mb-2 text-sm font-semibold text-slate-700">
        Payment ka tareeqa chunein:
      </p>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
        {planOptions.map((m) => {
          const active = m === months;
          return (
            <button
              key={m}
              type="button"
              onClick={() => setMonths(m)}
              className={`rounded-xl border px-1 py-2.5 text-center transition ${
                active
                  ? "border-brand-blue bg-brand-blue text-white shadow-sm"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:border-brand-blue"
              }`}
            >
              <span className="block text-sm font-bold">{planLabel(m)}</span>
              <span
                className={`block text-[11px] ${
                  active ? "text-blue-100" : "text-slate-500"
                }`}
              >
                {m === CASH
                  ? "Full payment"
                  : `Rs. ${calculatePlan(product.price, m).monthly.toLocaleString()}/mo`}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 space-y-3 rounded-xl bg-brand-soft p-4 text-sm">
        {isCash ? (
          <>
            <div className="flex justify-between">
              <span className="text-slate-600">Payment</span>
              <span className="font-semibold text-brand-dark">Cash (full payment)</span>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-3">
              <span className="text-slate-600">Total to pay</span>
              <span className="text-lg font-extrabold text-brand-red">
                Rs. {product.price.toLocaleString()}
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between">
              <span className="text-slate-600">Cash price</span>
              <span className="font-semibold text-brand-dark">
                Rs. {product.price.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">
                Total price ({months} months plan)
              </span>
              <span className="font-semibold text-brand-dark">
                Rs. {totalPrice.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Advance (down payment)</span>
              <span className="font-semibold text-brand-dark">
                Rs. {advance.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-3">
              <span className="text-slate-600">Monthly installment</span>
              <span className="text-lg font-extrabold text-brand-red">
                Rs. {monthly.toLocaleString()}
              </span>
            </div>
          </>
        )}
      </div>

      <p className="mt-3 text-xs text-slate-500">
        {isCash
          ? "Cash par khareedne ke liye CNIC ya gawah ki zaroorat nahi. Final detail hamari team confirm karti hai."
          : "Requirements: original CNIC, 2 witnesses and 1 blank bank cheque. The amounts are an estimate. Our team confirms the final plan."}
      </p>

      <div className="mt-6 space-y-3">
        <AddToCartButton productId={product.id} months={months} />

        <a
          href={`https://wa.me/${PHONE}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 font-bold text-white shadow-lg transition hover:bg-emerald-600"
        >
          <MessageCircle size={20} />
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}