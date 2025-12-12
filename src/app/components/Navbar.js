"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); 

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Property", path: "/pages/Properties" },
    { name: "Agent", path: "/pages/Besagent" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-30">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-black">
          State <span className="text-green-600">Agency</span>
        </h1>

        {/* Menu */}
        <div className="flex items-center gap-8 text-lg font-medium text-black">
          {menu.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={index}
                href={item.path}
                className={`hover:text-green-600 transition-colors duration-300 ${
                  isActive ? "text-green-600 border-b-2 border-green-600" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Search Icon */}
          <div className="bg-green-600 text-white p-2 rounded-full cursor-pointer hover:bg-green-700 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
