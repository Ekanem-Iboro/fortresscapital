"use client";
import news1 from "../../assets/images/multislises/news-6.jpeg";
import news2 from "../../assets/images/multislises/news-7.jpeg";
import news3 from "../../assets/images/multislises/news-8.jpeg";
import news4 from "../../assets/images/multislises/news-10.jpeg";
import news5 from "../../assets/images/multislises/news-11.jpeg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

export function MultiSlides() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full md:my-[6%] md:px-[15%]"
    >
      <CarouselContent className="-ml-1 w-full">
        {slider?.map((item, index) => (
          <CarouselItem
            className="pl-1 basis-1/2 md:basis-1/3 mx-1"
            key={index}
          >
            <div className="p-1 cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.08] relative">
              <Link to="/">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="md:h-[250px] md:w-[450px] h-[250px] w-[300px] rounded-md "
                />
                <h1 className="my-4 px-2 text-[#151413] text-[18px]">
                  {item.title}
                </h1>
                <p>{item.description}</p>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const slider = [
  {
    src: news1,
    alt: "News 1",
    title: "News 1 Title",
    description: "News 1 Description",
  },
  {
    src: news2,
    alt: "News 2",
    title: "News 2 Title",
    description: "News 2 Description",
  },
  {
    src: news3,
    alt: "News 3",
    title: "News 3 Title",
    description: "News 3 Description",
  },
  {
    src: news4,
    alt: "News 4",
    title: "News 4 Title",
    description: "News 4 Description",
  },
  {
    src: news5,
    alt: "News 5",
    title: "News 5 Title",
    description: "News 5 Description",
  },
];
