import AgentsCard from "@/agent";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="container mx-auto text-black mt-10 px-4">
      {/* Heading */}
      <div className="border-l-4 border-green-500 text-black mb-12">
        <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold px-4 py-3">
          Unlocking Dreams, Opening New Doors
        </h1>
      </div>

      {/* Image container */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[700px] mb-12">
        <Image
          src="/Image/testimonial/pexels-fauxels-3184416.jpg"
          alt="cover"
          className="object-cover"
          fill
        />

        {/* Card overlay */}
        <div className="absolute bottom-4 sm:bottom-8 md:bottom-10 left-4 sm:left-8 md:left-10 bg-green-500 bg-opacity-90 p-4 sm:p-6 md:p-8 shadow-lg max-w-xs sm:max-w-sm">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
            EstateAgency Since 2017
          </h2>
          <p className="text-gray-700 text-sm sm:text-base">Art & Creative</p>
        </div>
      </div>

      {/* About section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mb-16">
        <div className="w-full">
          <Image
            src={"/Image/WhatsApp Image 2025-11-13 at 19.05.52_1f28799b.jpg"}
            width={1000}
            height={1300}
            alt="me"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
            Md. Nafiul Islam <br />
            <span className="border-b-4 border-green-500">Nishad</span>
          </h1>
          <p className="leading-relaxed text-base sm:text-lg md:text-[20px]">
            Proper care and attention are essential for achieving success. It
            is important to approach each task with focus and dedication. A
            strong foundation and consistent effort will ensure steady growth
            and positive results. Challenges are opportunities to learn and
            improve, helping you build resilience and confidence.
            <br />
            <br />
            Continuous improvement requires persistence and careful planning.
            By staying committed and managing your time effectively, you can
            accomplish your goals while maintaining balance. Every step you
            take toward progress adds value and strengthens your journey toward
            long-term success.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8">
          Meet Our Teams
        </h1>
        <AgentsCard limit={4} />
      </div>
    </div>
  );
}

export default Page;
