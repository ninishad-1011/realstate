"use client";

import dynamic from "next/dynamic";

// Slider only load on client
const Slider = dynamic(() => import("react-slick"), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const slides = [
    {
      src: "/Image/testimonial/pexels-ketut-subiyanto-4245923.jpg",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Nishad Mojumder",
    },
    {
      src: "/Image/testimonial/pexels-pavel-danilyuk-7937361.jpg",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Nafiul Islam",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-6xl font-bold mb-10 text-black">Testimonials</h1>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4"
          >
            {/* Image Up */}
            <img
              src={slide.src}
              alt={slide.name}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />

            {/* Text Niche */}
            <div className="p-4 text-center mt-4 shadow-lg bg-gray-100 rounded-lg">
              <p className="text-lg md:text-2xl  font-semibold text-gray-800">
                {slide.subtitle}
              </p>
              <p className="mt-2 text-xl md:text-3xl font-bold text-gray-900">
                {slide.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
