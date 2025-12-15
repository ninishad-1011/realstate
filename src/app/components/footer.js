import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  const menu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Property", href: "/pages/Properties" },
    { name: "Agent", href: "/pages/Besagent" },
    { name: "Contact", href: "/Contact" },
  ];

  const socialIcons = [
    { icon: <FaFacebook />, href: "https://facebook.com" },
    { icon: <FaLinkedin />, href: "https://linkedin.com" },
    { icon: <FaInstagramSquare />, href: "https://instagram.com" },
    { icon: <FaGithub />, href: "https://github.com" },
  ];

  return (
    <footer className="bg-gray-200 py-10 text-gray-700">
      <div className="container text-center py-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {/* Section 1 */}
        <div>
          <h1 className="font-bold mb-2 text-3xl sm:text-4xl text-black">
            EstateAgency
          </h1>
          <p className="mb-2 mt-3 text-base sm:text-lg">
            Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis sed aute irure.
          </p>
          <p className="font-semibold text-base sm:text-lg">Phone: +8801571117435</p>
          <p className="font-semibold text-base sm:text-lg">Email: nafiul1011@gmail.com</p>
        </div>

        {/* Section 2 */}
        <div>
          <h1 className="font-bold mb-2 text-3xl sm:text-4xl text-black">
            The Company
          </h1>
          <ul className="list-none space-y-1 mt-3 text-base sm:text-lg">
            <li>Site Map</li>
            <li>Legal</li>
            <li>Agent Admin</li>
            <li>Careers</li>
            <li>Affiliate</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h1 className="font-bold mb-2 text-3xl sm:text-4xl text-black">
            International Sites
          </h1>
          <ul className="list-none space-y-1 mt-3 text-base sm:text-lg">
            <li>Bangladesh</li>
            <li>Nepal</li>
            <li>Srilanka</li>
            <li>Singapore</li>
            <li>Malaysia</li>
            <li>Thailand</li>
          </ul>
        </div>
      </div>

      {/* Footer Menu */}
      <div className="flex flex-wrap hover:cursor-pointer hover:text-green-500 justify-center items-center gap-4 mt-8 text-base sm:text-lg font-medium text-black px-4">
        {menu.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="hover:text-green-600 transition-colors duration-300"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-6 text-2xl text-gray-600 pb-3 border-b-2 border-gray-400 px-4">
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors duration-300"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-center mt-6 text-gray-500 text-sm sm:text-base">
        &copy; {new Date().getFullYear()} EstateAgency. All rights reserved.
      </p>
      <p className="text-center text-gray-500 text-sm sm:text-base">
        Developed By Nafiul Islam
      </p>
    </footer>
  );
}

export default Footer;
