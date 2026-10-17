"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "./CartContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cartCount] = useState(0);
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    setOpen(false);
  }

  const searchBar = (
    <form onSubmit={handleSearch} className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full rounded-lg border border-slate-300 py-2 pl-4 pr-10 text-sm outline-none focus:border-brand-blue"
      />
      <button
        type="submit"
        aria-label="Search"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-brand-blue"
      >
        <Search size={18} />
      </button>
    </form>
  );

  const cartLink = (
    <Link href="/cart" aria-label="Cart" className="relative hover:text-brand-red">
      <ShoppingCart size={24} />
      {cartCount > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
          {cartCount}
        </span>
      )}
    </Link>
  );

  return (
    <nav className="bg-white text-brand-dark shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3">
        <Link href="/" className="shrink-0">
          <Image src="/logo.jpeg" alt="ZQ Electronics" width={130} height={70} priority />
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-6 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-brand-red">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop search */}
        <div className="hidden max-w-sm flex-1 md:block">{searchBar}</div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 md:flex">
          {cartLink}
          <Link href="/login" className="font-medium hover:text-brand-red">
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-brand-red px-4 py-2 font-semibold text-white hover:bg-red-700"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile: cart + menu button */}
        <div className="flex items-center gap-4 md:hidden">
          {cartLink}
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-4 border-t px-4 py-4 md:hidden">
          {searchBar}
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-lg border border-brand-blue py-2 text-center font-medium text-brand-blue"
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-lg bg-brand-red py-2 text-center font-semibold text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}