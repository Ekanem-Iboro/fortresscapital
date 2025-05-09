import Newsletter from "./Newsletter";
import { LocateFixedIcon, Mail, Phone } from "lucide-react";
import logo from "../assets/images/logo.png";
import instagram from "../assets/images/instagram.png";
import X from "../assets/images/x.png";
import linkedin from "../assets/images/linkedin.png";
import facebook from "../assets/images/facebook.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div>
      <div className="border-t border-t-slate-200 mt-[5%] py-[3rem] sm:px-4 flex md:flex-row flex-col justify-between w-full h-auto font-medium">
        <div className="md:mb-0 mb-[5%]  max-w-sm ">
          <h1 className="mb-3 font-bold text-[23px]">Contact us</h1>
          <img src={logo} alt="logo" className="w-[150px] mt-5" />
          <p className=" font-medium mb-5 mt-3 leading-relaxed">
            <strong>Fortress Capital Limited</strong> is one of Nigeria's
            leading investment banking firms committed to providing top-tier
            financial services tailored to clients' unique needs.
          </p>
          <div className="flex gap-3 ">
            <LocateFixedIcon color="#692371" size={25} />
            <p className=" font-medium mb-5 ">
              4th Floor ED Building, 47, Marina, Lagos.
            </p>
          </div>
          <div className="flex gap-3">
            <Phone color="#692371" size={20} />
            <p className=" font-medium mb-5 ">+234 8099981121</p>
          </div>
          <div className="flex gap-3">
            <Mail color="#692371" size={20} className="mr-1" />
            <p className=" font-medium mb-5 ">info@fortresscapitalng.com</p>
          </div>
          <div className="flex gap-7 mt-4">
            <motion.a
              href="https://www.instagram.com/fortresscapitalltd/?igsh=d2dvdzN0cGNkZmJo"
              whileHover={{ scale: 1.2, rotateY: 15, z: 20 }}
              whileTap={{ scale: 0.9 }}
              initial={{ rotateY: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <motion.img
                src={instagram}
                alt="Instagram"
                className="w-[40px] drop-shadow-lg"
                style={{
                  filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.3))",
                }}
              />
            </motion.a>
            <motion.a
              href="https://x.com/fortresscapltd?s=21"
              whileHover={{ scale: 1.2, rotateY: 15, z: 20 }}
              whileTap={{ scale: 0.9 }}
              initial={{ rotateY: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <motion.img
                src={X}
                alt="X"
                className="w-[40px] drop-shadow-lg"
                style={{
                  filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.3))",
                }}
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/fortress-capital-limited"
              whileHover={{ scale: 1.2, rotateY: 15, z: 20 }}
              whileTap={{ scale: 0.9 }}
              initial={{ rotateY: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <motion.img
                src={linkedin}
                alt="LinkedIn"
                className="w-[40px] drop-shadow-lg"
                style={{
                  filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.3))",
                }}
              />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/FortressCapital"
              whileHover={{ scale: 1.2, rotateY: 15, z: 20 }}
              whileTap={{ scale: 0.9 }}
              initial={{ rotateY: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            >
              <motion.img
                src={facebook}
                alt="facebook"
                className="w-[40px] drop-shadow-lg"
                style={{
                  filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.3))",
                }}
              />
            </motion.a>
          </div>
        </div>
        <div className="md:mb-0 mb-[5%] max-w-sm ">
          <h1 className="mb-3 font-bold text-[23px]">Links</h1>
          <ul>
            {footerData.links.map((link, index) => (
              <li key={index} className="mb-4 underline font-medium">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:mb-0 mb-[5%] max-w-sm ">
          <h1 className="mb-3 font-bold text-[23px]">Our services</h1>
          <ul>
            {footerData.services.map((service, index) => (
              <li key={index} className="mb-4 underline  font-medium">
                <a href={service.href}>{service.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:mb-0 mb-[5%] max-w-sm ">
          <h1 className="mb-3 font-bold text-[23px]">Newsletter</h1>
          <p className=" font-medium mb-5 ">
            Stay in the know, our newsletters give you insights to market
            reports and investment opportunities.
          </p>
          <Newsletter />
        </div>
      </div>
      <div className="flex items-center justify-center py-6 bg-footer border-t border-t-slate-200 mt-[2%] font-medium">
        <span>&copy; 2024 Fortress. All rights reserved.</span>
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
