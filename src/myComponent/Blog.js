import React, { useEffect, useState } from "react";
import { AiFillChrome } from "react-icons/ai";

import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Blog() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const location = useLocation();
  const [url, setUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (location.state) {
      setTitle(location.state.title);
      setData(location.state.content);
      setDesc(location.state.desc);

      const currentURL = window.location.href;
      setUrl(currentURL);
    }
  }, [location.state]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={desc} />
      </Helmet>
      <Header />
     
      <div className=" p-4 lg:p-8 mt-10 mb-10">
        <div className="flex flex-col gap-8 items-center">
          <h2 className="text-[#8089E1] text-center text-4xl font-bold">
            {title}
          </h2>
          <img
            src="/blog-main.png"
            alt="blog main"
            className=" w-9/12 object-cover"
          />

          <div className=" flex flex-col gap-5">
            {data.map((article) => (
              <div className=" flex flex-col gap-2" key={article.id}>
                {article.heading.length > 0 && (
                  <h4 className=" text-xl font-bold">{article.heading}</h4>
                )}
                <p
                  dangerouslySetInnerHTML={{ __html: article.desc }}
                  className="article-desc text-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
