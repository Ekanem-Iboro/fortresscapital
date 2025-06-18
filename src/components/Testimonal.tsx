"use client";
import { useState, useEffect } from "react";
import {
  // Star,
  ChevronLeft,
  ChevronRight,
  User2,
} from "lucide-react";
import { useGetTestimonials } from "../api/get/getData";
import LoadingOverlay from "./OverlayLoader";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<string>("");
  const { data: testimonials, isFetching } =
    useGetTestimonials("testimonials.php");

  const handleNextTestimonial = () => {
    if (!testimonials?.data?.length) return;
    setSlideDirection("slide-out-left");
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % testimonials?.data?.length
      );
      setSlideDirection("slide-in-right");
    }, 300);
  };

  const handlePrevTestimonial = () => {
    if (!testimonials?.data?.length) return;
    setSlideDirection("slide-out-right");
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setSlideDirection("slide-in-left");
    }, 300);
  };

  useEffect(() => {
    if (!isFetching && testimonials?.data?.length > 0) {
      const interval = setInterval(() => {
        handleNextTestimonial();
      }, 2000);

      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, testimonials]);

  const handleDotClick = (index: number) => {
    if (!testimonials?.data?.length) return;
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

  if (isFetching) {
    return <LoadingOverlay />;
  }

  if (!testimonials?.data?.length) {
    return (
      <div className="lg:min-h-screen h-fit bg-[#692371] flex items-center justify-center rounded-md">
        <div className="text-center text-white">
          <User2 size={64} className="mx-auto mb-4" />
          <p className="text-xl">No testimonials available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:min-h-screen h-fit bg-[#692371] block md:flex items-center justify-center md:p-4 p-2 py-11 rounded-md overflow-x-hidden">
      <div className="container mx-auto relative">
        <h1 className="md:text-4xl text-[20px] font-bold text-center text-white md:mb-12 mb-4">
          What Our Clients Say
        </h1>

        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrevTestimonial}
            className="absolute left-1 md:-left-3 lg:left-0 z-20 md:bg-white/20 bg-purple-900 rounded-full p-2 md:hover:bg-white/30 transition"
            title="Previous Testimonial"
          >
            <ChevronLeft className="text-white" size={30} />
          </button>

          <div className={`max-w-xl w-full ${slideDirection}`}>
            <div className="bg-white rounded-xl shadow-2xl p-8 text-center">
              {testimonials?.data[currentIndex]?.image ? (
                <img
                  src={testimonials?.data[currentIndex].photo}
                  alt={testimonials?.data[currentIndex].name}
                  className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 border-[#F49D3F]"
                />
              ) : (
                <User2
                  size={144}
                  className="w-36 h-36 rounded-full mx-auto mb-4 p-4 border-4 border-[#F49D3F] text-[#F49D3F]"
                />
              )}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {testimonials?.data[currentIndex].name}
              </h3>
              {/* <div className="flex justify-center text-[#F49D3F] mb-4">
                {[...Array(testimonials[currentIndex].rating || 5)].map(
                  (_, i) => (
                    <Star key={i} fill="#F49D3F" className="w-5 h-5" />
                  )
                )}
              </div> */}
              <p className="text-gray-600 italic text-lg">
                &ldquo;
                {testimonials?.data[currentIndex].comment}
                &rdquo;
              </p>
            </div>
          </div>

          <button
            onClick={handleNextTestimonial}
            className="absolute right-1 md:-right-3 lg:right-0 z-20 md:bg-white/20 bg-purple-900 rounded-full p-2 md:hover:bg-white/30 transition"
            title="Next Testimonial"
          >
            <ChevronRight className="text-white" size={30} />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials?.data?.map((_: string, index: number) => (
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
