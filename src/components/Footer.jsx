import React from 'react'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div name="Footer" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Shiv-Patel/pfbid0sHpfEwyjEPJWDR273kLLt5eaynTbxWTA53HBWBKBRyBQTg6unMtHLw4ZATPh83wdl/"><FaFacebook size={24} /></a>
              
              <FaTwitter size={24} />
              <a href="https://www.instagram.com/shivpatel186/"><FaInstagram size={24} /></a>
              <a href="https://www.linkedin.com/in/shiv-patel-659b8925a/"><FaLinkedinIn size={24} /></a>
              
              
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024. All rights reserved.
              </p>
              <p className="text-sm"> Shiv Patel(IIT Indore)</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
