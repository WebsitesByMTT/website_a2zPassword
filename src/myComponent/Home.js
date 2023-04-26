import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BsShieldShaded } from "react-icons/bs";
import { MdOutlineDesktopMac } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { HiOutlineCursorClick } from "react-icons/hi";
import { TbCircleKey } from "react-icons/tb";
import { FaTabletAlt } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import { MdOutlineWifiPassword } from "react-icons/md";
import { AiFillFolderOpen } from "react-icons/ai";
import { FiTrendingUp } from "react-icons/fi";
export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-[10%] mb-[10%]">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <img alt="..." src="./using_tablet.jpeg" />
          </div>
          <div className="flex-1  items-center">
            <div className="mx-[8%] my-[10%] ">
              <h1 className="text-5xl font-bold">
                Benefits of <span className="text-[#60B85E]">a2zpassword</span>
              </h1>
              <div className="flex pt-[20px] items-center gap-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#60B85E"
                    class="bi bi-check-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                </div>
                <div>
                  <p className=" font-medium">
                    Secure storage: Ensure all your sensitive information is
                    stored safely.
                  </p>
                </div>
              </div>
              <div className="flex pt-[20px] items-center gap-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#60B85E"
                    class="bi bi-check-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                </div>
                <div>
                  <p className=" font-medium">
                    Strong passwords: Make your passwords unique and strong
                    without having to remember them.
                  </p>
                </div>
              </div>
              <div className="flex pt-[20px] items-center gap-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#60B85E"
                    class="bi bi-check-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                </div>
                <div>
                  <p className=" font-medium">
                    Time savings: Cut down on the time it takes to log in to
                    your online accounts.
                  </p>
                </div>
              </div>
              <div className="flex pt-[20px] items-center gap-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#60B85E"
                    class="bi bi-check-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                </div>
                <div>
                  <p className=" font-medium">
                    Sharing: Share passwords and other information with
                    teammates or family members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#60B85E] text-white mt-[7%] ">
          <div className="py-[5%] ">
            <div className="mb-3">
              <h1 className="text-3xl text-white text-center font-semibold">
                How It Works
              </h1>
            </div>
            <div class="colored-line"></div>
            <div className="flex items-center flex-col lg:flex-row justify-center lg:px-[15%] px-[3%] py-[3%] gap-5">
              <div className="flex items-center flex-col gap-5">
                <div className="bg-[#37d834]   relative h-[60px] w-[60px] rounded-full">
                  <h1 className="absolute right-[42%]  top-[23%] text-2xl font-semibold">
                    1
                  </h1>
                </div>
                <div className="pt-3">
                  <BsShieldShaded size={"6rem"} style={{ color: "white" }} />
                </div>
                <div>
                  <h1 className="text-lg font-bold ">Create your account</h1>
                </div>
                <div>
                  <p className="text-center">
                    Create your RoboForm account by entering your email address
                    and setting a Master Password. The Master Password secures
                    your data. It is the one password you'll need to remember.
                  </p>
                </div>
              </div>
              <div className="flex items-center flex-col gap-5">
                <div className="bg-[#37d834]  relative h-[60px] w-[60px] rounded-full">
                  <h1 className="absolute right-[42%]  top-[23%] text-2xl font-semibold line-number">
                    2
                  </h1>
                </div>
                <div className="pt-3">
                  <MdOutlineDesktopMac
                    size={"6rem"}
                    style={{ color: "white" }}
                  />
                </div>
                <div>
                  <h1 className="text-lg font-bold ">Add your passwords</h1>
                </div>
                <div>
                  <p className="text-center">
                    Add your passwords manually or import from your browser, a
                    CSV, or even another password management product. RoboForm
                    saves new passwords automatically as you log in to your
                    online accounts.
                  </p>
                </div>
              </div>
              <div className="flex items-center flex-col gap-5">
                <div className="bg-[#37d834]  relative h-[60px] w-[60px] rounded-full">
                  <h1 className="absolute right-[42%]  top-[23%] text-2xl font-semibold">
                    3
                  </h1>
                </div>
                <div className="pt-3">
                  <TbWorldWww size={"6rem"} style={{ color: "white" }} />
                </div>
                <div>
                  <h1 className="text-lg font-bold ">
                    Log in fast on every device
                  </h1>
                </div>
                <div>
                  <p className="text-center">
                    Save time by logging into your accounts with a single click
                    or tap. RoboForm is available on every OS. Web access and
                    extensions for all major browsers mean you'll never lose
                    another password!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#8089E1] text-white   p-[3%]">
          <div className=" lg:mb-[0%] mb-[10%]">
            <h1 className="lg:text-5xl text-2xl text-center font-bold my-[2%]">
              Features of a2zpassword
            </h1>
            <div className="colored-line2"></div>
          </div>
          <div className=" grid lg:grid-cols-3 grid-cols-1 text-white py-[3%] px-[5%] gap-7 ">
            <div className="flex flex-col gap-4 bg-[#60B85E] border rounded-xl p-8 ">
              <div className="pt-2">
                <HiOutlineCursorClick size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">One click Logins</h1>
                <p>
                  Leave the hassle of typing usernames and passwords behind.
                  RoboForm logs you in to websites with a single click. Use our
                  on page AutoFill or select a Login directly from RoboForm.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#60B85E] border rounded-xl p-8 ">
              <div className="pt-2">
                <TbCircleKey size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">
                  Capture passwords while you browse
                </h1>
                <p>
                  Go about surfing the web as usual and let RoboForm do all the
                  work. Passwords are captured and saved, with no additional
                  steps required from you.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#60B85E] border rounded-xl p-8 ">
              <div className="pt-2">
                <FaTabletAlt size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">
                  Anytime, anywhere access
                </h1>
                <p>
                  Supported on multiple platforms including Windows, Mac, iOS,
                  Android, and all major browsers.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#60B85E] border rounded-xl p-8 ">
              <div className="pt-2">
                <FaSyncAlt size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">
                  Keep your passwords in sync
                </h1>
                <p>
                  The RoboForm Everywhere secure cloud keeps your passwords
                  backed up and in sync across all your browsers and devices.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#60B85E] border rounded-xl p-8 ">
              <div className="pt-2">
                <MdOutlineWifiPassword size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">Offline access</h1>
                <p>
                  Desktop and mobile apps provide offline access to RoboForm
                  data. In addition, the desktop and mobile versions offer
                  optional local-only storage.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4  bg-[#60B85E] border rounded-xl p-8 ">
              <div className="pt-2">
                <AiFillFolderOpen size={"2rem"} />
              </div>
              <div>
                <h1 className="text-3xl font-bold pb-2">Stay organized</h1>
                <p>
                  Store and categorize all your passwords in easy-to-manage
                  folders. Pin your favorite Logins for easy access.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class=" flex flex-col flex-1 text-white items-center justify-center mt-[5%]">
          <div>
            <h1 className="text-center text-black lg:text-4xl text-2xl font-bold lg:pb-10 pb-10 ">
              Frequently Asked Questions
            </h1>
          </div>
          <div class=" ">
            <input type="checkbox" name="panel" id="panel-1" class="hidden" />
            <label
              id="pan"
              for="panel-1"
              class="relative block lg:ml-[20%] lg:w-[60%] mx-[5%] lg:mx-0 bg-[#60B85E] text-white p-4 shadow border-b border-inherit rounded-t-xl"
            >
              What is a2zPassword Manager?
            </label>
            <div class="accordion__content lg:ml-[20%] lg:w-[60%] mx-[5%] lg:mx-0 bg-[#60B85E] overflow-hidden border-inherit rounded-b-xl ">
              <p class="accordion__body p-4" id="panel1">
               a2zPassword Manager remembers all your passwords, so you
                don’t have to. They’re stored securely in a digital vault and
                synced across all your devices. Rest assured that no one, apart
                from you (not even a2zPassword), has access to your passwords. You
                have the option to assign tags to saved accounts, add credit
                cards, save notes to passwords, or create stand-alone notes.
                They are securely stored insidea2zPassword Manager.
              </p>
            </div>
          </div>
          <div class=" ">
            <input type="checkbox" name="panel" id="panel-2" class="hidden" />
            <label
              id="pan"
              for="panel-2"
              class="relative block lg:ml-[20%] lg:w-[60%] mx-[5%] lg:mx-0 bg-[#60B85E] text-white p-4 shadow border-b border-inherit rounded-t-xl"
            >
              Why should I use Password Manager from a2zPassword?
            </label>
            <div class="accordion__content overflow-hidden lg:ml-[20%] lg:w-[60%] mx-[5%] lg:mx-0 bg-[#60B85E] border-inherit rounded-b-xl ">
              <p class="accordion__body p-4" id="panel1">
                Now you can have one less thing to remember: your passwords.
                They’re safely stored and at your disposal whenever you need
                them.
                <ul className="ml-5 list-disc">
                  <li>
                    Your passwords are stored in a highly secured online vault.
                    All your sensitive data is encrypted with your Master
                    Password.
                  </li>
                  <li>
                    Your passwords are synchronized across your desktop and
                    mobile devices.
                  </li>
                  <li>
                    Your passwords are regularly backed up to prevent data loss.
                  </li>
                  <li>
                    You can auto-fill your passwords on your desktop and mobile
                    devices.
                  </li>
                  <li>
                    You can auto-save your passwords with the save pop-up for
                    new accounts.
                  </li>
                  <li>
                    The security status checks how secure your accounts and
                    passwords are and warns you in case of findings.
                  </li>
                </ul>
                <br />
                Furthermore, we’re award-winning security specialists with a
                proud history of 30 years. Over 100 million satisfied customers
                worldwide trust a2zPassword to keep their digital lives and data safe.
                Our software is German-engineered, and your data is stored in
                Germany – in accordance with all EU legislation, of course.
              </p>
            </div>
          </div>
          <div class=" ">
            <input type="checkbox" name="panel" id="panel-3" class="hidden" />
            <label
              id="pan"
              for="panel-3"
              class="relative block lg:ml-[20%] lg:w-[60%] w-full mx-[5%] lg:mx-0 bg-[#60B85E] text-white p-4 shadow border-b border-inherit rounded-t-xl"
            >
             What if I lose a device on which Password Manager is installed?
            </label>
            <div class="accordion__content overflow-hidden lg:ml-[20%] lg:w-[60%] mx-[5%] lg:mx-0 bg-[#60B85E] border-inherit rounded-b-xl ">
              <p class="accordion__body p-4" id="panel1">
              To prevent your passwords from falling into the wrong hands, we recommend switching on the Auto-Lock function under Settings. This locks all your passwords and notes after a set period, and they will only be accessible with your Master Password.
<br/>
If you lose a device with the Password Manager, go to Connected devices on the dashboard and remove the lost device. You will be locked out of Password Manager on that device.
               
              </p>
            </div>
          </div>
          <div class=" ">
            <input type="checkbox" name="panel" id="panel-4" class="hidden" />
            <label
              id="pan"
              for="panel-4"
              class="relative block lg:ml-[20%] lg:w-[60%] mx-[5%] lg:mx-0 bg-[#60B85E] text-white p-4 shadow border-b border-inherit rounded-t-xl"
            >
              {" "}
              What if I lose a device on which Password Manager is installed?
            </label>
            <div class="accordion__content overflow-hidden lg:ml-[20%] lg:w-[60%] mx-[5%] lg:mx-0 bg-[#60B85E] border-inherit rounded-b-xl ">
              <p class="accordion__body p-4" id="panel1">
                To prevent your passwords from falling into the wrong hands, we
                recommend switching on the Auto-Lock function under Settings.
                This locks all your passwords and notes after a set period, and
                they will only be accessible with your Master Password. If you
                lose a device with the Password Manager, go to Connected devices
                on the dashboard and remove the lost device. You will be locked
                out of Password Manager on that device.
              </p>
            </div>
          </div>
          <div class=" ">
            <input type="checkbox" name="panel" id="panel-5" class="hidden" />
            <label
              id="pan"
              for="panel-5"
              class="relative block lg:ml-[20%] lg:w-[60%] mx-[5%] lg:mx-0 bg-[#60B85E] text-white p-4 shadow border-b border-inherit rounded-t-xl"
            >
              I no longer want to use Password Manager. How do I delete my
              account?
            </label>
            <div class="accordion__content overflow-hidden lg:ml-[20%] lg:w-[60%] mx-[5%] lg:mx-0 bg-[#60B85E] border-inherit rounded-b-xl ">
              <p class="accordion__body p-4" id="panel1">
                We’ll be disappointed to see you go! Before you delete your
                account, we recommend exporting your data. To delete your
                account and all the data held within a2zPassword Manager,
                please follow these steps: On the online dashboard, under
                Settings click Delete a2zPassword Manager data. Then
                uninstall the Password Manager browser extension from all your
                browsers. Also delete the a2zPassword Manager app from all
                your mobile phones and tablets. Your a2zPassword account will still
                remain. If you choose so, you can delete your a2zPassword account at
                my.avira.com. If you were unhappy with anything, we’re always
                grateful for feedback as it allows us to improve our products.
                Thank you!
              </p>
            </div>
          </div>
        </div>
        <section class="text-black-600 ">
          <div class="m-[7%]">
            <h1 class="lg:text-5xl text-2xl text-center font-bold my-[2%]">
              What our customers say
            </h1>
            <div class="flex text-white flex-wrap mt-7">
              <div class="p-4 md:w-1/2 w-full">
                <div class="h-full bg-[#8089E1] p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5  mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6">
                    Initially I've used the free version of a2zPassword antivirus for
                    a long time and It was quite good for basic protection and
                    never had an issue. Keeping the latest cyber security
                    threats in mind, I had to upgrade for a premium version of
                    a2zPassword and it is worth trying. According to me the most
                    important feature of a2zPassword is that a2zPassword products are pretty
                    lightweight on system resources along with top class
                    protection.
                  </p>
                  <a class="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="./149071.png"
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium ">yenij</span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/2 w-full">
                <div class="h-full bg-[#8089E1] p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5  mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6">
                    I recently switched to a2zPassword cause my previous antivirus
                    gave me trouble. I purchased the prime version it works
                    perfectly on my laptop and desktop as well. I saw people
                    talk about data selling but I didn't have any issues with
                    it.
                  </p>
                  <a class="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="./149071.png"
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium ">Jeffrey Leopardas</span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/2 w-full">
                <div class="h-full bg-[#8089E1] p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5  mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6">
                    The very best anti-virus in the IT industry. I used it from
                    a very long time. I try to test some other brand but im not
                    satisfied. a2zPassword is the only one protection for my computer,
                    cellphone and tablet. Keep up the good work guys. Honesty i
                    used the free vertion of the app but still i get the full
                    protection i need. Thanks a lot.
                  </p>
                  <a class="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="./149071.png"
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium ">Alper Kamu</span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/2 w-full">
                <div class="h-full bg-[#8089E1] p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5  mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6">
                    I have been using a2zPassword since it was a Beta product. I still
                    use it to this day. Last update I purposely installed it on
                    a computer I loaded up with malware and viruses. One scan
                    and it picked everything I had installed and zero false
                    positives. I highly recommend a2zPassword and I recommend it to
                    others as well.
                  </p>
                  <a class="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="./149071.png"
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium ">Brian Parker</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex lg:gap-4  flex-col lg:flex-row px-[5%] mt-[5%] mb-[10%] items-center">
          <div className="hidden lg:flex ">
            <FiTrendingUp size={"3rem"} color={"#60B85E"} />
          </div>
          <div className="text-2xl lg:text-xl font-bold">Popular Searches</div>
          <div className="hidden lg:flex font-semibold">:</div>
          <div className="p-3 text-center lg:text-left ">
            free  a2zPassword,  a2zPassword,  a2zPassword chrome extension, best free  a2zPassword
            , best free  a2zPassword for chrome, free  a2zPassword chrome, a2zPassword
            free,  a2zPassword chrome, best a2zPassword,  a2zPassword google
            chrome
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
