import React from "react";
import Bannerimg from "../../assets/coffee-white.png";
import bgimg from "../../assets/coffee-texture.jpg";
import { SiCoffeescript, SiBuymeacoffee } from "react-icons/si";
import { GiCoffeeCup } from "react-icons/gi";

const bgImage = {
  backgroundImage: `url(${bgimg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Banner = () => {
    return (
      <>
        <span id="about"></span>
        <div style={bgImage}>
          <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
            <div className="container">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Image section */}
                <div data-aos="zoom-in">
                  <img
                    src={Bannerimg}
                    alt="biryani img"
                    className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                  />
                </div>
                {/* text content section */}
                <div className="flex flex-col justify-center gap-6 xs:px-0 px-5">
                  <h1
                    data-aos="fade-up"
                    className="text-3xl sm:text-4xl font-bold font-cursive"
                  >
                    Premium Blend Coffee
                  </h1>
                  <p
                    data-aos="fade-up"
                    className="text-sm text-gray-500 tracking-wide leading-5"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eaque reiciendis inventore iste ratione ex alias quis magni at
                    optio
                  </p>
  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-5">
                      <div data-aos="fade-up" className="flex items-center gap-3">
                        <SiCoffeescript className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                        <span>Premium Coffee</span>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="flex items-center gap-3"
                      >
                        <GiCoffeeCup className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                        <span>Hot Coffee</span>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className="flex items-center gap-3"
                      >
                        <SiBuymeacoffee className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                        <span>Cold Coffee</span>
                      </div>
                    </div>
                    <div
                      data-aos="slide-left"
                      className="border-l-4 border-primary/50 pl-6 space-y-2"
                    >
                      <h1 className="text-2xl font-semibold font-cursive ">
                        Tea Lover
                      </h1>
                      <p className="text-sm text-gray-500">
                        Brewing the perfect cup of tea
                        requires patience, precision, and a dash of passion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  

export default Banner;
