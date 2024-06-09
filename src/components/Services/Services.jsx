import React from "react";
import Espressoimg from "../../assets/espressoimg.png";
import capuchinoimg from "../../assets/bannerimg.png";
import americanoimg from "../../assets/americanoimg.png";



const ServicesData = [
  {
    id: 1,
    name: "Espresso",
    img: Espressoimg,
    description:
      "Espresso is a concentrated coffee beverage that is brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans. It is known for its strong flavor and rich, velvety texture. It is typically served in a small cup called a demitasse and enjoyed as a quick pick-me-up or a luxurious treat.",
    aosDelay: "100",
  },
  {
    id: 2,
    aosDelay: "300",
    name: "Americano",
    img: americanoimg,
    description:
      "Americano has a rich and bold taste with a slightly bitter undertone. The name Americano is believed to have originated during World War II when American soldiers in Italy would dilute their espresso to make it more similar to the coffee they were used to back home.",
  },
  {
    id: 3,
    aosDelay: "500",
    name: "Cappuchino",
    img: capuchinoimg,
    description:
      "Cappuccino is a classic Italian coffee drink made with equal parts of espresso, steamed milk, and milk foam. The espresso is poured into a cup, followed by steamed milk and a dollop of milk foam on top. The result is a creamy and frothy beverage with a strong coffee flavor.",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* header title */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>
          {/* service card section  */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 ">
            {ServicesData.map((data, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className="rounded-2xl bg-white hover:bg-prime hover:text-white shadow-xl duration-200 px-5 md:px-0 lg:mx-0 group relative"
                >
                  {/* img section  */}
                  <div className="h-[122px]">
                    <img
                      src={data.img}
                      alt=""
                      className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  {/* text content */}
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
