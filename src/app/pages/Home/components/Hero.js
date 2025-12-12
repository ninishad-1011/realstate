"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Hero() {
  const slides = [
    {
      src: "/image/home/pexels-binyaminmellish-106399.jpg",
      title: "Uttara, Dhaka",
      subtitle: "32/5 Uttara",
      description: "Sector-10 Uttara Dhaka Bangladesh",
      button: "HOUSE| $120000",
    },
    {
      src: "/image/home/pexels-heyho-6908502.jpg",
      title: "Appartment Dhanmondi",
      subtitle: "15/2",
      description: "Dhanmondi-15 Dhanmondi Dhaka Bangladesh",
      button: "APPARTMENT | $50000",
    },
    {
      src: "/image/home/pexels-heyho-7195598.jpg",
      title: "Flat Khilgaong",
      subtitle: "Road-20",
      description: "Tipapara Khilgaon Dhaka Bangladesh",
      button: "FLAT | $40000",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        className="h-[700px]" // Set Swiper height
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-[700px]"> {/* Slide height 700px */}
            
            {/* Background Image */}
            <Image
              src={slide.src}
              alt={slide.title}
              width={1920}
              height={700} // Next.js Image height
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

            {/* Text Overlay */}
        <div className="absolute container mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-20  px-4">
              <h2 className="text-sm text-white mb-5 md:text-sm font-semibold">{slide.title}</h2>
              <p className="mt-5 text-green-500 font-bold text-lg md:text-6xl">{slide.subtitle}</p>
              <p className="text-white font-bold mt-5 text-6xl">{slide.description}</p>
              <button className="cursor-pointer mt-6 px-6 py-3 bg-transparent border-2 border-white hover:border-green-600 hover:bg-green-600 rounded-full text-white font-semibold text-3xl mt-10 transition">
                {slide.button}
              </button>
             </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

