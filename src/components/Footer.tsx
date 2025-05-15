import Image from "next/image";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "./ui/moving-border";

export const Footer = () => {
  const emailRef = useRef("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailRef.current.value }),
    };
    if (emailRef.current.value) {
      try {
        await fetch("http://localhost:5000/mail/save_email", option)
          .then((res) => res.json())
          .then((data) => {
            emailRef.current.value = "";
            console.log("success");
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <footer className="bg-gray-300 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 mt-12 border-t border-black dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 flex justify-center items-center flex-wrap gap-8">
        {/* Branding */}
        <div className="flex items-center gap-5 ">
          <Image
            src={"/favicon.jpg"}
            height={50}
            width={50}
            alt="logo"
            className="rounded-xl border"
          />
          <div>
            <h2 className="text-xl font-extrabold text-blue-800 dark:text-blue-300">
              Job Hunter
            </h2>
            <p className="text-sm mt-2 dark:text-white text-black">
              Helping Freshers Land Their First Job.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg mb-3 font-bold dark:text-yellow-100 text-yellow-800 ">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm flex gap-7 dark:text-gray-300 text-black">
            <li>
              <Link href="/" className="active:text-blue-500 underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/AboutUs" className="active:text-blue-500 underline">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/Disclaimer"
                className="active:text-blue-500 underline"
              >
                Disclaimer
              </Link>
            </li>
            <li>
              <Link
                href="/PrivacyPolicy"
                className="active:text-blue-500 underline"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-100 text-lg mb-3">
            For Support, Contact Us
          </h3>
          <p className="text-sm text-black dark:text-gray-300">
            Email:{" "}
            <a
              href="mailto:support@jobhunter.com"
              className="active:text-blue-500 underline"
            >
              support@jobhunter.com
            </a>
          </p>
        </div>

        {/* Email Subscribe */}
        <div className="flex flex-col items-center gap-3">
          <div>
            <h3 className="font-bold text-lg text-yellow-800 dark:text-yellow-100">
              Get Hiring Alert Via Mail
            </h3>
          </div>
          <div>
            <div className="flex flex-col items-center gap-3">
              <Button
                borderRadius="1.75rem"
                className="bg-gray-400 dark:bg-gray-600 dark:text-white border-neutral-200 dark:border-slate-800 p-5"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  className="p-3 rounded-xl bg-transparent placeholder:text-white focus:outline-none w-"
                  ref={emailRef}
                  autoComplete="off"
                />
              </Button>
              <input
                onClick={handleEmailSubmit}
                type="submit"
                value="Subscribe"
                className="border border-white px-4 py-2 active:bg-black active:text-white rounded-xl dark:bg-white bg-black text-white dark:text-black font-bold "
              />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center">
          <h3 className=" font-bold text-center dark:text-green-200 text-green-700 text-lg mb-3">
            Join WhatsApp Group For Hiring Updates
          </h3>
          <div className="flex space-x-4 text-xl mb-[-2rem]">
            <a
              href="https://chat.whatsapp.com/FRlwi3kKfCZ8nD0TPdUlUN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareWhatsapp className="text-5xl dark:text-green-500 text-green-700" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 py-4 border-t border-gray-800 dark:border-gray-700">
        © 2025 Job Hunter. All rights reserved.
      </div>
    </footer>
  );
};
