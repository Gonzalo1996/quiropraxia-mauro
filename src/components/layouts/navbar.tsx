"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const navItems = [
    ["Inicio", "/"],
    ["Quiénes Somos", "/quienes-somos"],
    ["¿Qué es la Quiropraxia?", "/quiropraxia"],
    ["Servicios", "/servicios"],
    ["Blog", "/blog"],
    ["FAQs", "/faqs"],
    ["Contacto", "/contacto"],
    ];
  
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" >
      <div className="navbar-container">
        

        {/* LOGO / TÍTULO */}
        <Link 
          href="/" 
          className="navbar-logo " onClick={closeMenu} >
          <img
            src="/images/logo.png"
            alt="Quiropraxia Mauro"
          />
        </Link>

        {/* LINKS DESKTOP */}
        <div className="navbar-links">
        {
            navItems.map(([label, href]) => (
            <Link       
            key={href}
            href={href}
            className={pathname === href ? "active" : ""}
            onClick={closeMenu}
            >
            {label}
            </Link>
        ))
        }
        </div>

        {/* WHATSAPP DESKTOP */}
        <a
          href="https://wa.me/549XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-button"
        >
          Contacto / WhatsApp
        </a>

        {/* HAMBURGUESA */}
        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MENÚ MOBILE */}
        <div className={`navbar-mobile-menu ${menuOpen ? "open" : ""}`}>
        {
            navItems.map(([label, href]) => (
            <Link 
              key={href}
              href={href}
              className={pathname === href ? "active" : ""}
              onClick={closeMenu}
            >
            {label}
            </Link>
        ))}

        <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-mobile-button"
        >
            Contacto / WhatsApp
        </a>
        </div>

    </nav>
  );
}