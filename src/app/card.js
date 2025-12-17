"use client";
import React, { useState } from "react";
import data from "../../data/propertiy.json";
import Link from "next/link";

export default function Card({ limit = 3, pagination = false }) {
  const properties = data.properties;

  // Pagination state
  const itemsPerPage = limit;
  const [page, setPage] = useState(1);

  // Filter state
  const [filterStatus, setFilterStatus] = useState("All");

  // Filtered data based on status
  const filteredData =
    filterStatus === "All"
      ? properties
      : properties.filter((item) => item.status === filterStatus);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Current data calculation
  const startIndex = pagination ? (page - 1) * itemsPerPage : 0;
  const endIndex = pagination ? startIndex + itemsPerPage : limit;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      {/* Filter */}
      <div className="mb-6 flex justify-end items-end text-black">
        <select
          value={filterStatus}
          onChange={(e) => {
            setFilterStatus(e.target.value);
            setPage(1);
          }}
          className="border-2 border-green-500 w-full sm:w-[50%] md:w-[20%] p-2 rounded"
        >
          <option value="All">All</option>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
        </select>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:min-h-screen gap-6">
        {currentData.map((item) => (
          <div
            key={item.id}
            className="group rounded-xl overflow-hidden relative transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="h-64 sm:h-72 md:h-full w-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                {item.title}
              </h2>
              <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold drop-shadow-md">
                {item.location}
              </p>

              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mt-2 drop-shadow-md">
                $ {item.price.toLocaleString()}
              </p>

              <Link href={`/property/${item.id}`}>
                <button className="mt-3 sm:mt-4 w-full sm:w-[120px] border-2 border-green-500 text-[14px] sm:text-[16px] p-2 hover:bg-green-500 rounded-full text-white font-semibold transition-all">
                  View More
                </button>
              </Link>

              <div className="flex text-[12px] sm:text-1xl font-semibold bg-green-600 rounded-full px-3 py-1 w-[90px] sm:w-[100px] mt-3 sm:mt-4 gap-2 sm:gap-4">
                <span>{item.status}</span>
              </div>

              <div
                className="mt-3 text-white translate-y-8 opacity-0 
                           group-hover:translate-y-0 group-hover:opacity-100 
                           transition-all duration-500 bg-green-600 rounded-md px-4 sm:px-5 py-2 text-[14px] sm:text-2xl"
              >
                <div className="flex justify-between">
                  <p>🛏 {item.bedroom} Bed</p>
                  <p>🛁 {item.bathroom} Bath</p>
                  <p>📐 {item.area}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {pagination && (
        <div className="flex flex-col sm:flex-row justify-end items-center text-black gap-4 pt-6">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="font-bold text-gray-700">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2  bg-green-500 text-white font-semibold rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
