import Image from "next/image";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 mt-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div className="flex items-center gap-5">
          <Image
            src={"/favicon.jpg"}
            height={50}
            width={50}
            alt="logo"
            className="rounded-xl"
          />
          <div>
            <h2 className="text-xl font-extrabold text-blue-300">Job Hunter</h2>
            <p className="text-sm mt-2">
              Helping Freshers Land Their First Job.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg mb-3 font-bold text-yellow-100 ">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm flex gap-7">
            <li>
              <Link href="/" className="active:text-blue-500 underline">
                Home
              </Link>
            </li>
            <li>
              <a href="/AboutUs" className="active:text-blue-500 underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/Disclaimer" className="active:text-blue-500 underline">
                Disclaimer
              </a>
            </li>
            <li>
              <a
                href="/PrivacyPolicy"
                className="active:text-blue-500 underline"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-yellow-100 text-lg mb-3">
            For Support, Contact Us
          </h3>
          <p className="text-sm">
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
            <h3 className="font-bold text-lg text-yellow-100">
              Get Hiring Alert Via Mail
            </h3>
          </div>
          <div>
            <form className="flex flex-col items-center gap-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border border-gray-400 p-3 rounded-xl bg-gray-900"
              />
              <input
                type="submit"
                value="Subscribe"
                className="border border-white px-4 py-2 active:bg-black active:text-white rounded-xl bg-white text-black font-bold"
              />
            </form>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold  text-green-200 text-lg mb-3">
            Join WhatsApp Group For Hiring Updates
          </h3>
          <div className="flex space-x-4 text-xl mb-[-2rem]">
            <a
              href="https://chat.whatsapp.com/FRlwi3kKfCZ8nD0TPdUlUN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareWhatsapp className="text-5xl text-green-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 py-4 border-t border-gray-300 dark:border-gray-700">
        © 2025 Job Hunter. All rights reserved.
      </div>
    </footer>
  );
};
