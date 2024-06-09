import React from "react";
import Ccup from "../../assets/ccup.png";

const Home = () => {
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-branddark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grod-cols-1 sm:grid-cols-2">
          {/* text */}
          <div className="order-2 sm:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              We serve the richest{" "}
              <span className="text-prime font-cursive">Coffee</span> in the
              city
            </h1>
            <div>
              <button className="bg-gradient-to-r from-prime to-second border-2 border-prime rounded-full px-4 py-2 mt-8 text-white hover:scale-105 duration-200">
                Coffee Cafe
              </button>
            </div>
          </div>
          {/* iamge */}
          <div className="min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
            <img
              src={Ccup}
              alt=""
              className="w-[300px] sm:w-[400px] sm:scale-110 mx-auto spin"
            />
            {/* <div className="bg-gradient-to-r from-prime to-second border-2 border-prime rounded-full px-4 py-2 text-white hover:scale-105 duration-200">
              <h1>Hey Coder</h1>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
