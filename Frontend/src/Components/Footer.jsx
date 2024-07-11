import React from "react";
import Xt from './assets/x-icon.png'
import fb from './assets/fb-icon.png'
import yt from './assets/yt-icon.png'

const Footer = () => {
  return (
    <div className="footer  max-w-screen-2xl container mx-auto md:px-20 px-4  flex items-center flex-col ">
      <div className=" hidden md:block ">
      <ul className="  flex gap-10 font-semibold text-sm mt-14">
        <li>About Us</li>
        <li>Contact</li>
        <li>Jobs</li>
        <li>Press Kit</li>
      </ul>
      <div className="footer-social-container  flex items-center gap-5 justify-center mt-5">
        <div className="footer-social-icon">
          <img src= {Xt} alt="" className=" w-8"/>
        </div>
        <div className="footer-social-icon">
          <img src={fb} alt="" className="w-12" />
        </div>
        <div className="footer-social-icon">
          <img src={yt} alt="" className="w-8" />
        </div>
      </div>
      </div>
      <hr  className="w-full border border-gray-300 invisible md:visible"  />
      <div className=" invisible md:visible copyright text-center ">
        <p className="text-gray-600">Copyright &#169; 2023 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
