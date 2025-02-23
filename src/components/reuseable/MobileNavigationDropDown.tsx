"use client";

import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

interface DropdownProps {
  title: string;
  description: string[] | string;
  deshref: string[] | string;
}
export default function NavigationMenuCompM({
  title,
  description,
  deshref,
  isOpen,
  onToggle,
}: DropdownProps & { isOpen: boolean; onToggle: () => void }) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <div
        className="flex items-center gap-1 ml-4 cursor-pointer"
        onClick={onToggle}
      >
        <p
          className={`${
            pathname.includes(title.toLowerCase())
              ? "text-[#F49D3F] font-bold"
              : "hover:text-[#F49D3F]"
          } py-2 rounded-md text-[16px] font-[500]`}
        >
          {title}
        </p>
        <ChevronDown size={15} />
      </div>

      {/* Dropdown Content with Animation */}
      <ul
        className={`ml-2 mt-2 w-[200px] text-sm border border-gray-300 bg-[#ffffff] rounded-md shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {Array.isArray(description) &&
          Array.isArray(deshref) &&
          description.map((desc, index) => (
            <li key={index}>
              <a
                href={deshref[index] || "#"}
                className="block px-4 py-2 hover:bg-white hover:text-[#F49D3F] text-[16px] font-[400]"
              >
                {desc}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
