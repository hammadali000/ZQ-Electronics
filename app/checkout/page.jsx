"use client";

import { useState } from "react";
import { useCart } from "@/component/CartContext";
import { products } from "@/data/products";
import { calculatePlan } from "@/data/plans";
import { MessageCircle, ShieldCheck, Trash2 } from "lucide-react";
import Link from "next/link";

const PHONE = "923000000000"; // Apna WhatsApp number yahan dalein

export default function CheckoutPage() {
  const { items, changeQty, changePlan, removeFromCart, clearCart } = useCart();

  // Form state for customer details & verification requirements
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    cnic: "",
    witness1: "",
    witness2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Calculate overall cart totals
  const cartDetails = items.map((cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    if (!product) return null;
    const plan = calculatePlan(product.price, cartItem.months);
    return {
      ...cartItem,
      product,
      ...plan,
      itemTotalMonthly: plan.monthly * cartItem.qty,
      itemTotalAdvance: plan.advance * cartItem.qty,
    };
  }).filter(Boolean);

  const grandTotalCash = cartDetails.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const totalAdvance = cartDetails.reduce((sum, item) => sum + item.itemTotalAdvance, 0);
  const totalMonthly = cartDetails.reduce((sum, item) => sum + item.itemTotalMonthly, 0);

  const handleWhatsAppCheckout = (e) => {
    e.preventDefault();
    if (items.length === 0) return;

    let itemsText = cartDetails
      .map(
        (i) =>
          `- *${i.product.name}* (Qty: ${i.qty}) | Plan: ${i.months === 0 ? "Cash" : `${i.months} Months`} | Advance: Rs. ${i.itemTotalAdvance.toLocaleString()} | Monthly: Rs. ${i.itemTotalMonthly.toLocaleString()}`
      )
      .join("\n");

    const message = encodeURIComponent(
      `Assalam o Alaikum ZQ Electronics! Main nay order place kiya hai:\n\n*Customer Details:*\n- Name: ${formData.fullName}\n- Phone: ${formData.phone}\n- Address: ${formData.address}\n- CNIC: ${formData.cnic}\n- Witness 1: ${formData.witness1}\n- Witness 2: ${formData.witness2}\n\n*Cart Items:*\n${itemsText}\n\n*Total Advance:* Rs. ${totalAdvance.toLocaleString()}\n*Total Monthly:* Rs. ${totalMonthly.toLocaleString()}\n\nRequirements (2 Witnesses + 1 Blank Cheque + CNIC) mere paas hain.`
    );

    window.open(`https://wa.me/${PHONE}?text=${message}`, "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-brand-dark mb-4">Aapka Cart Khali Hai</h1>
        <p className="text-slate-600 mb-8">Pehle kuch products select karein aur installment plan chun kar cart mein add karein.</p>
        <Link
          href="/products"
          className="inline-block rounded-xl bg-brand-blue px-8 py-3 font-bold text-white transition hover:bg-blue-800"
        >
          Products Dekhein →
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="mb-8 text-3xl font-extrabold text-brand-dark">Checkout & Installment Verification</h1>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Form Section */}
          <form onSubmit={handleWhatsAppCheckout} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-7 space-y-4">
            <h2 className="text-xl font-bold text-brand-dark mb-4 border-b pb-2">Aapki Maloomat (Customer Info)</h2>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Poora Naam (Full Name)</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Hammad Ali"
                className="w-full rounded-lg border border-slate-300 p-2.5 text-sm focus:border-brand-blue outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number (Mobile)</label>
                <input
                  type="text"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0300 1234567"
                  className="w-full rounded-lg border border-slate-300 p-2.5 text-sm focus:border-brand-blue outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">CNIC Number</label>
                <input
                  type="text"
                  name="cnic"
                  required
                  value={formData.cnic}
                  onChange={handleChange}
                  placeholder="13101-1234567-1"
                  className="w-full rounded-lg border border-slate-300 p-2.5 text-sm focus:border-brand-blue outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Delivery Address (Ghar ka Pata)</label>
              <textarea
                name="address"
                required
                rows="2"
                value={formData.address}
                onChange={handleChange}
                placeholder="House #, Street, Area, City"
                className="w-full rounded-lg border border-slate-300 p-2.5 text-sm focus:border-brand-blue outline-none"
              />
            </div>

            <h3 className="text-lg font-bold text-brand-dark pt-4 border-b pb-2">Gawaho'n ki Maloomat (Witnesses Info)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Pehla Gawah (Name & Phone)</label>
                <input
                  type="text"
                  name="witness1"
                  required
                  value={formData.witness1}
                  onChange={handleChange}
                  placeholder="Gawah 1 Name - 0300..."
                  className="w-full rounded-lg border border-slate-300 p-2.5 text-sm focus:border-brand-blue outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Doosra Gawah (Name & Phone)</label>
                <input
                  type="text"
                  name="witness2"
                  required
                  value={formData.witness2}
                  onChange={handleChange}
                  placeholder="Gawah 2 Name - 0300..."
                  className="w-full rounded-lg border border-slate-300 p-2.5 text-sm focus:border-brand-blue outline-none"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 font-bold text-white shadow-lg transition hover:bg-emerald-600"
              >
                <MessageCircle size={20} />
                WhatsApp Par Order Confirm Karein
              </button>
            </div>
          </form>

          {/* Cart Summary Section */}
          <div className="rounded-2xl bg-brand-dark p-6 text-white shadow-xl lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-4 border-b border-white/10 pb-2">Order Summary</h2>

              <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                {cartDetails.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b border-white/10 pb-3 text-sm">
                    <div>
                      <p className="font-semibold text-white">{item.product.name}</p>
                      <p className="text-xs text-blue-200">
                        Qty: {item.qty} | {item.months === 0 ? "Cash" : `${item.months} Months Plan`}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-300 p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-2 text-sm border-t border-white/10 pt-4">
                <div className="flex justify-between text-slate-300">
                  <span>Total Cash Price:</span>
                  <span>Rs. {grandTotalCash.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-yellow-300 font-semibold">
                  <span>Total Advance Required:</span>
                  <span>Rs. {totalAdvance.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-bold">
                  <span>Total Monthly Installment:</span>
                  <span>Rs. {totalMonthly.toLocaleString()} / mo</span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-white/10 p-3 text-xs text-blue-100 flex items-start gap-2">
              <ShieldCheck size={18} className="text-emerald-400 shrink-0 mt-0.5" />
              <span>Requirements: Original CNIC, 2 Verified Witnesses, aur 1 Blank Bank Cheque delivery ke waqt darkar honge[cite: 16, 18].</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}