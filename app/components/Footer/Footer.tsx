import React from "react";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import { FaBurger } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const products = [
  "Chicken Burger",
  "Cheese Burger",
  "Double Burger",
  "Veggie Burger",
  "Spicy Chicken",
  "Classic Beef",
];

const quickLinks = [
  "About Us",
  "Menu",
  "Order Online",
  "Locations",
  "Contact",
  "Careers",
];

const Footer = () => {
  return (
    <footer className="pt-20 pb-12 bg-gray-900">
      <div className="w-[80%] pb-10 border-b border-gray-500 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo + about */}
        <div>
          <div className="flex items-center text-white space-x-2">
            <FaBurger className="w-5 h-5 text-orange-500" />
            <h1 className="text-2xl font-semibold">BurgerBite</h1>
          </div>

          <p className="text-white mt-3 opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quasi amet qui.
          </p>

          <div className="flex items-center text-white space-x-2 mt-4">
            <MdEmail className="w-5 h-5" />
            <span className="font-semibold">Danial79fakhrabadi@gmail.com</span>
          </div>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-white">Products</h2>

          {products.map((item, idx) => (
            <p
              key={idx}
              className="mt-2 text-white opacity-60 hover:text-yellow-300 transition duration-200 cursor-pointer w-fit"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-white">Quick Links</h2>

          {quickLinks.map((item, idx) => (
            <p
              key={idx}
              className="mt-2 text-white opacity-60 hover:text-yellow-300 transition duration-200 cursor-pointer w-fit"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Opening Hours + Social */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-white">Opening Hours</h2>

          <p className="text-white font-medium">
            Monday - Friday : <span className="text-yellow-400">8am - 4pm</span>
          </p>

          <p className="text-white font-medium mt-2">
            Saturday : <span className="text-yellow-400">8am - 12am</span>
          </p>

          <div className="flex items-center gap-4 mt-6">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 hover:scale-105 transition-transform"
            >
              <BiLogoFacebook className="text-white text-xl" />
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-pink-500 hover:scale-105 transition-transform"
            >
              <BiLogoInstagram className="text-white text-xl" />
            </a>

            {/* Twitter */}
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-sky-400 hover:scale-105 transition-transform"
            >
              <BiLogoTwitter className="text-white text-xl" />
            </a>
          </div>
        </div>

      </div>

      {/* optional small footer note */}
      <div className="w-[80%] mx-auto mt-8 text-center text-white">
        © {new Date().getFullYear()} BurgerBite. All rights reserved. Desigend by <span className="text-yellow-500 font-semibold ">[persian-store]</span>
      </div>
    </footer>
  );
};

export default Footer;
