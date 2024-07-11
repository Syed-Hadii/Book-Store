import React from "react";
import banner_img from './assets/Banner-img.jpg';

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 md:py-16">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Banner (Text Content) */}
        <div className="left-banner w-full md:w-1/2  py-20 md:py-0 order-last md:order-first">
          <h1 className="font-bold text-3xl mb-6">
            Hello, welcome here to learn something
            <span className="text-pink-700">  new everyday!!!</span>
          </h1>
          <p className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            reiciendis quisquam deserunt adipisci quia alias molestiae odio aut
            reprehenderit sequi magnam numquam, totam ab expedita.
          </p>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Email"
              className="border w-full md:w-96 outline-none px-3 py-2 text-sm rounded-l-md  md:mr-0"
            />
            <button className="bg-pink-700 text-white py-1.5 border-pink-700 px-3 rounded-r-md font-semibold">
              Secondary
            </button>
          </div>
        </div>

        {/* Right Banner (Image) */}
        <div className="right-banner w-full md:w-1/2 mt-10 md:mt-0 order-first md:order-last">
          <img
            src={banner_img}
            alt="Banner"
            className="w-full h-auto md:ml-12 md:mt-0"
          />
        </div>
      </div>
      <hr className="w-full mt-16  border-gray-400 border-2" />    
      </div>
  );
};

export default Banner;
