"use client";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import user from "../assets/images/img3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: user,
    testimony:
      "An incredible experience that exceeded all my expectations. The attention to detail and professionalism was outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    image: user,
    testimony:
      "Transformative service that completely changed my perspective. Highly recommended to anyone seeking excellence.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    image: user,
    testimony:
      "Innovative solutions that truly make a difference. Their approach is both creative and practical.",
    rating: 4,
  },
];
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextTestimonial();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleNextTestimonial = () => {
    setSlideDirection("slide-out-left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setSlideDirection("slide-in-right");
    }, 300);
  };

  const handlePrevTestimonial = () => {
    setSlideDirection("slide-out-right");
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setSlideDirection("slide-in-left");
    }, 300);
  };

  const handleDotClick = (index: number) => {
    if (index > currentIndex) {
      setSlideDirection("slide-out-left");
    } else {
      setSlideDirection("slide-out-right");
    }

    setTimeout(() => {
      setCurrentIndex(index);
      setSlideDirection(
        index > currentIndex ? "slide-in-right" : "slide-in-left"
      );
    }, 300);
  };

  return (
    <div className="lg:min-h-screen h-fit bg-[#692371] block  md:flex items-center justify-center md:p-4 p-2 py-11 rounded-md overflow-x-hidden">
      <div className="container mx-auto relative">
        <h1 className="md:text-4xl text-[20px] font-bold text-center text-white md:mb-12 mb-4">
          What Our Clients Say
        </h1>

        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={handlePrevTestimonial}
            className="absolute left-1 md:-left-3 lg:left-0 z-20 md:bg-white/20  bg-purple-900 rounded-full p-2  md:hover:bg-white/30 transition"
            title="Previous Testimonial"
          >
            <ChevronLeft className="text-white" size={30} />
          </button>

          {/* Testimonial Carousel */}
          <div className={`max-w-xl w-full ${slideDirection}`}>
            <div className="bg-white rounded-xl shadow-2xl p-8 text-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 border-[#F49D3F]"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {testimonials[currentIndex].name}
              </h3>
              <div className="flex justify-center text-[#F49D3F] mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} fill="#F49D3F" className="w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-600 italic text-lg">
                &ldquo;{testimonials[currentIndex].testimony}&rdquo;
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNextTestimonial}
            className="absolute right-1 md:-right-3 lg:right-0 z-20 md:bg-white/20 bg-purple-900 rounded-full p-2 md:hover:bg-white/30 transition"
            title="Next Testimonial"
          >
            <ChevronRight className="text-white" size={30} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex  justify-center mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
