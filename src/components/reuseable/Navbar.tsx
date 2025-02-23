"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

import logo from "../../assets/images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const navItems = [
  {
    title: "Home",
    href: "/",
    subItems: [],
  },
  {
    title: "About Us",
    href: "/about",
    subItems: [
      { title: "Who we are", href: "/about#whoweare" },
      { title: "Meet the team", href: "/about#meettheteam" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    subItems: [
      { title: "Advisory", href: "/services?page=Advisory Services" },
      {
        title: "Securities Trading",
        href: "/services?page=Securities Trading",
      },
      { title: "Asset Management", href: "/services?page=Asset Management" },
    ],
  },
  {
    title: "Blogs",
    href: "/blog",
    subItems: [
      { title: "Articles", href: "/blog" },
      { title: "Research", href: "/research" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
    subItems: [],
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // const handleNavItemClick = () => {
  //   // navigate(href);
  //   setMobileMenuOpen(false);
  //   setActiveDropdown(null);
  // };

  const NavDesktop = () => (
    <nav className="hidden lg:flex items-center justify-between w-full px-[5%] py-4 bg-white md:fixed z-50 top-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]">
      <Link to="/" className="w-[150px]">
        <img src={logo} alt="Logo" className="w-full" />
      </Link>

      <div className="flex items-center space-x-6">
        {navItems.map((item) => (
          <div key={item.title} className="relative group">
            <div className="flex items-center">
              <Link
                to={item.href}
                className={`
                  text-[15px] font-medium transition-colors 
                  ${
                    location.pathname === item.href
                      ? "text-[#F49D3F]"
                      : "hover:text-[#F49D3F]"
                  }
                `}
              >
                {item.title}
              </Link>
              {item.subItems.length > 0 && (
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === item.title ? null : item.title
                    )
                  }
                  className="ml-1"
                >
                  <ChevronDown
                    className={`
                      transition-transform 
                      ${activeDropdown === item.title ? "rotate-180" : ""}
                    `}
                    size={16}
                  />
                  {""}
                </button>
              )}
            </div>

            {item.subItems.length > 0 && activeDropdown === item.title && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 py-2 w-48 z-20"
              >
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.title}
                    to={subItem.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#F49D3F]"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() =>
            (window.location.href = "https://185.80.93.181/customers/")
          }
          className="px-4 py-2 text-[#F49D3F] border border-[#F49D3F] rounded-xl hover:bg-[#F49D3F] hover:text-white transition-colors"
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/createaccount")}
          className="px-4 py-2 bg-[#F49D3F] text-white rounded-xl hover:bg-opacity-90 transition-colors"
        >
          Open An Account
        </button>
      </div>
    </nav>
  );
  const NavMobile = () => (
    <div className="lg:hidden fixed top-0 w-full bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] z-50">
      <div className="flex justify-between items-center p-4">
        <Link to="/home" className="w-[120px]" onClick={toggleMobileMenu}>
          <img src={logo} alt="Logo" className="w-full" />
        </Link>

        <button onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">
              {navItems.map((item) => (
                <div key={item.title} className="mb-2">
                  <div className="flex justify-between items-center py-2 border-b">
                    <Link
                      to={item.href}
                      className={`text-[16px] font-medium ${
                        location.pathname === item.href ? "text-[#F49D3F]" : ""
                      }`}
                      onClick={toggleMobileMenu} // Close mobile menu on link click
                    >
                      {item.title}
                    </Link>
                    {item.subItems.length > 0 && (
                      <button
                        title={`Toggle ${item.title} submenu`}
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.title ? null : item.title
                          )
                        }
                      >
                        <ChevronDown
                          className={`transition-transform ${
                            activeDropdown === item.title ? "rotate-180" : ""
                          }`}
                          size={20}
                        />
                      </button>
                    )}
                  </div>

                  {item.subItems.length > 0 &&
                    activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 mt-2 space-y-2"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className="block text-[15px] py-1 hover:text-[#F49D3F]"
                            onClick={toggleMobileMenu} // Close mobile menu on sub-link click
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                </div>
              ))}

              <div className="mt-4 space-y-2">
                <button
                  onClick={() => {
                    navigate("https://185.80.93.181/customers/");
                    toggleMobileMenu(); // Close mobile menu on button click
                  }}
                  className="w-full py-3 border border-[#F49D3F] text-[#F49D3F] rounded-xl"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    navigate("/createaccount");
                    toggleMobileMenu(); // Close mobile menu on button click
                  }}
                  className="w-full py-3 bg-[#F49D3F] text-white rounded-xl"
                >
                  Open An Account
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <>
      <NavDesktop />
      <NavMobile />
    </>
  );
};

export default Navbar;
