"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import { PaginationBlog } from "../components/paginationBlog";
import { blogPosts } from "../components/reuseable/blogData";
import { useEducationStore } from "../store/userStore";
import abouthero from "../assets/images/whoweare.jpg";

const Blog = () => {
  const [limit] = useState<number>(4);
  const [limitDesc] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(5);

  // Calculate the indices for pagination
  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const currentPosts = blogPosts?.slice(firstItemIndex, lastItemIndex);

  const { addEducation } = useEducationStore();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleblog = (value: any) => {
    addEducation(value);
  };

  // Function to truncate the title to a specified word limit
  const truncateTitle = (title: string, wordLimit: number) => {
    const words = title.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : title;
  };

  // Function to truncate the description to a specified word limit
  const truncateDesc = (desc: string, wordLimit: number) => {
    const words = desc.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : desc;
  };

  return (
    <div className="w-full">
      <header className=" w-full ">
        <div>
          <img
            src={abouthero}
            alt=""
            className="md:h-[600px] w-full h-full object-cover "
          />
        </div>
      </header>
      <p className="w-full flex items-center justify-center mt-7 text-[#f49d3f] font-[600] md:text-[55px] text-[32px] capitalize">
        blogs
      </p>
      <div className=" lg:block block md:grid md:grid-cols-2">
        {currentPosts?.map((item) => (
          <div
            className="m-auto shadow-xl mt-[4%] mb-7 lg:flex md:block gap-8  w-full rounded-2xl overflow-hidden bg-slate-50 adjustWidth_media"
            key={item.id}
          >
            <img
              src={item.image}
              alt=""
              className="md:w-[420px] w-full h-full md:h-[250px] object-cover"
            />
            <div className="p-6">
              <h1 className="lg:text-[24px] md:text-[18px] font-bold mb-4 text-slate-500">
                {truncateTitle(item.title, limit)}
              </h1>
              <p className="lg:text-md md:text-sm">
                {truncateDesc(item.description, limitDesc)}
              </p>
              <div className="flex mt-[10%] items-center justify-between border-t-2 border-slate-300 pt-4">
                <div>
                  <p className="text-[#692371] font-bold text-[14px]">
                    Author:{" "}
                    <span className="text-slate-700 font-medium text-[12px]">
                      {item.author}
                    </span>
                  </p>
                  <p className="text-[14px] text-[#f49d3f] font-semibold">
                    {item.date}
                  </p>
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-end">
                  <button
                    className="slideinP px-4 py-2 text-white bg-[#692371] rounded-md"
                    onClick={() => handleblog(item)}
                  >
                    <a href={`blog/${item.id}&${item.title.slice(0, 30)}`}>
                      <p className="text">Read More</p>
                      <p id="cover-slide"></p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-11">
        <PaginationBlog
          totalItems={blogPosts.length}
          itemPerPage={itemPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
