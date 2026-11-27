"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDonate = () => {
    alert("Donations are coming soon! Please contact admin@icraglobal.org to partner with us.");
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className={`text-2xl font-extrabold tracking-tight transition-colors ${scrolled ? "text-brand-navy" : "text-white"}`}>
          ICRA
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-6 text-sm font-medium">
          {[
            { name: "About", href: "#about" },
            { name: "Programmes", href: "#about" },
            { name: "Tour", href: "#tour" },
            { name: "Live Projects", href: "#tour" },
            { name: "Discover the Message", href: "#about" },
            { name: "Partner", href: "#contact" },
            { name: "Get Involved", href: "#contact" },
            { name: "Contact", href: "#contact" }
          ].map((item) => (
            <Link key={item.name} href={item.href} className={`transition-colors hover:text-brand-gold ${scrolled ? "text-brand-navy" : "text-white"}`}>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Donate Button */}
        <button 
          onClick={handleDonate}
          className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all ${scrolled ? "bg-brand-navy text-white hover:bg-brand-gold hover:text-brand-navy" : "bg-white text-brand-navy hover:bg-brand-gold"}`}
        >
          Donate
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </header>
  );
}