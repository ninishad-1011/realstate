"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slider only loads on client
const Slider = dynamic(() => import("react-slick"), { ssr: false });

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
    arrows: false, // optional: hide arrows on small screens
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-black text-center">
        Testimonials
      </h1>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            {/* Image */}
            <img
              src={slide.src}
              alt={slide.name}
              className="w-full h-64 sm:h-72 md:h-96 object-cover rounded-lg"
            />

            {/* Text */}
            <div className="p-4 sm:p-6 mt-4 shadow-lg bg-gray-100 rounded-lg w-full sm:w-3/4 md:w-2/3 text-center">
              <p className="text-base sm:text-lg md:text-2xl font-semibold text-gray-800">
                {slide.subtitle}
              </p>
              <p className="mt-2 text-lg sm:text-xl md:text-3xl font-bold text-gray-900">
                {slide.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
