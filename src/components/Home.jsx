import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

import { CgCPlusPlus } from "react-icons/cg";
import { FaPython } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import pic from "../components/shiv.jpg"

export default function Home() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-10 my-28">
        <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className='text-xl'>Welcome in my Feed</span>
            <div className='flex space-x-1 tex-2xl md:text-4xl'>
            <h1>Hello I am </h1>
            <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />

            
            </div>
            <br />
            <p className='text-sm md:text-md text-justify text-xl'>
                Welcome to my Portfolio. Myself Shiv Patel (3rd year) pursuing btech in Civil Engineering from IIT Indore.
            </p>
            <br />
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/people/Shiv-Patel/pfbid0sHpfEwyjEPJWDR273kLLt5eaynTbxWTA53HBWBKBRyBQTg6unMtHLw4ZATPh83wdl/" target="_blank">
                      <FaFacebook  className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/shiv-patel-659b8925a/" target="_blank">
                      <BsLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCXyEArl_KdkEn4ZTo4X7JRQ" target="_blank">
                      <FaYoutube  className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/Shiv3191" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <CgCPlusPlus className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaPython className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
              </div>
        </div>
        <div className=" flex md:w-1/2 md:ml-8 md:mt-20 mt-8 order-1 item-center justify-center">
            <img
              src={pic}
              className=" rounded-full h-[300px] md:h-[350px]"
              alt=""
            />
          </div>
          </div>
    </div>
    </>
  )
}
