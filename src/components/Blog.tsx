/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useEducationStore } from "../store/userStore";
import { Link } from "react-router-dom";
import { useGetArticles } from "../api/get/getData";
import blogimg from "../assets/images/img3.jpg";
import LoadingOverlay from "./OverlayLoader";

const Blog = () => {
  const [limit] = useState<number>(4);

  const { addEducation } = useEducationStore();

  const handleblog = (value: any) => {
    addEducation(value);
  };
  const { data: blogPosts, isFetching } = useGetArticles("articles.php");

  const truncateTitle = (title: string, wordLimit: number) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };

  return (
    <section className="md:my-[6rem] my-[1rem] w-full gap-8">
      {isFetching && <LoadingOverlay />}

      <div className=" parentline md:pl-[1%] shadow-sm">
        <h1 className=" text-[#692371] md:text-[35px] text-[18px] font-semibold lg:leading-[70px] md:leading-[60px]">
          Blogs
        </h1>
      </div>
      <div className="w-full mt-[4%]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          {blogPosts?.data?.map((post: any, idx: number) => (
            <div
              key={post.news_id}
              className={`lg:w-[40%] md:-w[300%] min-h-[250px] m-auto w-full border border-neutral-200 rounded-md ${
                idx > 3 ? "hidden" : "block"
              }`}
            >
              <Link
                to={`blog/${post.news_id}&${post.news_title}`}
                onClick={() => handleblog(post)}
              >
                <div className="">
                  {post?.photo !== "" ? (
                    <img
                      src={post?.photo}
                      alt={post?.name}
                      className="object-cover  w-full h-full "
                    />
                  ) : (
                    <img
                      src={blogimg}
                      alt="img"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="mt-[4%] p-3">
                  <h2 className="text-[#692371] md:text-[24px] text-[16px] font-semibold leading-10 min-h-[75px]">
                    {truncateTitle(post.news_title, limit)}
                  </h2>
                  <p className="text-[18px] text-[#692371] mt-2">
                    {post.publisher}
                  </p>
                  <div className="flex items-center justify-between gap-2 mt-[2%]">
                    <p className="text-[14px] text-[#692371]">
                      {post.news_date}
                    </p>
                    <ChevronRight
                      size={30}
                      color="#692371"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="w full my-[3rem] md:flex items-center justify-center">
          <Link
            to={"/blog"}
            className="md:w-[30%] w-full text-white bg-[#692371] rounded-lg p-2 text-center"
          >
            <button className="w-full ">See more</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;

// const blogPosts = [
//   {
//     id: "8e1950be-f797-4033-8180-39a91ba1f023",
//     title: "Strategies for Wealth Growth ",
//     author: "Emma Thompson",
//     date: "March 15, 2023",
//     image: blogimg1,
//   },
//   {
//     id: "8e1950be-f797-4033-8180-3b991ba1f054",
//     title: "Essentials of Wealth Management ",
//     author: "Emma Thompson",
//     date: "March 15, 2023",
//     image: blogimg1,
//   },
//   {
//     id: "8e1950be-e297-4033-8180-39a91ba1f054",
//     title: " Maximum Returns ",
//     author: "Emma Thompson",
//     date: "March 15, 2023",
//     image: blogimg1,
//   },
//   {
//     id: "we1950be-f797-4033-8180-39a91ba1f054",
//     title: "Diversify for Maximum Returns",
//     author: "Emma Thompson",
//     date: "March 15, 2023",
//     image: blogimg1,
//   },
// ];
