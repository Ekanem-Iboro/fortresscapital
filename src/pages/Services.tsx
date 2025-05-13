/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState, Suspense } from "react";
import { ArrowDown, ArrowRight, Menu } from "lucide-react";
import Footer from "../components/Footer";
import abouthero from "../assets/images/whoweare.jpg";
import securities from "../assets/images/img1.jpg";
import management from "../assets/images/managment.jpg";
import Advisory from "../assets/images/services.jpg";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const serviceContent: any = {
  "Securities Trading": {
    title: "Securities Trading",
    mainImage: securities,
    description: (
      <div className="space-y-4">
        <div className="mb-4">
          We provide seamless access to a diverse range of investment
          opportunities including equities, bonds, and other financial
          instruments on the <strong>Nigerian Exchange (NGX), </strong> National
          Association of Securities Dealers <strong>(NASD), </strong> and
          Financial Market Dealer Quotation <strong> (FMDQ).</strong>
        </div>

        <div className="mb-4">
          We have been registered as a broker-dealer with the SEC for over
          twenty years, ensuring efficient trade execution, competitive
          commissions, and market intelligence to guide your investment
          decisions. We provide online real-time access to the market,
          leveraging technology. With almost three decades of experience and
          expertise, our clients count on the market insight of our formidable
          stockbrokers to help them access liquidity, and minimize market
          impact.
        </div>
      </div>
    ),
    detailedContent: [
      {
        subtitle: "Comprehensive Trading Solutions",
        text: "Our securities trading service provides access to a wide range of financial instruments including stocks, bonds, and other securities. We leverage cutting-edge technology and deep market expertise to execute trades efficiently and effectively.",
      },
      {
        subtitle: "Market Analysis & Research",
        text: "Stay ahead with our comprehensive market analysis and research reports. Our team of analysts provides detailed insights into market trends, helping you make informed investment decisions.",
      },
    ],
    features: [
      "Real-time market data access",
      "Competitive trading fees",
      "Expert execution services",
      "Risk management solutions",
    ],
    ctaLink: "/createaccount",
    ctaText: "Open An Account",
  },
  "Asset Management": {
    title: "Asset Management",
    mainImage: management,
    description: (
      <div className="space-y-4">
        <div className="mb-4">
          At Fortress Capital Limited, we understand that wealth management is
          both an art and a science. Our <strong> Asset Management </strong>{" "}
          services are carefully designed to optimize your portfolio while
          ensuring financial security and long-term wealth creation. We develop
          personalized investment portfolios that align favourably with your
          risk tolerance, financial objectives, and market conditions. We take
          on a diversified investment approach, offering you a broad range of
          asset classes, including equities, and fixed income to ensure a
          resilient portfolio. Our clients find us trustworthy as we ensure
          transparency in reporting, keeping you informed with regular and
          detailed portfolio performance reports.
        </div>

        <div className="mb-4">
          Our approach to asset management is centred on delivering consistent,
          long-term value, ensuring your capital works efficiently for you.
        </div>
      </div>
    ),
    detailedContent: [
      {
        subtitle: "Professional Portfolio Management",
        text: "Our asset management team brings decades of combined experience in managing diverse investment portfolios. We employ sophisticated strategies to preserve and grow your wealth across different market conditions.",
      },
      {
        subtitle: "Investment Solutions",
        text: "We offer a range of investment solutions tailored to meet different investment objectives, from conservative income-focused strategies to aggressive growth portfolios.",
      },
      {
        subtitle: "Risk Management",
        text: "Our comprehensive risk management framework ensures your investments are protected through diversification, constant monitoring, and strategic rebalancing when necessary.",
      },
    ],
    features: [
      "Customized investment strategies",
      "Regular portfolio rebalancing",
      "Comprehensive reporting",
      "Dedicated account management",
    ],
    ctaLink: "/createaccount",
    ctaText: "Open An Account",
  },
  "Advisory Services": {
    title: "Advisory Services",
    mainImage: Advisory,
    description:
      "Making sound financial decisions is crucial for long-term success. Our Financial Advisory services involve the investment of the client's resources in the capital and money market, real estate, and other investment instruments by Fortress Capital Limited. Decision-making on the asset allocation of the client's resources could be in conjunction with the client or at our sole discretion. To invest successfully, we formulate a portfolio management process to ensure that your investments are managed as a spectrum of diversified investments rather than unrelated individual holdings. The wealth portfolio management mandate allows you to sit down with your relationship manager and define your investment policy. This investment policy defines your investment objectives (e.g. preservation of capital, risk tolerance, expected rate of return), constraints (e.g. client's values or ethics), and management style of the various asset classes contained in your portfolio. We then transform these investment policies into a tailor-made portfolio suited to your person. Our team of experienced financial experts provides renowned institutions, high-net-worth individuals, and retail clients with innovative insights.",
    detailedContent: [
      {
        subtitle: "Strategic Financial Planning",
        text: "We provide comprehensive financial planning services that help you achieve your long-term financial goals. Our advisors work closely with you to develop personalized strategies aligned with your objectives.",
      },
      {
        subtitle: "Investment Consulting",
        text: "Our investment consulting services offer institutional and individual clients expert guidance on portfolio construction, manager selection, and risk management strategies.",
      },
      {
        subtitle: "Wealth Management",
        text: "We offer holistic wealth management solutions that combine investment management, tax planning, estate planning, and other financial services to help you build and preserve wealth.",
      },
    ],
    features: [
      "Personalized financial strategies",
      "Retirement planning",
      "Investment education",
    ],
    ctaLink: "/createaccount",
    ctaText: "Open An Account",
  },
};

function ServicesContent() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<
    (typeof serviceContent)[keyof typeof serviceContent] | null
  >(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const page = searchParams.get("page");
    if (page && serviceContent[page]) {
      setSelectedService(serviceContent[page]);
    } else {
      // Set Securities Trading as default when no page parameter is present
      setSelectedService(serviceContent["Securities Trading"]);
      navigate("?page=Securities Trading");
    }

    const checkScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollIndicator(scrollPosition < 100);
    };

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => window.removeEventListener("scroll", checkScroll);
  }, [navigate, searchParams]);

  const handleServiceChange = (serviceName: string) => {
    navigate(`/services?page=${encodeURIComponent(serviceName)}`);
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <header className="w-full relative">
        <div className="w-full flex flex-col items-center md:px-[22%] px-1 mb-9 md:text-center">
          <h1 className="text-[42px] font-semibold text-[#f49d3f] mb-[2%] ">
            Our Services
          </h1>
          <p className="md:text-[20px]   leading-[30px] ">
            At Fortress Capital Limited, we are committed to providing
            exceptional financial services tailored to meet the unique needs of
            our clients.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[600px]">
          <img
            src={abouthero}
            alt="Services Hero"
            className="object-cover h-full w-full relative z-30"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold px-4 text-center">
              Our Services
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Service Navigation - Mobile */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg"
          >
            <span>{selectedService?.title || "Select a Service"}</span>
            <Menu size={24} />
          </button>

          {isMenuOpen && (
            <div className="absolute z-50 mt-2 w-[calc(100%-2rem)] bg-white shadow-lg rounded-lg">
              {Object.keys(serviceContent).map((serviceName) => (
                <button
                  key={serviceName}
                  onClick={() => handleServiceChange(serviceName)}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 ${
                    selectedService?.title === serviceName
                      ? "bg-gray-50 text-[#692371]"
                      : ""
                  }`}
                >
                  {serviceName}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Service Navigation - Desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(serviceContent).map((serviceName) => (
            <button
              key={serviceName}
              onClick={() => handleServiceChange(serviceName)}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedService?.title === serviceName
                  ? "bg-[#692371] text-white"
                  : "bg-gray-100 hover:bg-[#F49D3F] hover:text-white"
              }`}
            >
              {serviceName}
            </button>
          ))}
        </div>

        {/* Selected Service Content */}
        {selectedService ? (
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#F49D3F] mb-6">
                {selectedService.title}
              </h2>

              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
                <img
                  src={selectedService.mainImage}
                  alt={selectedService.title}
                  className="object-cover h-full w-full"
                />
              </div>

              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Detailed Content */}
              <div className="space-y-6 md:space-y-8">
                {selectedService.detailedContent.map(
                  (content: any, index: number) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 md:p-6 rounded-lg"
                    >
                      <h3 className="text-xl md:text-2xl font-semibold text-[#692371] mb-3 md:mb-4">
                        {content.subtitle}
                      </h3>
                      <p className="text-gray-700">{content.text}</p>
                    </div>
                  )
                )}
              </div>

              {/* Features */}
              <div className="mt-8 md:mt-12">
                <h3 className="text-xl md:text-2xl font-semibold text-[#692371] mb-4 md:mb-6">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {selectedService.features.map(
                    (feature: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-white p-3 md:p-4 rounded-lg shadow"
                      >
                        <ArrowRight className="text-[#F49D3F] flex-shrink-0" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 md:mt-12 text-center">
                <Link to={selectedService.ctaLink}>
                  <button className="w-full sm:w-auto bg-[#692371] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#F49D3F] transition-colors">
                    {selectedService.ctaText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-600 p-8">
            Please select a service to view details
          </div>
        )}
        <div className="md:px-[13rem]">
          <div className="bg-gray-50 p-1 md:p-6 rounded-xl">
            <h3 className="text-lg md:text-xl text-gray-700 p-1">
              At <strong> Fortress Capital Limited, </strong> we pride ourselves
              on delivering superior service and building lasting relationships
              with our clients. Our young and dynamic management team is
              dedicated to providing efficient and value-added services,
              reflecting our commitment to your financial success.
            </h3>
          </div>
        </div>
      </main>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-[#F49D3F] w-6 h-6 md:w-8 md:h-8" />
        </div>
      )}
      {/*  */}

      <Footer />
    </div>
  );
}

export default function Services() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
