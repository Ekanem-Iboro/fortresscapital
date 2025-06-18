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
    <section className="py-8 sm:py-12 lg:py-16 w-full px-4 sm:px-6 lg:px-8">
      {isFetching && <LoadingOverlay />}

      <div className="mt-9">
        <h1 className="text-[#692371] text-2xl sm:text-3xl lg:text-4xl font-semibold border-b-2 border-[#f49d3f] w-fit">
          Blogs
        </h1>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {blogPosts?.data?.map((post: any, idx: number) => (
            <div
              key={post.news_id}
              className={`${
                idx > 3 ? "hidden" : "block"
              } bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-neutral-200`}
            >
              <Link
                to={`blog/${post.news_id}&${post.news_title}`}
                onClick={() => handleblog(post)}
                className="block h-full"
              >
                <div className="aspect-video overflow-hidden">
                  {post?.photo !== "" ? (
                    <img
                      src={post?.photo}
                      alt={post?.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <img
                      src={blogimg}
                      alt="img"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                <div className="p-4 sm:p-5">
                  <h2 className="text-[#692371] text-lg sm:text-xl font-semibold line-clamp-2 mb-2 min-h-[3.5rem]">
                    {truncateTitle(post.news_title, limit)}
                  </h2>
                  <p className="text-[#692371] text-sm sm:text-base font-medium">
                    {post.publisher}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-[#692371]">{post.news_date}</p>
                    <ChevronRight
                      size={24}
                      color="#692371"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/blog"
            className="inline-block w-full sm:w-auto px-8 py-3 bg-[#692371] text-white rounded-lg hover:bg-[#4e1854] transition-colors duration-300 text-center"
          >
            See more
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
