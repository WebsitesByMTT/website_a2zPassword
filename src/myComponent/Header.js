import React, { useState } from 'react'
import { AiFillChrome } from "react-icons/ai";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center  justify-between flex-wrap text-black lg:p-6 pt-[2%] ">
        <div className="flex items-center flex-shrink-0 text-black mr-0 pl-[10%]  lg:mr-[10%]">
          <a href='/'><img src="/A2zpassword128x128.png" className="w-100 h-16 mr-2" alt="Logo" /></a>
        </div>
        <div className="block pr-[10%] lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-[#60B85E]  hover:text-black-400"
          >
            <svg
              className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block bg-[#8089E1] shadow-inner-2xl shadow-[#8089E1]  lg:bg-inherit mt-2 rounded-lg  pb-5 pl-8 z-10 flex-grow lg:flex lg:items-center lg:justify-start lg:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <div className="text-sm lg:flex-grow font-semibold">
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0  mr-14 text-lg lg:hover:text-[#60B85E]">
              Home
            </a>
            <a href="/blogs" className="block mt-4 lg:inline-block lg:mt-0  mr-14 text-lg hover:text-[#60B85E]">
              Blogs
            </a>
            <a href="/Contact_us" className="block mt-4 lg:inline-block lg:mt-0  mr-14 text-lg hover:text-[#60B85E]">
              Contact Us
            </a>
            <a href="/About_us" className="block mt-4 lg:inline-block lg:mt-0  mr-14 text-lg hover:text-[#60B85E]">
              About Us
            </a>
          </div>
          <div className='lg:mr-[10%]'>
            <button className="text-white lg:text-xl text-sm p-3 mt-4  font-semibold bg-[#8089E1] lg:px-10 lg:py-2  rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#8089E1] duration-300 ">
              <a href='https://chrome.google.com/webstore/detail/a2zpassword/baeamphhbeaipilnbjapmmonffigdmlj/related' target="_blank">
                <div className='flex items-center gap-2 '>
                  <div>
                    <AiFillChrome />
                  </div>{" "}
                  Add To Chorme
                </div>
              </a>
            </button>
          </div>
        </div>
      </nav>

      <div className='lg:mb-[4%] text-white lg:mt-[0%] mb:[13%] mt-[5%]'>
        <div className='flex items-center flex-col lg:gap-7 gap-8 text-center  bg-[#60B85E] lg:px-[20%] px-[3%] py-[5%]'>
          <div className='lg:text-[3rem] text-4xl leading-[1]  font-bold'>
            <h1>  Security starts with a2z google offline password manager
            </h1>
          </div>
          <div className='lg:text-[1rem] text-xl  font-normal'>
            <p>This tool cannot be hacked under any circumstances. In addition, we do not possess the ability to access your password due to our exclusive zero-knowledge encryption system. Thus, this is also an offline password manager so that you can use this extension without an internet connection</p>
          </div>
          <div className=''>

            <button className="text-white lg:text-xl text-sm p-3 font-semibold bg-[#8089E1] lg:px-14 lg:py-2  rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-70 hover:bg-[#8089E1] duration-300 ">
              <a href='https://chrome.google.com/webstore/detail/a2zpassword/baeamphhbeaipilnbjapmmonffigdmlj/related' target="_blank">
                Add To Chrome
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
