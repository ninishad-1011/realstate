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
    { name: "Property", href: "/property" },
    { name: "User Agent", href: "/agent" },
    { name: "Contact", href: "/contact" },
  ];

  const socialIcons = [
    { icon: <FaFacebook />, href: "https://facebook.com" },
    { icon: <FaLinkedin />, href: "https://linkedin.com" },
    { icon: <FaInstagramSquare />, href: "https://instagram.com" },
    { icon: <FaGithub />, href: "https://github.com" },
  ];

  return (
    <footer className="bg-gray-200 py-20 text-gray-700 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 justify-between gap-10">
        {/* Section 1 */}
        <div>
          <h1 className=" font-bold mb-2 text-4xl text-black ">EstateAgency</h1>
          <p className="mb-2 mt-3 text-[20px]">
            Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis sed aute irure.
          </p>
          <p className="font-semibold text-[20px]">Phone: +8801571117435</p>
          <p className="font-semibold text-[20px]">Email: nafiul1011@gmail.com</p>
        </div>

        {/* Section 2 */}
        <div className="ml-15 pl-10">
          <h1 className=" font-bold mb-2 text-4xl text-black">The Company</h1>
          <ul className="list-none space-y-1 mt-3">
            <li>Site Map</li>
            <li>Legal</li>
            <li>Agent Admin</li>
            <li>Careers</li>
            <li>Affiliate</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="pl-10">
          <h1 className=" font-bold mb-2 text-4xl text-black ">International Sites</h1>
          <ul className="list-none space-y-1 mt-3">
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
      <div className="flex container mx-auto justify-center flex-wrap items-center gap-6 mt-8 text-lg font-medium text-black">
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
      <div className="flex justify-center container mx-auto gap-6 mt-6 text-2xl text-gray-600 pb-3 border-b-2 border-gray-500">
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
      <p className="text-center mt-6 text-gray-500">
        &copy; {new Date().getFullYear()} EstateAgency. All rights reserved.
      </p>
      <p className="text-center mt-6 text-gray-500" >Develop By Nafiul Islam</p>
    </footer>
  );
}

export default Footer;
