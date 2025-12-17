import React from "react";
import Hero from "./components/Hero";
import { LuHouse } from "react-icons/lu";
import { BsBank } from "react-icons/bs";
import { FaSellsy } from "react-icons/fa6";
import Link from "next/link";
import Test from "./components/testomonials";
import Card from "../../card";
import AgentsCard from "@/agent";

function Page() {
  return (
    <div>
      <Hero />

      {/* Services Section */}
      <div className="container mx-auto mt-16 px-4">
        <h1 className="text-black text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
          Our Services
        </h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 text-black">
          <div className="md:border-r-2 md:border-gray-500 pr-0 md:pr-6">
            <h1 className="flex items-center text-2xl sm:text-3xl md:text-5xl font-semibold py-4 gap-2">
              <LuHouse className="text-black text-4xl sm:text-5xl md:text-6xl" />
              Life Style
            </h1>
            <p className="text-sm sm:text-base">
              Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum
              porta. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi...
            </p>
            <Link href={"/about"}>
              <button className="mt-4 sm:mt-6 cursor-pointer hover:text-green-600 font-semibold">
                Read More...
              </button>
            </Link>
          </div>

          <div className="md:border-r-2 md:border-gray-500 pr-0 md:pr-6">
            <h1 className="flex items-center text-2xl sm:text-3xl md:text-5xl font-semibold py-4 gap-2">
              <BsBank className="text-black text-4xl sm:text-5xl md:text-6xl" />
              Loans
            </h1>
            <p className="text-sm sm:text-base">
              Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui
              posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh
              pulvinar a...
            </p>
            <Link href={"/about"}>
              <button className="mt-4 sm:mt-6 cursor-pointer hover:text-green-600 font-semibold">
                Read More...
              </button>
            </Link>
          </div>

          <div>
            <h1 className="flex items-center text-2xl sm:text-3xl md:text-5xl font-semibold py-4 gap-2">
              <FaSellsy className="text-black text-4xl sm:text-5xl md:text-6xl" />
              <span>Sells</span>
            </h1>
            <p className="text-sm sm:text-base">
              Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum
              porta. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi..
            </p>
            <Link href={"/about"}>
              <button className="mt-4 sm:mt-6 cursor-pointer hover:text-green-600 font-semibold">
                Read More...
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Properties */}
      <div className="container mx-auto mt-16 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black">
            Latest Properties
          </h1>
          <Link
            href={"/pages/Properties"}
            className="text-base text-white md:text-white sm:text-lg bg-green-800 md:hover:bg-green-600 hover:cursor-pointer px-3 py-1 rounded"
          >
            View All
          </Link>
        </div>
        <div className="mt-8 ">
          <Card limit={3} pagination={false}  />
        </div>
      </div>

      {/* Best Agents */}
      <div className="container mx-auto mt-16 px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black">
          Best Agents
          </h1>
          <Link
            href={"/pages/Besagent"}
            className="text-base text-white md:text-white sm:text-lg bg-green-800 md:hover:bg-green-600 hover:cursor-pointer px-3 py-1 rounded"
          >
            View All
          </Link>
        </div>
        <div>
          <AgentsCard limit={4} />
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto mt-16 px-4">
        <Test />
      </div>
    </div>
  );
}

export default Page;
