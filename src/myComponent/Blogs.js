import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const data = [
  {
    id: 1,
    heading: "",
    desc: "In this world of digitalization, where everything is connected online, it is not possible to remember all those passwords. But there are some helpful tools that will help you generate and keep your password safe. It will also protect all your information.",
  },
  {
    id: 2,
    heading: "",
    desc: "To secure your passwords, there are two most popular tools the Bitwarden Chrome extension and the A2Z password manager which have been highly used by people for the past few years. While both Bitwarden password generator and A2Z's password manager offer key features, both of them generate and save passwords. In this article, we will talk about them precisely, and you can decide which one to go ahead with.",
  },
  {
    id: 3,
    heading: "Overview of the Bitwarden and A2Z password manager",
    desc: "Both of these extensions are very strong and safe to use. They both support the most popular operating systems and they are winning the market But in terms of compatibility, both are great as they offer unlimited storage. Now, let's compare these two extensions. ",
  },
  {
    id: 4,
    heading: "How many Platforms does it support?",
    desc: "In terms of browser extensions, it supports Bitwarden Firefox, Safari Bitwarden Extension, Bitwarden Edge extension, Google Chrome, Opera, Vivaldi, Brave, and Tor Browser, but the A2Z password manager only works on Google Chrome which is being widely used. But in the future, the A2Z password manager will have more browsers than the Bitwarden Firefox extension",
  },
  {
    id: 5,
    heading: "Features",
    desc: "Now, when it comes to features, both extensions are quite different. As in this extension, it has categories for passwords, including notes and credit card details, Bitwarden auto-fill logins, and it also auto-saves your passwords. It will secure your Bitwarden vaults, and it will sync passwords across all your devices. Your data will be safe by using this extension. In the A2Z password manager, it is easy to log in as it has no complicated steps and will synchronize all your passwords. No matter where you are, you can access the A2Z password manager at any time. It will secure and save your password. It will also help you generate your password. The best part is that it doesn't leak your personal information. So, you are totally safe to use the A2Z password manager.",
  },
  {
    id: 6,
    heading: "Password recovery",
    desc: "If you have forgotten your master password, then there is no way to restore your password and data because it has zero-knowledge encryption. You will be left with only one option, and that is to export your vault from any app that is still logged in and import it to a new account. But in A2Z, there is nothing like that, as this extension will remember your password, and in case you have forgotten your password, you can restore it from their extension. ",
  },
  {
    id: 7,
    heading: "Data Storage",
    desc: "Unlike Bitwarden, A2Z password manager gives unlimited storage so that you can save a large number of passwords. You can also use this extension for free. It offers 1 GB of storage, and if you want to have more than that, you have to pay for additional storage.",
  },
  {
    id: 8,
    heading: "Privacy Policy",
    desc: "When it comes to downloading the extension, you must go through their privacy policy. Both of these extensions are safe. While logging in to Bitwarden, It will collect your name, email address, IP address, type of device you are using, and other information. In A2Z Password Manager, collect your name, email ID, location, and other forms of data. ",
  },
  {
    id: 9,
    heading: "Password Sharing",
    desc: "You can only share your password with this tool with one user. In case you want to share it with more than one user, then you have to upgrade to Bitwarden family sharing. With this, you can share unlimited passwords with up to six users. But with the A2Z password manager, you cannot share your password with anyone. It will only be protected by the extension. ",
  },
  {
    id: 10,
    heading: "Password Generator",
    desc: "It is the best password generator, and it will keep your account safe because nobody can hack it. Its default length is 14 characters, but if you want to set it between 5 and 128 characters, You can just add letters, symbols, and numbers, or you can choose to create a passphrase. Whereas in the A2Z password manager, you can set them to between 8-10 characters, including symbols and numbers. They are both strong password generator.",
  },
  {
    id: 11,
    heading: "",
    desc: "Lastly, You can use the extension authenticator as an alternative to specialized authentication tools like Authy to prove your identity on websites and applications that support two-step authentication. Six-digit TOTPs are created by the Bitwarden authenticator using SHA-1, and they are rotated every 30 seconds. There are also features that you can unlock with Bitwarden self-hosting, but you need to have a registered license file. It can be obtained from the Bitwarden-hosted web vault. Maybe A2Z doesn’t have these things, but it is an offline password manager and generator. You can use the extension without the internet, and they are continuously working on it to provide better features.",
  },
];

export default function Blogs() {
  return (
    <>
      <Header />
      <div className=" p-4 lg:p-8 mt-10 mb-10">
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-[#8089E1] text-center text-4xl font-bold">
            Bitwarden Chrome Extension Vs A2Z password manager
          </h1>
          <img
            src="blog-main.png"
            alt="blog main"
            className=" w-9/12 object-cover"
          />

          <div className=" flex flex-col gap-5">
            {data.map((article) => (
              <div className=" flex flex-col gap-2" key={article.id}>
                {article.heading.length > 0 && (
                  <h4 className=" text-xl font-bold">{article.heading}</h4>
                )}
                <p className=" text-lg">{article.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
