import { Link } from "react-router-dom";
import securities from "../assets/images/img1.jpg";
import management from "../assets/images/managment.jpg";
import Advisory from "../assets/images/services.jpg";

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
    <section className="w-full px-4 md:px-1 lg:px-12 xl:px-16  mt-[1rem]  bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h1 className="text-[#692371] text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-[#F49D3F] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 md:h-64 object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 lg:p-8 md:p-2">
                <p className="text-[21px] lg:text-2xl text-[#F49D3F] font-semibold mb-4 group-hover:text-[#692371] transition-colors duration-300">
                  {service.title}
                </p>
                <p className="text-base text-gray-600 mb-6 line-clamp-4">
                  {service.description}
                </p>
                <div className="flex justify-end">
                  <Link
                    to={`services?page=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 text-white bg-[#F49D3F] rounded-lg px-6 py-3 hover:bg-[#692371] transition-colors duration-300 group-hover:shadow-md"
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
