import Newsletter from "./Newsletter";
import { LocateFixedIcon, Mail, Phone } from "lucide-react";
import logo from "../assets/images/logo.png";
import instagram from "../assets/images/instagram.png";
import xlink from "../assets/images/xlink.png";
import linkedin from "../assets/images/linkedin.png";
import facebook from "../assets/images/facebook.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="border-t border-t-slate-200 mt-[5%] py-8 px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {/* Contact Section */}
        <div className="space-y-4 max-w-full lg:max-w-sm">
          <h1 className="text-xl md:text-2xl font-bold">Contact us</h1>
          <img src={logo} alt="logo" className="w-32 md:w-[150px]" />
          <p className="text-sm md:text-base font-medium leading-relaxed">
            <strong>Fortress Capital Limited</strong> is one of Nigeria's
            leading investment banking firms committed to providing top-tier
            financial services tailored to clients' unique needs.
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <LocateFixedIcon
                color="#692371"
                className="w-5 h-5 md:w-6 md:h-6 mt-1"
              />
              <p className="text-sm md:text-base font-medium">
                4th Floor ED Building, 47, Marina, Lagos.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone color="#692371" className="w-5 h-5" />
              <Link
                to="tel:+2348099981121"
                className="text-sm md:text-base font-medium hover:text-purple-700"
              >
                +234-8099981121
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Mail color="#692371" className="w-5 h-5" />
              <p className="text-sm md:text-base font-medium">
                info@fortresscapitalng.com
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-4 md:gap-7 mt-6">
            <motion.div
              whileHover={{ scale: 1.2, rotateY: 15, z: 20 }}
              whileTap={{ scale: 0.9 }}
              initial={{ rotateY: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <Link
                to="https://www.instagram.com/fortresscapitalltd/?igsh=d2dvdzN0cGNkZmJo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={instagram}
                  alt="Instagram"
                  className="w-[40px] drop-shadow-lg"
                  style={{
                    filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.3))",
                  }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotateY: 15, z: 20 }}
              whileTap={{ scale: 0.9 }}
              initial={{ rotateY: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <Link
                to="https://x.com/fortresscapltd?s=21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={xlink}
                  alt="X"
                  className="w-[40px] drop-shadow-lg"
                  style={{
                    filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.3))",
                  }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotateY: 15, z: 20 }}
              whileTap={{ scale: 0.9 }}
              initial={{ rotateY: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <Link
                to="https://www.linkedin.com/company/fortress-capital-limited"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-[40px] drop-shadow-lg"
                  style={{
                    filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.3))",
                  }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotateY: 15, z: 20 }}
              whileTap={{ scale: 0.9 }}
              initial={{ rotateY: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <Link
                to="https://www.facebook.com/FortressCapital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={facebook}
                  alt="facebook"
                  className="w-[40px] drop-shadow-lg"
                  style={{
                    filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.3))",
                  }}
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4 md:ml-14">
          <h1 className="text-xl md:text-2xl font-bold">Links</h1>
          <ul className="space-y-3">
            {footerData.links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className="text-sm md:text-base font-medium hover:text-purple-700 underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div className="space-y-4">
          <h1 className="text-xl md:text-2xl font-bold">Our services</h1>
          <ul className="space-y-3">
            {footerData.services.map((service, index) => (
              <li key={index}>
                <Link
                  to={service.href}
                  className="text-sm md:text-base font-medium hover:text-purple-700 underline"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4">
          <h1 className="text-xl md:text-2xl font-bold">Newsletter</h1>
          <p className="text-sm md:text-base font-medium">
            Stay in the know, our newsletters give you insights to market
            reports and investment opportunities.
          </p>
          <Newsletter />
        </div>
      </div>

      {/* Copyright */}
      <div className="flex items-center justify-center py-4 md:py-6 bg-footer border-t border-t-slate-200 mt-8">
        <span className="text-sm md:text-base font-medium">
          &copy; 2024 Fortress. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
const footerData = {
  links: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Research", href: "/research" },
    { name: " Our Services", href: "/services" },
  ],
  services: [
    { name: "Securities Trading", href: "/services#trading" },
    { name: "Asset Management", href: "/services#management" },
    { name: "Advisory Services", href: "/services#advisory" },
  ],
};
