import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "All Products" },
  { href: "/#calculator", label: "Installment Calculator" },
  { href: "/#how-it-works", label: "How Installments Work" },
  { href: "/contact", label: "Contact Us" },
];

const categories = [
  { href: "/products?category=air-conditioners", label: "Air Conditioners" },
  { href: "/products?category=refrigerators", label: "Refrigerators" },
  { href: "/products?category=washing-machines", label: "Washing Machines" },
  { href: "/products?category=led-tvs", label: "LED TVs" },
  { href: "/products?category=bike", label: "Motorcycles / Bikes" },
  { href: "/products?category=mobile", label: "Smartphones" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300">
      {/* Top Banner inside footer */}
      <div className="border-b border-white/10 bg-black/20 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-brand-red" />
            <span>
              <strong>ZQ Electronics Installments:</strong> Flexible Plans Available for 3, 6, 9 & 12 Months
            </span>
          </div>
          <div className="text-slate-400">
Requirements: 2 Witnesses + 1 Blank Bank Cheque + Original CNIC Copy         </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <div>
          <div className="mb-4 inline-block rounded-xl bg-white p-2 shadow-sm">
            <Image src="/logo.jpeg" alt="ZQ Electronics" width={110} height={60} className="object-contain" />
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            "Your Trusted Electronics Partner — 100% Original Products On Flexible Installments Across Pakistan."
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Shop Open for Inquiries
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-4 font-bold text-white">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-4 font-bold text-white">Top Categories</h3>
          <ul className="space-y-2.5 text-sm">
            {categories.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-white hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Hours */}
        <div>
          <h3 className="mb-4 font-bold text-white">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand-red" />
              <span>Jab Pul Abbottabad, Circular Road, Haripur</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={18} className="shrink-0 text-brand-red" />
              <a href="tel:+923000000000" className="hover:text-white">
                +92 300 0000000
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle size={18} className="shrink-0 text-emerald-400" />
              <a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-400 hover:text-emerald-300"
              >
                WhatsApp Direct Chat
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={18} className="shrink-0 text-brand-red" />
              <a href="mailto:info@zqelectronics.com" className="hover:text-white">
                info@zqelectronics.com
              </a>
            </li>
            <li className="flex items-center gap-2.5 border-t border-white/10 pt-2 text-xs text-slate-400">
              <Clock size={16} className="shrink-0" />
              <span>Mon - Sun: 10:00 AM - 10:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
ZQ Electronics. All Rights Reserved | Easy Monthly Installment Plans in Pakistan      </div>
    </footer>
  );
}