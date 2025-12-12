import React from "react";
import { MdMessage } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FiShare2 } from "react-icons/fi";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
  FaGithub,
} from "react-icons/fa";

export default function page() {
  const socialIcons = [
    { icon: <FaFacebook />, href: "https://facebook.com" },
    { icon: <FaLinkedin />, href: "https://linkedin.com" },
    { icon: <FaInstagramSquare />, href: "https://instagram.com" },
    { icon: <FaGithub />, href: "https://github.com" },
  ];
  return (
    <div className="container mx-auto text-black mt-10">
      <div className="border-l-4 border-green-500 text-black mb-20">
        <h1 className="text-black text-6xl font-bold px-6 py-3">Contact Us</h1>
        <p className="text-gray-500 px-7 py-2">
          One is entitled to enjoy rights without obstruction, except as limited
          by law. Someone may have duties to prevent corruption or wrongdoing,
          yet exceptions may occur. Even ordinary actions can result in valuable
          outcomes. Responsibilities must be shared. Benefits belong to
          everyone. And it is necessary to acknowledge the existence of any
          mistakes or faults
        </p>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14594.205130718978!2d90.30897884999999!3d23.8700626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1765565067209!5m2!1sen!2sbd"
          className="w-full h-[650px] border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="grid grid-cols-2 gap-20 mb-20 mt-40">
        <div className=" shadow-lg p-4 rounded-md">
          <h1 className="text-center pb-4 font-bold text-3xl">Send Message</h1>
          <form className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-semibold mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter subject"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                rows={5}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-2 border-l-2 border-gray-500 px-15">
          {/* Say Hello */}
          <div className="flex items-center font-semibold">
            <MdMessage className="text-black text-5xl" />
            <span className=" text-3xl">Say Hello</span>
          </div>
          <p className="font-semibold ml-5">Email: nafiul1011@gmail.com</p>
          <p className="font-semibold ml-5">Contact: +8801571117435</p>

          {/* Find Us */}
          <div className="flex items-center gap-2 text-3xl mt-20 font-semibold mt-4">
            <SlLocationPin className="text-black text-5xl" />
            <span className="font-semibold ">Find Us</span>
          </div>
          <p className="mt-3 font-semibold ml-5">City University, Savar, Dhaka, Bangladesh</p>

          {/* Social Networks */}
          <div className="flex items-center gap-2 mt-20 text-xl font-semibold mt-4">
            <FiShare2 className="text-black text-5xl" />
            <span className=" text-semibold">Social Networks</span>
          </div>

          <div className="flex  container ml-5 mx-auto gap-6 mt-6 text-2xl text-gray-600 pb-3 ">
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
        </div>
      </div>
    </div>
  );
}
