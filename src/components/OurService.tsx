import { Link } from "react-router-dom";
import securities from "../assets/images/img1.jpg";
import management from "../assets/images/managment.jpg";
import Advisory from "../assets/images/services.jpg";
import LazyImage from "./reuseable/LazyImage";

const OurService = () => {
  const services = [
    {
      title: "Securities Trading",
      image: securities,
      description:
        "We provide seamless access to a diverse range of investment opportunities including equities, bonds, and other financial instruments on the Nigerian Exchange (NGX)...",
    },
    {
      title: "Asset Management",
      image: management,
      description:
        "At Fortress Capital Limited, we understand that wealth management is both an art and a science. Our Asset Management services are carefully designed to optimize your portfolio while ensuring financial security and long-term wealth creation...",
    },
    {
      title: "Advisory Services",
      image: Advisory,
      description:
        "Making sound financial decisions is crucial for long-term success. Our Financial Advisory services involve the investment of the client's resources in the capital and money market, real estate, and other investment instruments by Fortress Capital Limited...",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20   ">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-[#692371] text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight border-b-2 border-[#f49d3f] w-fit">
            Our Services
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-100 shadow-sm hover:shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative">
                <LazyImage
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 sm:h-52 lg:h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl text-[#F49D3F] font-semibold mb-3 sm:mb-4 group-hover:text-[#692371] transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 line-clamp-4">
                  {service.description}
                </p>
                <div className="flex justify-end">
                  <Link
                    to={`services?page=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 text-white bg-[#F49D3F] rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base hover:bg-[#692371] transition-colors duration-300 group-hover:shadow-md"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
