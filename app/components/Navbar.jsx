"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const position = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: position, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all px-6 ${
        scrolled ? "bg-white text-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-xl font-bold text-black">
          InstaFetch
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {["hero", "features", "how-it-works", "faq"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-black hover:text-gray-700 transition"
            >
              {item.replace("-", " ").toUpperCase()}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute inset-0 text-white flex flex-col p-6">
          <button className="self-end" onClick={() => setIsMenuOpen(false)}>
            <CloseIcon fontSize="large" className="text-white" />
          </button>
<div className="bg-white">
{["hero", "features", "how-it-works", "faq"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="mt-4 w-full py-3 text-center text-black hover:bg-gray-800 transition"
            >
              {item.replace("-", " ").toUpperCase()}
            </button>
          ))}
</div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
