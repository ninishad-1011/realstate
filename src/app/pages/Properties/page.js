import React from "react";
import Card from "../../card";
import Link from "next/link";

function page() {
  
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 mt-6 sm:mt-10 mb-10">
        <div className="border-l-4 border-green-500 text-black mb-10 sm:mb-20 pl-4 sm:pl-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black py-2 sm:py-3">
            Our Amazing Properties
          </h1>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg py-1 sm:py-2">
            Properties List
          </p>
        </div>

        <div>
          <Card limit={6} pagination={true} />
        </div>
      </div>
    </div>
  );
}

export default page;
