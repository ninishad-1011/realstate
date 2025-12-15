"use client";
import React, { useState } from "react";
import data from "../../../../data/propertiy.json";
import agentsData from "../../../../data/bestagent.json"; 
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PropertyDetails({ params }) {
  const [activeTab, setActiveTab] = useState("video");
  const { id } = params;
  const property = data.properties.find((item) => item.id === Number(id));
  const agent = agentsData.agents[0];

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
      {/* Title & Location */}
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
            <div key={index} className="flex justify-center">
              <img
                src={img}
                alt={`${property.title} ${index + 1}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover object-center rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Property Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {/* Left Column */}
        <div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-4">
            $ {property.price.toLocaleString()}
          </p>

          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              <span className="border-b-4 border-green-500">Quick</span> Summary
            </h2>
            <div className="text-sm sm:text-base md:text-lg space-y-1 mt-2">
              <p><span className="font-semibold">Property Address:</span> {property.address || "N/A"}</p>
              <p><span className="font-semibold">Location:</span> {property.location || "N/A"}</p>
              <p><span className="font-semibold">Status:</span> {property.status || "N/A"}</p>
              <p><span className="font-semibold">Area:</span> {property.area || "N/A"}</p>
              <p><span className="font-semibold">Beds:</span> {property.bedroom || "N/A"}</p>
              <p><span className="font-semibold">Baths:</span> {property.bathroom || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Description</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">{property.description}</p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Amenities</h2>
            <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base md:text-lg text-gray-700">
              {property.amenities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mt-6">
        {["video", "floor", "map"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold ${
              activeTab === tab ? "border-b-4 border-green-500" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "video" ? "Video" : tab === "floor" ? "Floor Plans" : "Map"}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === "video" && (
          <iframe
            width="100%"
            height="300"
            className="sm:h-[400px] md:h-[500px] rounded-md"
            src={property.videoUrl || "https://www.youtube.com/embed/LukkDCKSglU"}
            title="Property Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}

        {activeTab === "floor" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {property.floorplan.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`${property.title} floorplan ${index + 1}`}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === "map" && (
          <iframe
            src={property.mapUrl || "https://www.google.com/maps/embed?..."}
            width="100%"
            height="300"
            className="sm:h-[400px] md:h-[450px] rounded-md mt-2"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        )}
      </div>

      {/* Contact Agent */}
      <div className="mt-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          <span className="border-b-4 border-green-500">Contact</span> Agent
        </h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Agent Info */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 border-b md:border-b-0 md:border-r border-gray-300 pb-6 md:pb-0 md:pr-6">
            <img
              src={agent.image}
              alt={agent.name}
              className="w-full md:w-[180px] h-auto rounded-md object-cover"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{agent.name}</h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-2">{agent.description}</p>
              <p className="text-gray-700 font-semibold text-sm sm:text-base md:text-lg mt-2">
                Contact: {agent.phone}
              </p>
              <p className="text-gray-700 font-semibold text-sm sm:text-base md:text-lg">
                Email: {agent.email}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="w-full max-w-full md:max-w-md bg-white p-4 sm:p-6 md:p-8 space-y-4 rounded-md shadow-md">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-300 p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-2 sm:py-3 font-semibold hover:bg-green-700 transition-colors rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
