import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Links = [
  {
    id: 1,
    name: "Instagram",
    link: "https://www.instagram.com/",
    icon: <FiInstagram />,
  },
  {
    id: 2,
    name: "Twitter",
    link: "https://twitter.com/",
    icon: <FaXTwitter />,
  },
  {
    id: 3,
    name: "Location",
    link: "https://www.google.com/maps",
    icon: <FaLocationDot />,
}
];

const Footer = () => {
  return (
    <div className="h-[96px] container">
      <div className="flex text-white items-center justify-between h-full">
        <h1 className="sm:text-lg text-xs text-prime">© 2024 Coffee Cafe. All rights reserved.</h1>
        <ul className="flex gap-2 sm:gap-4">
          {Links.map((link) => (
            <li key={link.id}>
              <a href={link.link} className="flex items-center gap-2 rounded-full rounded-full border-2 border-prime bg-prime px-4 py-2 hover:scale-105 duration-200">
                {link.icon}
                <span className="hidden sm:inline">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;