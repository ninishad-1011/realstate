"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import hero1 from "../../../../../public/home/pexels-binyaminmellish-106399.jpg";
import hero2 from "../../../../../public/home/pexels-heyho-6908502.jpg"; // example
import hero3 from "../../../../../public/home/pexels-heyho-7195598.jpg";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Hero() {
const slides = [
  {
    src: hero1,
    title: "Uttara, Dhaka",
    subtitle: "32/5 Uttara",
    description: "Sector-10 Uttara Dhaka Bangladesh",
    button: "HOUSE | $120000",
  },
  {
    src: hero2,
    title: "Apartment Dhanmondi",
    subtitle: "15/2",
    description: "Dhanmondi-15 Dhanmondi Dhaka Bangladesh",
    button: "APARTMENT | $50000",
  },
  {
    src: hero3,
    title: "Flat Khilgaon",
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
        className="h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
              {/* Background Image */}
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

              {/* Text Overlay */}
              <div className="absolute inset-0 md:gap-10  flex flex-col justify-center items-center text-center px-4 md:px-10 lg:px-20">
                <h2 className="text-white text-sm sm:text-base md:text-4xl font-semibold mb-2">
                  {slide.title}
                </h2>
                <p className="text-green-500 font-bold text-xl sm:text-2xl md:text-6xl mb-2">
                  {slide.subtitle}
                </p>
                <p className="text-white font-bold text-lg sm:text-xl md:text-3xl mb-4">
                  {slide.description}
                </p>
                <button className="cursor-pointer px-6 py-3 bg-transparent border-2 border-white hover:border-green-600 hover:bg-green-600 rounded-full text-white font-semibold text-base sm:text-lg md:text-xl transition">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
