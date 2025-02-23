"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import slide1 from "../../assets/images/slider/wealthgroth.jpg";
import slide2 from "../../assets/images/slider/slider-4.jpeg";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <div className="w-full relative rounded-br-[25px] rounded-bl-[25px] ">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 9000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {[
            {
              title: ["Building Fortunes,", "Securing Futures"],
              description:
                "You want to grow wealth for your future, we pledge to help you secure the best investment options",
              image: slide1,
              buttons: [
                // { text: "Open An Account", href: "/sign-up", primary: true },
                {
                  text: "Read More",
                  href: "/services?page=Asset Management",
                  primary: false,
                },
              ],
            },
            {
              title: ["In Wealth Creation,", "Knowledge Is Everything."],
              description:
                "Trust our financial advisors to ensure you keep living your best life.",
              image: slide2,
              buttons: [
                {
                  text: "Read More",
                  href: "/services?page=Advisory Services",
                  primary: true,
                },
              ],
            },
            {
              title: ["Live Your Dream.", "Plan For The Future"],
              description:
                "Over 1000 clients trust us to secure and grow their diversified portfolio.",
              image: slide1,
              buttons: [
                // { text: "Open An Account", href: "/sign-up", primary: true },
                {
                  text: "Read More",
                  href: "/services?page=Securities Trading",
                  primary: false,
                },
              ],
            },
            {
              title: ["Stay Ahead Of The Game;", "We've Got The Best Brains"],
              description:
                "When it comes to securities trading, Fortress gives you the best returns with minimal risk.",
              image: slide2,
              buttons: [
                {
                  text: "Read More",
                  href: "/services?page=Securities Trading",
                  primary: true,
                },
              ],
            },
          ].map((slide, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
                <div className="md:order-1 order-2 px-4 lg:px-10 text-center md:text-left">
                  <h1 className="text-[25px] md:text-[2.2rem] lg:text-[3.6rem]  font-semibold leading-tight">
                    {slide.title[0]}
                    <span className="text-[#F49D3F] block text-[25px] md:text-[2.1rem] leading-10  lg:text-[3.2rem] lg:leading-[60px] ">
                      {slide.title[1]}
                    </span>
                  </h1>
                  <p className="text-base md:text-[22px] leading-7 my-4 md:my-4">
                    {slide.description}
                  </p>
                  <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                    {slide.buttons.map((btn, btnIndex) => (
                      <Link
                        key={btnIndex}
                        to={btn.href}
                        className={`
                          w-full md:w-auto py-3 px-6 rounded-xl text-base font-semibold text-center transition
                          ${
                            btn.primary
                              ? "bg-[#F49D3F] text-white hover:bg-opacity-90"
                              : "border border-[#F49D3F] text-[#F49D3F] hover:bg-[#F49D3F] hover:text-white"
                          }
                        `}
                      >
                        {btn.text}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="md:order-2 order-1 px-4 md:px-8">
                  <img
                    src={slide.image}
                    alt="Slider Image"
                    className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover rounded-xl aspect-square"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="absolute 
          lg:left-10 lg:top-1/2 lg:-translate-y-1/2
          md:left-1/2 md:-translate-x-16 md:-bottom-20 md:top-auto
          left-0 top-[56%] -translate-y-1/2
          bg-[#F49D3F] text-white border-none z-10"
        />
        <CarouselNext
          className="absolute 
          lg:right-10 lg:top-1/2 lg:-translate-y-1/2
          md:right-1/2 md:translate-x-16 md:-bottom-20 md:top-auto
          right-0 top-[56%] -translate-y-1/2
          bg-[#F49D3F] text-white border-none z-10"
        />
      </Carousel>
    </div>
  );
}

export default Slider;
