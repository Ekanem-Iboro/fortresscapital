import Newsletter from "./Newsletter";
import { LocateFixedIcon, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="border-t border-t-slate-200 mt-[5%] py-[4%] lg:px-[10%] md:px-[3%] px-5 md:grid grid-cols-4 gap-7 justify-between items-start block w-full h-auto ">
        <div className="md:mb-0 mb-[10%]  ">
          <h1 className="mb-3 font-semibold text-[23px]">Contact us</h1>
          <div className="flex gap-3">
            <LocateFixedIcon color="#692371" size={25} />
            <p className=" font-light mb-5 ">
              4th Floor ED Building, 47, Marina, Lagos.
            </p>
          </div>
          <div className="flex gap-3">
            <Phone color="#692371" size={20} />
            <p className=" font-light mb-5 ">+234 8099981121</p>
          </div>
          <div className="flex gap-3">
            <Mail color="#692371" size={20} className="mr-1" />
            <p className=" font-light mb-5 ">info@fortresscapitalng.com</p>
          </div>
        </div>
        <div className="md:mb-0 mb-[10%] md:text-center  ">
          <h1 className="mb-3 font-semibold text-[23px]">Links</h1>
          <ul>
            {footerData.links.map((link, index) => (
              <li key={index} className="mb-4 underline text-[14px]">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:mb-0 mb-[10%]  ">
          <h1 className="mb-3 font-semibold text-[23px]">Our services</h1>
          <ul>
            {footerData.services.map((service, index) => (
              <li key={index} className="mb-4 underline text-[14px]">
                <a href={service.href}>{service.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:mb-0 mb-[10%]  ">
          <h1 className="mb-3 font-semibold text-[23px]">Newsletter</h1>
          <p className=" font-light mb-5 ">
            Stay in the know, our newsletters give you insights to market
            reports and investment opportunities.
          </p>
          <Newsletter />
        </div>
      </div>
      <div className="flex items-center justify-center py-6 bg-footer border-t border-t-slate-200 mt-[2%]">
        <span>&copy; 2024 Fortress. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
const footerData = {
  links: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Securities Trading", href: "/services?page=Securities Trading" },
    { name: "Asset Management", href: "/services?page=Asset Management" },
    { name: "Advisory Services", href: "/services?page=Advisory Services" },
  ],
};
