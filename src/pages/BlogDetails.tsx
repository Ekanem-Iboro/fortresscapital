"use client";

import {
  ChevronLeft,
  Facebook,
  Instagram,
  Linkedin,
  Share,
  Twitter,
  User2Icon,
} from "lucide-react";
import Footer from "../components/Footer";
// import { blogData } from "../page";
import { useEducationStore } from "../store/userStore";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const navigate = useNavigate();

  const { education } = useEducationStore();

  return (
    <div className="w-full">
      <header className="md:h-[500px] h-[350px] w-full  flex items-center justify-center">
        {education?.image ? (
          <img
            src={education?.image || ""}
            alt=""
            className="md:h-[500px] h-full w-full object-cover"
          />
        ) : (
          <Skeleton width={100} height={500} />
        )}
      </header>
      <ChevronLeft
        size={25}
        width={50}
        height={35}
        className="border border-slate-300 rounded-lg cursor-pointer mt-10 text-slate-300"
        onClick={() => navigate("/blog")}
      />
      <div className="m-auto  mt-[4%] mb-7  gap-8 lg:w-[70%] md:w-[90%] w-full rounded-2xl overflow-hidden bg-slate-50 p-7 flex flex-col justify-center items-center">
        <h1 className="text-slate-600 md:text-[40px] text-[22px] font-semibold md:px-[10%] px-[2%] md:leading-[45px] leading-[22px] text-center">
          {education?.title}
        </h1>
        <p className="text-slate-400 text-[15px] italic">
          Posted by Admin on {education?.date}
        </p>
        <p className="text-slate-400 text-[18px] leading-[30px] my-[3%] lg:px-[10%] md:px-[4%] px-0">
          {education?.description}
        </p>

        <div className=" mr-[10px]">
          {education?.image ? (
            <img
              src={education?.image || ""}
              alt=""
              className="md:w-[620px] w-full md:h-[500px]  h-full"
            />
          ) : (
            <Skeleton width={100} height={500} />
          )}
        </div>
        <p className="text-slate-400 text-[18px] leading-[30px] my-[5%] lg:px-[10%] md:px-[4%] px-0">
          {education?.description}
        </p>
        <hr className="w-full border border-slate-200" />
        <div className="md:flex  items-center justify-between w-full block md:ml-0 ml-[70%] ">
          <div className="flex items-center gap-6 transition-all duration-500 delay-500 ease-in md:mb-0 mb-6">
            <a href="">
              <Instagram
                className="text-slate-500 hover:text-[#f49d3f]"
                size={30}
              />
            </a>
            <a href="">
              <Twitter
                className="text-slate-500   hover:text-[#f49d3f]"
                size={30}
              />
            </a>
            <a href="">
              <Linkedin
                className="text-slate-500 hover:text-[#f49d3f]"
                size={30}
              />
            </a>
            <a href="">
              <Facebook
                className="text-slate-500 hover:text-[#f49d3f]"
                size={30}
              />
            </a>
          </div>
          <button className="px-4 py-2 text-slate-700 border-b-2 border-[#f49d3f] ml-5 flex items-center gap-4">
            <Share size={30} className="text-slate-500" />
            Share
          </button>
        </div>
        <hr className="mb-[2%]  border border-slate-200 w-full" />
        <div className="flex flex-col justify-center items-center">
          <div className="border border-slate-300 rounded-full p-4 overflow-hidden shadow-xl">
            <User2Icon size={100} className="object-cover" />
          </div>
          <p className="mt-1 text-slate-500 text-[18px]">Admin</p>
          <p className="mt-3  text-slate-500 text-[18px]">
            {education?.author}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
