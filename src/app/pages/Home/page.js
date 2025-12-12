import React from "react";
import Hero from "./components/Hero";
import { LuHouse } from "react-icons/lu";
import { BsBank } from "react-icons/bs";
import { FaSellsy } from "react-icons/fa6";
import Link from "next/link";
import Test from "./components/testomonials";
import Card from "../../card";
import AgentsCard from "@/agent";
function page() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto mt-25">
        <h1 className="text-black text-6xl font-bold ">Our Services</h1>
        <div className="flex gap-8 mt-15  text-black ">
          <div className="border-r-2 border-gray-500"> 
            <h1 className="flex items-center text-5xl font-semibold py-4 gap-2">
              <LuHouse className="text-black text-6xl" />
              Life Style
            </h1>
            <p className="text-[16px]">
              Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum
              porta. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi...
            </p>
            <button className="mt-10 cursor-pointer hover:text-green-600  font-semibold ">
              Read More...
            </button>
          </div>

          <div className="border-r-2 border-gray-500">
            <h1 className="flex items-center text-5xl font-semibold py-4 gap-2">
              <BsBank className="text-black text-6xl" />
              Loans
            </h1>
            <p className="text-[16px]">
              Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui
              posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh
              pulvinar a...
            </p>
            <button className="mt-10 cursor-pointer hover:text-green-600  font-semibold ">
              Read More...
            </button>
          </div>

          <div>
            <h1 className="flex items-center text-5xl font-semibold py-4 gap-2">
              <FaSellsy className="text-black text-6xl" />
              <span>Sells</span>
            </h1>
            <p className="text-[16px]">
              Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum
              porta. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi..
            </p>
            <button className="mt-10 cursor-pointer hover:text-green-600  font-semibold">
              Read More...
            </button>
          </div>
        </div>
      </div>
      {/* lates properties */}
      <div className="container mx-auto mt-20">
        <div className="text-black">
          <div className="flex justify-between items-center">
            <h1 className="text-6xl font-bold">Latest Properties</h1>
            <Link
              href={""}
              className="text-2xl text-gray-600 hover:text-green-500 hover:cursor-pointer"
            >
            View All
            </Link>
          </div>

          <div className="mt-10">
            <Card limit={3} pagination={false} />
          </div>
        </div>
      </div>
      {/* best agents  */}\
      <div className="container mx-auto ">
        <div>
          <h1 className="text-black text-6xl font-bold">Best Agents</h1>
        </div>
        <div>
          <AgentsCard limit={4}/>
        </div>
        
      </div>
      {/* testimonials */}
      <Test />
    </div>
  );
}

export default page;
