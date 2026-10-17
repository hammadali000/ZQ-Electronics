"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, BadgePercent, ShieldCheck, Truck, MessageCircle } from "lucide-react";

const perks = [
  { icon: BadgePercent, text: "Easy plans of 3, 6, 9 and 12 months" },
  { icon: ShieldCheck, text: "100% original products with warranty" },
  { icon: Truck, text: "Safe delivery after verification" },
];

const showcase = [
  { src: "/Refi.jpeg", alt: "Refrigerator" },
  { src: "/washing.jpeg", alt: "Washing machine" },
  { src: "/bike.jpeg", alt: "Bike" },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // No backend yet, so we cannot really log in.
    setNotice("Login is not connected yet. Please contact us on WhatsApp to place an order.");
  }

  const inputWrap = "relative";
  const inputClass =
    "w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10";
  const iconClass =
    "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400";

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center bg-gradient-to-br from-brand-soft via-white to-blue-50 px-4 py-10">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-brand-dark/10 lg:grid-cols-2">
        {/* Left: brand panel (hidden on small screens) */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-brand-dark via-brand-dark to-brand-blue p-10 text-white lg:flex">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-red/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <div className="inline-block rounded-2xl bg-white p-2 shadow-lg">
              <Image src="/logo.jpeg" alt="ZQ Electronics" width={110} height={60} className="object-contain" />
            </div>
            <h2 className="mt-8 text-4xl font-extrabold leading-tight">
              Your Home,
              <br />
              <span className="text-brand-red">Our Priority.</span>
            </h2>
            <p className="mt-3 max-w-xs text-blue-100">
              Log in to track your favourite products and pick up where you left off.
            </p>
          </div>

          <div className="relative">
            <ul className="space-y-3 text-sm">
              {perks.map((perk) => (
                <li key={perk.text} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <perk.icon size={18} />
                  </span>
                  <span className="text-blue-50">{perk.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {showcase.map((item) => (
                <div key={item.src} className="relative aspect-square rounded-xl bg-white shadow-md">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="120px"
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="p-8 sm:p-12">
          {/* Logo on small screens only */}
          <div className="mb-6 lg:hidden">
            <Image src="/logo.jpeg" alt="ZQ Electronics" width={100} height={56} className="object-contain" />
          </div>

          <h1 className="text-3xl font-extrabold text-brand-dark">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-600">
            Enter your details to log in to your account.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">
                Email
              </label>
              <div className={inputWrap}>
                <Mail size={18} className={iconClass} />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className={inputWrap}>
                <Lock size={18} className={iconClass} />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`${inputClass} pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-brand-blue"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" className="h-4 w-4 accent-brand-blue" />
              Remember me
            </label>

            {notice && (
              <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                {notice}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-brand-blue to-brand-dark py-3.5 font-bold text-white shadow-lg shadow-brand-blue/30 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-brand-blue/30"
            >
              Login
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-slate-400">
            <span className="h-px flex-1 bg-slate-200" />
            or
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500 py-3 font-semibold text-emerald-600 transition hover:bg-emerald-500 hover:text-white"
          >
            <MessageCircle size={20} />
            Order on WhatsApp instead
          </a>

          <p className="mt-6 text-center text-sm text-slate-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-semibold text-brand-red hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}