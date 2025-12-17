"use client";

import React, { useRef, useState } from "react";
import { MdMessage } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FiShare2 } from "react-icons/fi";
import Swal from "sweetalert2";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";




export default function Page() {
const form = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_aw8frv1",
        "template_t0wvz7c",
        form.current,
        "9PXgQmNrARA8aN6P4"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Your message has been sent successfully.",
          confirmButtonColor: "#16a34a",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Failed to send message. Please try again later.",
          confirmButtonColor: "#dc2626",
        });
      });
  };


  const socialIcons = [
    { icon: <FaFacebook />, href: "https://facebook.com" },
    { icon: <FaLinkedin />, href: "https://linkedin.com" },
    { icon: <FaInstagramSquare />, href: "https://instagram.com" },
    { icon: <FaGithub />, href: "https://github.com" },
  ];


  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-10 text-black mt-6 sm:mt-10">
      {/* Header */}
      <div className="border-l-4 border-green-500 mb-10 sm:mb-20 pl-4 sm:pl-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold py-2 sm:py-3">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 py-1 sm:py-2">
          One is entitled to enjoy rights without obstruction, except as limited
          by law.
        </p>
      </div>

      {/* Google Map */}
      <div className="mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3648.4564635560855!2d90.29823358667907!3d23.87342726823454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1765978963715!5m2!1sen!2sbd"
          className="w-full h-64 sm:h-96 md:h-[650px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contact Form & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-20">
        {/* Form */}
        <div className=" p-4 rounded-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-center pb-4">
            Send Message
          </h1>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full border rounded px-3 py-2"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full border rounded px-3 py-2"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              required
              className="w-full border rounded px-3 py-2"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows={5}
              required
              className="w-full border rounded px-3 py-2"
            ></textarea>

        <button className="w-full bg-black text-white py-3 font-semibold hover:bg-green-700 rounded">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 pl-4 justify-center lg:pl-6">
          <div className="flex items-center gap-4">
            <MdMessage className="text-4xl sm:text-5xl" />
            <span className="text-xl sm:text-3xl font-semibold">Say Hello</span>
          </div>

          <p>Email: nafiul1011@gmail.com</p>
          <p>Contact: +8801571117435</p>

          <div className="flex items-center gap-4 mt-6">
            <SlLocationPin className="text-4xl sm:text-5xl" />
            <span className="text-xl sm:text-3xl font-semibold">Find Us</span>
          </div>

          <p>City University, Savar, Dhaka, Bangladesh</p>

          <div className="flex items-center gap-4 mt-6">
            <FiShare2 className="text-4xl sm:text-5xl" />
            <span className="text-xl sm:text-2xl font-semibold">
              Social Networks
            </span>
          </div>

          <div className="flex gap-4 text-2xl">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
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
