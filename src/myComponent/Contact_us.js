import React from "react";
import Header from "./Header";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

export default function contact_us() {
    const sendEmail = (e) => {
        e.preventDefault();
     
        emailjs
          .sendForm(
            "service_je4cpqa",
            "template_ie50gdm",
            e.target,
            "e6VEQ3Kk59d-W-GoJ"
          )
          .then(
            (result) => {
              console.log(result.text);
             
            },
            (error) => {
              console.log(error.text);
            }
          );
          e.target.reset();
      };
  return (
    <>
      <Header />
      <div class="max-w-screen-lg mx-auto my-10 p-5">
        <div className="lg:mb-[5%] mb-[10%]">
        <h1 className="lg:text-5xl text-2xl  text-center font-bold my-[2%]">
             Contact Us
            </h1>
            <div class="colored-line1"></div>
        </div>
        <div class=" border border-[#60B85E] rounded-xl">
          <form class="md:col-span-8 p-10" onSubmit={sendEmail}>
            <div class=" -mx-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Name
              </label>
              <input
                class="appearance-none bg-transparent border-b border-[#60B85E] w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                type="text"
                placeholder="Enter Your  Name"
                aria-label="Full name"
                name="name"
                required
              />
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email Address
                </label>
                <input
                  class="appearance-none bg-transparent border-b border-[#60B85E] w-full text-gray-700 mr-3 p-4 leading-tight focus:outline-none focus:bg-gray-200"
                  type="email"
                  placeholder="Enter Your E-mail"
                  aria-label="Full name"
                  name="email"
                  required
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  class="appearance-none bg-transparent border-b border-[#60B85E] w-full text-gray-700 mr-3 p-4 focus:bg-gray-200 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Enter Your Message"
                  aria-label="Full name"
                  name="message"
                  required
                ></textarea>
              </div>
              <div class=" w-full px-3 pt-5 text-center lg:text-left">
                <button
                  class="shadow bg-[#8089E1] hover:bg-[#8089E1] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
