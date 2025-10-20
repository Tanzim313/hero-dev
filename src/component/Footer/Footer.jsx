import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer =()=>{

    return(
            <div className="bg-[#001931]">
              <div className="flex justify-between items-center p-8">

              <div className="flex flex-row items-center text-center ">
                <img className="w-8" src={logo} alt="" />
                <span className="text-xl font-bold">Hero.Io</span>
              </div>

              <div>
                <p className="font-bold">Social Links</p>
                <ul className="flex justify-around mt-5">
                  <li><FaFacebook /></li>
                  <li><FaTwitter /></li>
                  <li><FaYoutube /></li>
                </ul>
              </div>
        </div>
            <div className="p-8">
                  <h1 className="text-center mt-2 text-xl font-bold">Copyright © 2025 - All right reserved</h1>
            </div>

            </div>
    );
};

export default Footer;