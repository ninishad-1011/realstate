"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Property", path: "/pages/Properties" },
    { name: "Agent", path: "/pages/Besagent" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <h1 className="text-3xl sm:text-4xl font-bold text-black">
          Nafi <span className="text-green-600">Agency</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-lg font-medium text-black">
          {menu.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={index}
                href={item.path}
                className={`hover:text-green-600 transition-colors duration-300 ${
                  isActive ? "text-green-600 border-b-4 border-green-600" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}

      
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Home + Sign Up only) */}
      {isOpen && (
        <div className="md:hidden justify-center text-center bg-white shadow-md px-4 py-4 flex flex-col gap-3">
          <Link
            href="/"
            className="hover:text-green-600 text-black transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-green-600 text-black transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/pages/Properties"
            className="hover:text-green-600 text-black transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
          Property
          </Link>
          <Link
            href="/pages/Besagent"
            className="hover:text-green-600 text-black transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Agent
          </Link>
            <Link
            href="/Contact"
            className="hover:text-green-600 text-black transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

    
        </div>
      )}
    </nav>
  );
}
