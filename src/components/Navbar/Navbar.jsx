import React from "react";
import Clogo from "../../assets/clogo.png";
import {FaCoffee} from 'react-icons/fa';


const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Menu",
    link: "/#",
  },
  {
    id: 3,
    name: "Contacts",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-second to-second/90 text-white">
      <div className="container py-4" >
        <div className="flex justify-between items-center gap-4">
          {/* Logo section */}
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={Clogo} alt="" className="w-12" />
              Coffee Cafe
            </a>
          </div>
          {/* Link section */}
          <div className="flex jsutify-between items-center gap-4">
            <ul className="hidden sm:flex items-center gap-4">
              {Menus.map((data, index) => (
                <li key={index}>
                  <a href={data.link} className="inline-block text-xl p-4 text-white/70 hover:text-white duration-200">
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-prime/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-2">
              Order
              <FaCoffee className="text-xl cursor-pointer"></FaCoffee>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



