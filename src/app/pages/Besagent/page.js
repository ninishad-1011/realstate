import AgentsCard from "@/agent";
import React from "react";

export default function page() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 mt-6 sm:mt-10 mb-10">
        {/* Header Section */}
        <div className="border-l-4 border-green-500 text-black mb-10 sm:mb-20 pl-4 sm:pl-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black py-2 sm:py-3">
            Our Amazing Agents
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 py-1 sm:py-2">
            Agents List
          </p>
        </div>

        {/* Content Section */}
        <div>
          <AgentsCard />
        </div>
      </div>
    </div>
  );
}
