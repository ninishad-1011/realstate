"use client";

import React, { useRef, useState, use } from "react";
import data from "../../../../data/propertiy.json";
import agentsData from "../../../../data/bestagent.json";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PropertyDetails({ params }) {
  const { id } = use(params); 
  const [activeTab, setActiveTab] = useState("video");

  const property = data.properties.find((item) => item.id === Number(id));
  const agent = agentsData.agents[0];

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  if (!property) {
    return <div className="p-6 text-red-500">Property not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10 text-black">
      {/* Title */}
      <div className="border-l-4 border-green-500 mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4 py-2">
          {property.title}
        </h1>
        <p className="px-4 text-lg sm:text-xl">{property.location}</p>
      </div>

      {/* Image Slider */}
      <div className="mb-12">
        <Slider {...settings}>
          {property.images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={property.title}
                className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Property Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-3xl font-bold text-green-600 mb-4">
            $ {property.price.toLocaleString()}
          </p>

          <h2 className="text-2xl font-bold mb-2">
            <span className="border-b-4 border-green-500">Quick</span> Summary
          </h2>

          <div className="space-y-1">
            <p><b>Address:</b> {property.address}</p>
            <p><b>Location:</b> {property.location}</p>
            <p><b>Status:</b> {property.status}</p>
            <p><b>Area:</b> {property.area}</p>
            <p><b>Beds:</b> {property.bedroom}</p>
            <p><b>Baths:</b> {property.bathroom}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Description</h2>
          <p className="text-gray-700">{property.description}</p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Amenities</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {property.amenities.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mt-8">
        {["video", "floor", "map"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold ${
              activeTab === tab ? "border-b-4 border-green-500" : ""
            }`}
          >
            {tab === "video" ? "Video" : tab === "floor" ? "Floor Plans" : "Map"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 flex justify-center items-center">
        {activeTab === "video" && (
          <iframe
            width="1200"
            height="550"
            src="https://www.youtube.com/embed/4609MKHnaZk?si=SADs7EspXNspdEbX"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-xl"
            loading="lazy"
          />
        )}

        {activeTab === "floor" && (
          <div className="grid grid-cols-1 gap-4 place-items-center">
            {property.floorplan.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-[1200px] h-[550px] object-cover rounded-xl"
                loading="lazy"
              />
            ))}
          </div>
        )}

        {activeTab === "map" && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3648.4564635560855!2d90.29823358667907!3d23.87342726823454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1765978963715!5m2!1sen!2sbd"
            className="w-[1200px] h-[550px] rounded-xl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>

      {/* Contact Agent */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">
          <span className="border-b-4 border-green-500">Contact</span> Agent
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Agent Info */}
          <div className="flex gap-4">
            <img
              src={agent.image}
              className="w-[350px] rounded-md object-cover"
            />
            <div>
              <h3 className="text-xl font-bold">{agent.name}</h3>
              <p>{agent.description}</p>
              <p className="font-semibold mt-2">{agent.phone}</p>
              <p className="font-semibold">{agent.email}</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={sendEmail}
            ref={form}
            className="w-full md:max-w-md bg-white p-6 border-l-3 border-gray-700 space-y-4"
          >
            <h1 className="text-3xl text-center font-semibold">Send Message</h1>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border p-3 rounded"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded"
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full border p-3 rounded"
              onChange={handleChange}
              required
            />

            <button className="w-full bg-black text-white py-3 font-semibold hover:bg-green-700 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
