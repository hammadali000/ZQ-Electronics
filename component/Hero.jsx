"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/hero1.jpeg",
    title: "Upgrade your home.",
    highlight: "Pay monthly.",
    text: "ACs, Refrigerators, TVs, and more, delivered to your door with easy installment plans.",
    href: "/products",
    cta: "Shop Now",
  },
  {
    image: "/heroled.jpeg",
    title: "Bigger screen,",
    highlight: "brighter moments.",
    text: "Smart LED TVs in every size, delivered to your door on easy monthly installments.",
    href: "/products?category=led-tvs",
    cta: "Shop LED TVs",
  },
  {
    image: "/heroR.jpeg",
    title: "Keep it fresh,",
    highlight: "longer.",
    text: "Single door, double door and side-by-side refrigerators with simple installment plans.",
    href: "/products?category=refrigerators",
    cta: "Shop Refrigerators",
  },
  {
    image: "/heroW.jpeg",
    title: "Clean clothes,",
    highlight: "healthy family.",
    text: "Washing machines for every home, with easy monthly payments.",
    href: "/products?category=washing-machines",
    cta: "Shop Washing Machines",
  },
  {
    image: "/heroA.jpeg",
    title: "Stay cool",
    highlight: "all summer.",
    text: "Inverter air conditioners with easy installment plans and low advance.",
    href: "/products?category=air-conditioners",
    cta: "Shop Air Conditioners",
  },
  {
    image: "/heroP.jpeg",
    title: "The latest phones,",
    highlight: "pay monthly.",
    text: "Get your next smartphone on installments with quick verification.",
    href: "/products?category=mobile",
    cta: "Shop Mobiles",
  },
];

const INTERVAL = 4000; // 5 seconds per slide

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto change slide, one by one, then start again from the first
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[540px] overflow-hidden bg-brand-dark text-white md:h-[640px]">
      {slides.map((slide, i) => {
        const active = i === current;
        return (
          <div
            key={slide.image}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${
              active ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"
            }`}
          >
            {/* Background image with slow zoom */}
            <Image
              src={slide.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover transition-transform ease-out motion-reduce:transition-none ${
                active ? "scale-110 duration-[6000ms]" : "scale-100 duration-0"
              }`}
            />

            {/* Overlay: darker on the left where the text sits */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/20" />

            {/* Text */}
            <div className="relative mx-auto flex h-full max-w-6xl items-center px-4">
              <div
                className={`max-w-xl transition-all duration-700 motion-reduce:transition-none ${
                  active
                    ? "translate-y-0 opacity-100 delay-300"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p className="mb-4 inline-block border-l-4 border-brand-red pl-3 text-sm font-semibold uppercase tracking-widest text-blue-100">
                  ZQ Electronics
                </p>

                <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                  {slide.title}{" "}
                  <span className="text-brand-red">{slide.highlight}</span>
                </h1>

                <p className="mt-5 text-lg text-blue-100">{slide.text}</p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href={slide.href}
                    tabIndex={active ? 0 : -1}
                    className="rounded-lg bg-brand-red px-8 py-3 text-center font-semibold text-white transition hover:bg-red-700"
                  >
                    {slide.cta}
                  </Link>
                  <Link
                    href="/contact"
                    tabIndex={active ? 0 : -1}
                    className="rounded-lg border border-white px-8 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-brand-dark"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}