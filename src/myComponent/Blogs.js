import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { blogs } from "../utils/blogs";

// const blogsData = [
//   {
//     id: "1",
//     title: "Bitwarden Chrome Extension Vs A2Z password manager",
//     desc: "In this world of digitalization, where everything is connected online, it is not possible to remember all those passwords. But there are some helpful tools that will help you generate and keep your password safe. It will also protect all your information.",
//     date: "Sep 09, 2023",
//     slug: "bitwarden-chrome-extension-vs-A2Z-password-manager",
//   },
// ];
export default function Blogs() {
  const [blogsData, setBlogsData] = useState(blogs);
  console.log(blogsData);
  const navigate = useNavigate();

  const getBlogSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .trim();
  };

  const onClickHandler = (blog) => {
    const slug = getBlogSlug(blog.title);
    navigate(`/blogs/${slug}`, { state: blog });
  };
  return (
    <>
      <Header />
      
      <div className=" p-4 lg:p-8 mt-10 mb-10">
        <div className="flex flex-col gap-8 items-center">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            {blogsData.map((blog) => (
              <div
                className=" flex-col gap-1 cursor-pointer shadow p-5"
                onClick={() => onClickHandler(blog)}
              >
                <div className="card-title">
                  <h3 className=" text-xl font-bold"> {blog.title}</h3>
                  <p className=" text-lg">{blog.desc}</p>
                </div>

                <div className="card-desc">
                  <span className=" text-sm">{blog.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
