"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Minus, Plus, MessageCircle, ShoppingCart } from "lucide-react";
import { useCart } from "@/component/CartContext";
import { products } from "@/data/products";
import {
  planOptions,
  calculatePlan,
  CASH,
  DEFAULT_MONTHS,
} from "@/data/plans";

const PHONE = "923000000000"; // apna asli number lagayein

export default function CartPage() {
  const { items, changeQty, changePlan, removeFromCart, clearCart } = useCart();

  const cartItems = items
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) return null;
      const months = item.months ?? DEFAULT_MONTHS;
      return {
        ...product,
        qty: item.qty,
        months,
        plan: calculatePlan(product.price, months),
      };
    })
    .filter(Boolean);

  // Cash aur installment wale items alag alag
  const cashList = cartItems.filter((p) => p.months === CASH);
  const planList = cartItems.filter((p) => p.months !== CASH);

  const cashTotal = cashList.reduce((sum, p) => sum + p.price * p.qty, 0);

  const planCashPrice = planList.reduce((sum, p) => sum + p.price * p.qty, 0);
  const planTotal = planList.reduce((sum, p) => sum + p.plan.totalPrice * p.qty, 0);
  const advanceTotal = planList.reduce((sum, p) => sum + p.plan.advance * p.qty, 0);
  const monthlyTotal = planList.reduce((sum, p) => sum + p.plan.monthly * p.qty, 0);

  const payNowTotal = cashTotal + advanceTotal;
  const hasCash = cashList.length > 0;
  const hasPlan = planList.length > 0;

  const orderLines = cartItems
    .map((p) =>
      p.months === CASH
        ? `- ${p.name} x${p.qty} | Cash payment | Rs. ${(p.price * p.qty).toLocaleString()}`
        : `- ${p.name} x${p.qty} | ${p.months} months | Advance: Rs. ${(p.plan.advance * p.qty).toLocaleString()} | Monthly: Rs. ${(p.plan.monthly * p.qty).toLocaleString()}`
    )
    .join("\n");

  let totalsText = "";
  if (hasCash && !hasPlan) {
    totalsText = `Total (Cash): Rs. ${cashTotal.toLocaleString()}`;
  } else if (!hasCash && hasPlan) {
    totalsText = `Total Price (plan ke hisab se): Rs. ${planTotal.toLocaleString()}\nTotal Advance: Rs. ${advanceTotal.toLocaleString()}\nTotal Monthly Installment: Rs. ${monthlyTotal.toLocaleString()}`;
  } else {
    totalsText = `Cash items: Rs. ${cashTotal.toLocaleString()}\nInstallment items total (plan ke hisab se): Rs. ${planTotal.toLocaleString()}\nAbhi dene hain: Rs. ${payNowTotal.toLocaleString()}\nTotal Monthly Installment: Rs. ${monthlyTotal.toLocaleString()}`;
  }

  const whatsappMessage = encodeURIComponent(
    `Assalam o Alaikum ZQ Electronics! Mujhe yeh products chahiye:\n${orderLines}\n\n${totalsText}`
  );

  if (cartItems.length === 0) {
    return (
      <main className="bg-brand-soft py-16">
        <div className="mx-auto max-w-md rounded-2xl bg-white p-10 text-center shadow-sm">
          <ShoppingCart size={48} className="mx-auto text-slate-300" />
          <h1 className="mt-4 text-2xl font-extrabold text-brand-dark">
            Your cart is empty
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Add some products to see them here.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-block rounded-lg bg-brand-red px-8 py-3 font-semibold text-white hover:bg-red-700"
          >
            Browse products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-brand-soft">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-brand-dark">Your Cart</h1>
          <button
            type="button"
            onClick={clearCart}
            className="text-sm font-semibold text-slate-500 hover:text-brand-red"
          >
            Clear cart
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Items */}
          <div className="space-y-4 lg:col-span-2">
            {cartItems.map((p) => (
              <div key={p.id} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
                <div className="relative h-24 w-24 shrink-0 rounded-xl bg-white sm:h-28 sm:w-28">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="112px"
                    className="object-contain p-2"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <Link
                      href={`/products/${p.id}`}
                      className="line-clamp-2 text-sm font-semibold text-brand-dark hover:text-brand-blue"
                    >
                      {p.name}
                    </Link>
                    <p className="mt-1 text-lg font-extrabold text-brand-blue">
                      Rs. {(p.price * p.qty).toLocaleString()}
                    </p>
                    {p.months === CASH ? (
                      <p className="text-xs font-semibold text-emerald-600">
                        Cash payment (full)
                      </p>
                    ) : (
                      <p className="text-xs text-slate-500">
                        Advance Rs. {(p.plan.advance * p.qty).toLocaleString()} ·{" "}
                        <span className="font-semibold text-brand-red">
                          Rs. {(p.plan.monthly * p.qty).toLocaleString()} / month
                        </span>
                      </p>
                    )}

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {planOptions.map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => changePlan(p.id, m)}
                          className={`rounded-md border px-2 py-1 text-[11px] font-semibold transition ${
                            p.months === m
                              ? "border-brand-blue bg-brand-blue text-white"
                              : "border-slate-200 text-slate-600 hover:border-brand-blue"
                          }`}
                        >
                          {m === CASH ? "Cash" : `${m} mo`}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center rounded-lg border border-slate-200">
                      <button
                        type="button"
                        onClick={() => changeQty(p.id, p.qty - 1)}
                        disabled={p.qty <= 1}
                        aria-label="Decrease quantity"
                        className="p-2 text-slate-600 hover:text-brand-blue disabled:opacity-30"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">{p.qty}</span>
                      <button
                        type="button"
                        onClick={() => changeQty(p.id, p.qty + 1)}
                        aria-label="Increase quantity"
                        className="p-2 text-slate-600 hover:text-brand-blue"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(p.id)}
                      aria-label="Remove item"
                      className="p-2 text-slate-400 hover:text-brand-red"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-brand-dark">Order summary</h2>

            <div className="mt-4 space-y-3 text-sm">
              {/* Sirf cash wale items */}
              {hasCash && !hasPlan && (
                <div className="flex justify-between">
                  <span className="text-slate-600">Total to pay (cash)</span>
                  <span className="text-lg font-extrabold text-brand-red">
                    Rs. {cashTotal.toLocaleString()}
                  </span>
                </div>
              )}

              {/* Sirf installment wale items */}
              {!hasCash && hasPlan && (
                <>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Cash price</span>
                    <span className="font-semibold text-brand-dark">
                      Rs. {planCashPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total price (plan ke hisab se)</span>
                    <span className="font-semibold text-brand-dark">
                      Rs. {planTotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total advance</span>
                    <span className="font-semibold text-brand-dark">
                      Rs. {advanceTotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-slate-100 pt-3">
                    <span className="text-slate-600">Monthly installment</span>
                    <span className="text-lg font-extrabold text-brand-red">
                      Rs. {monthlyTotal.toLocaleString()}
                    </span>
                  </div>
                </>
              )}

              {/* Dono mile hue */}
              {hasCash && hasPlan && (
                <>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Cash items</span>
                    <span className="font-semibold text-brand-dark">
                      Rs. {cashTotal.toLocaleString()}
                    </span>
                  </div>

                  <p className="border-t border-slate-100 pt-3 text-xs font-bold uppercase text-slate-400">
                    Installment items
                  </p>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total price (plan ke hisab se)</span>
                    <span className="font-semibold text-brand-dark">
                      Rs. {planTotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Advance</span>
                    <span className="font-semibold text-brand-dark">
                      Rs. {advanceTotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Monthly installment</span>
                    <span className="font-semibold text-brand-red">
                      Rs. {monthlyTotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between border-t border-slate-100 pt-3">
                    <span className="text-slate-600">Abhi dene hain</span>
                    <span className="text-lg font-extrabold text-brand-red">
                      Rs. {payNowTotal.toLocaleString()}
                    </span>
                  </div>
                </>
              )}
            </div>

            <p className="mt-3 text-xs text-slate-500">
              {hasPlan
                ? "Installment ke liye: original CNIC, 2 witnesses and 1 blank bank cheque. The final plan is confirmed by our team."
                : "Final detail hamari team confirm karti hai."}
            </p>

            <a
              href={`https://wa.me/${PHONE}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 font-bold text-white shadow-lg transition hover:bg-emerald-600"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>

            <Link
              href="/products"
              className="mt-3 block text-center text-sm font-semibold text-brand-blue hover:underline"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}