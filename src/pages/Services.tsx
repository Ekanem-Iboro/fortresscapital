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
    description:
      "We invest for the future on behalf of our clients, helping more and more Nigerians enjoy financial well-being today and for generations to come.",
    detailedContent: [
      {
        subtitle: "Comprehensive Trading Solutions",
        text: "Our securities trading service provides access to a wide range of financial instruments including stocks, bonds, and other securities. We leverage cutting-edge technology and deep market expertise to execute trades efficiently and effectively.",
      },
      {
        subtitle: "Market Analysis & Research",
        text: "Stay ahead with our comprehensive market analysis and research reports. Our team of analysts provides detailed insights into market trends, helping you make informed investment decisions.",
      },
      {
        subtitle: "Portfolio Management",
        text: "We offer personalized portfolio management services, ensuring your investments align with your financial goals and risk tolerance. Our experienced traders monitor market conditions continuously to optimize your returns.",
      },
    ],
    features: [
      "Real-time market data access",
      "Competitive trading fees",
      "Expert execution services",
      "Risk management solutions",
      "Regular portfolio reviews",
    ],
    ctaLink: "/createaccount",
    ctaText: "Open An Account",
  },
  "Asset Management": {
    title: "Asset Management",
    mainImage: management,
    description:
      "With over X billion naira in assets under our supervision, Fortress Capital Limited delivers investment and advisory services.",
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
      "Tax-efficient investing",
      "Dedicated account management",
    ],
    ctaLink: "/createaccount",
    ctaText: "Open An Account",
  },
  "Advisory Services": {
    title: "Advisory Services",
    mainImage: Advisory,
    description:
      "Our team of experienced financial experts provide renowned institutions, high net worth individuals and retail clients with deep insights.",
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
      "Estate planning services",
      "Tax optimization advice",
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

              <p className="text-lg md:text-xl text-gray-700 mb-8">
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
      </main>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-[#F49D3F] w-6 h-6 md:w-8 md:h-8" />
        </div>
      )}

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
