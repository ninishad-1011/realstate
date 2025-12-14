"use client";
import React from "react";
import data from "../../../../data/propertiy.json";
import agentsData from "../../../../data/bestagent.json"; // agents JSON
import dynamic from "next/dynamic";

// Slider only load on client
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PropertyDetails({ params }) {
  // Next.js 15+ migration support
  const { id } = params; // সরাসরি use করা ঠিক আছে এখন

  const property = data.properties.find((item) => item.id === Number(id));

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
    return <div className="p-10 text-red-500">Property not found</div>;
  }

  // First agent (for demo)
  const agent = agentsData.agents[0];

  return (
    <div className="container mx-auto px-6 py-10 text-black">
      {/* Title & Location */}
      <div className="border-l-4 border-green-500 text-black mb-10">
        <h1 className="text-black text-5xl md:text-6xl font-bold px-6 py-3">
          {property.title}
        </h1>
        <p className="px-6 text-lg md:text-xl">{property.location}</p>
      </div>

      {/* Image Slider */}
      <div className="mb-20 flex justify-center">
        <Slider {...settings} className="w-full max-w-[1300px]">
          {property.images.map((img, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={img}
                alt={`${property.title} ${index + 1}`}
                className="w-full h-[600px] object-cover object-center rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Property Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {/* Left Column */}
        <div className="w-full mb-10">
          {/* Price */}
          <p className="text-3xl md:text-5xl font-bold text-green-600 mb-6">
            $ {property.price.toLocaleString()}
          </p>

          {/* Quick Summary */}
          <div className="mb-6 mt-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              <span className="border-b-4 border-green-500">Quick</span> Summary
            </h2>
            <div className="text-lg md:text-xl space-y-2 mt-4">
              <p>
                <span className="font-semibold">Property Address:</span>{" "}
                {property.address || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Location:</span>{" "}
                {property.location || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {property.status || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Area:</span>{" "}
                {property.area || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Beds:</span>{" "}
                {property.bedroom || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Baths:</span>{" "}
                {property.bathroom || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex flex-col gap-6">
          <div className="mb-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-black">
              Description
            </h2>
            <p className="text-gray-700 text-lg md:text-xl">
              {property.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Amenities</h2>
            <ul className="list-disc pl-6 text-gray-700 text-lg md:text-xl">
              {property.amenities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Agent */}
      <div className="my-20">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          <span className="border-b-4 border-green-500">Contact</span> Agent
        </h2>
        <div className="flex gap-10 mt-20">
          <div className="flex gap-4 border-r-3 pr-10 border-gray-700">
            <img
              src={agent.image}
              alt={agent.name}
              className="w-110 h-150 rounded-md  object-cover"
            />
            <div className="ml-5 my-10">
              <h3 className="text-xl md:text-4xl font-bold">{agent.name}</h3>
              <p className="text-gray-700 font-normal text-2xl mt-4">{agent.description}</p>
              <p className="text-gray-700 text-2xl font-semibold py-4">Contact: {agent.phone}</p>
              <p className="text-gray-700 text-[20px] font-semibold"> Email: {agent.email}</p>
              
            </div>
          </div>

          <div  className="justify-center items-center">
            <form className="max-w-xl mx-auto bg-white p-8  space-y-6">
        

              {/* Name */}
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-[600px] border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-[600px] border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Comment */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-[600px] border border-gray-600 p-3 h-[200px] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-black text-white px-6 py-3  font-semibold hover:bg-green-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
