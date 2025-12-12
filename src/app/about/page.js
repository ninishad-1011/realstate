import AgentsCard from "@/agent";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="container mx-auto text-black mt-10">
      <div className="border-l-4 border-green-500 text-black mb-20">
        <h1 className="text-black text-6xl font-bold px-6 py-3">
          Unlocking Dreams, Opening New Doors
        </h1>
      </div>

      {/* Image container */}
      <div className="relative w-full h-[700px]">
        <Image
          src="/Image/testimonial/pexels-fauxels-3184416.jpg"
          alt="cover"
          className="object-cover"
          fill
        />

        {/* Card overlay */}
        <div className="absolute bottom-10  bg-green-500 p-15 bg-opacity-90 p-6  shadow-lg max-w-sm">
          <h2 className="text-4xl font-bold text-black  mb-2">
            EstateAgency Sinse 2017
          </h2>
          <p className="text-gray-700">Art & Creative</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-20 my-35">
        <div>
          <Image
            src={"/Image/WhatsApp Image 2025-11-13 at 19.05.52_1f28799b.jpg"}
            width={1000}
            height={1300}
            alt="me"
          />
        </div>
        <div>
          <div>
            <h1 className="text-5xl font-bold  text-black mb-10">
              Md.Nafiul Islam <br></br>
              <span className="border-b-4 border-green-500">Nishad</span>{" "}
            </h1>
            <p className="leading-[24px] font-normal text-[20px]">
              Proper care and attention are essential for achieving success. It
              is important to approach each task with focus and dedication. A
              strong foundation and consistent effort will ensure steady growth
              and positive results. Challenges are opportunities to learn and
              improve, helping you build resilience and confidence.<br></br> <br></br> Continuous
              improvement requires persistence and careful planning. By staying
              committed and managing your time effectively, you can accomplish
              your goals while maintaining balance. Every step you take toward
              progress adds value and strengthens your journey toward long-term
              success.
            </p>
          </div>
        </div>
        
      </div>
      <div className="mt-35 gap-10 ">
            <h1 className="text-5xl font-bold text-black">Meet Our Teams</h1>
            <AgentsCard limit={4}/>
        </div>
    </div>
  );
}

export default Page;
