"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const PHONE = "923000000000"; // replace with your real number (country code, no + or spaces)

const shops = [
  { name: "ZQ Electronics", place: "Jab Pul, Abbottabad" },
  { name: "ZQ Electronics", place: "Circular Road, Haripur" },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Assalam o Alaikum ZQ Electronics!\nNaam: ${name}\nPhone: ${phone}\n\n${message}`
    );
    window.open(`https://wa.me/${PHONE}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-brand-blue";

  return (
    <main>
      {/* Top banner */}
      <section className="bg-brand-dark py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">Contact Us</h1>
          <p className="mt-3 max-w-2xl text-blue-100">
            Questions about a product or an installment plan? Send us a message
            or visit one of our shops.
          </p>
        </div>
      </section>

      <section className="bg-brand-soft py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-brand-dark">Send us a message</h2>
            <p className="mt-1 text-sm text-slate-600">
              Your message opens in WhatsApp so we can reply quickly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-semibold text-slate-700">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-slate-700">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={inputClass}
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 font-bold text-white transition hover:bg-emerald-600"
              >
                <MessageCircle size={20} />
                Send on WhatsApp
              </button>
            </form>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-brand-dark">Get in touch</h2>
              <ul className="mt-4 space-y-4 text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <Phone size={20} className="shrink-0 text-brand-red" />
                  <a href={`tel:+${PHONE}`} className="hover:text-brand-blue">
                    +92 300 0000000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={20} className="shrink-0 text-emerald-500" />
                  <a
                    href={`https://wa.me/${PHONE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-blue"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="shrink-0 text-brand-red" />
                  <a href="mailto:info@zqelectronics.com" className="hover:text-brand-blue">
                    info@zqelectronics.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={20} className="shrink-0 text-brand-red" />
                  <span>Mon - Sat: 10:00 AM - 10:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-brand-dark">Our shops</h2>
              <ul className="mt-4 space-y-4">
                {shops.map((shop) => (
                  <li key={shop.place} className="flex items-start gap-3">
                    <MapPin size={20} className="mt-0.5 shrink-0 text-brand-red" />
                    <div>
                      <p className="font-semibold text-brand-dark">{shop.name}</p>
                      <p className="text-sm text-slate-600">{shop.place}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}