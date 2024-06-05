import React from 'react'
import cplus from "../components/cplus.jpeg";
import c from "../components/c.jpeg";
import python from "../components/python.jpeg";
import react from "../components/react.jpeg";
import html from "../components/pp.jpeg";
import css from "../components/css.png";
import mongo from "../components/mongo.jpeg";
import logo1 from "../components/logo.jpg";
export default function Portfolio() {
    const cardItem = [
        {
          id: 1,
          logo: cplus,
          name: "C++",
        },
        {
          id: 2,
          logo: c,
          name: "C",
        },
        {
            id: 3,
            logo: python,
            name: "Python",
          },
        {
          id: 4,
          logo: react,
          name: "React",
        },
        {
            id: 5,
            logo: html,
            name: "Html",
          },
        {
            id: 6,
            logo: css,
            name: "CSS",
          },
        
        {
          id: 7,
          logo: mongo,
          name: "Mongo DB",
        },
       
      ];
      const cardItem1=[
        {
          id: 1,
          logo: logo1,
          name: "Note-Making Chrome Extension",
        },
      ];
  return (
    <>
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
    <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
    <span className=" underline font-semibold text-xl mb-5">Tech Skills</span>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-5 ">
          {cardItem.map(({ id, logo, name }) => (
            <div
            className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] rounded-full"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
               
              </div>
              
            </div>
          ))}
        </div>
        <div className='mt-8'>
          
        <span className=" underline font-semibold text-xl mt-8">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem1.map(({ id, logo, name }) => (
            <div
              className="md:w-[350px] md:h-[350px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                It is a chrome extension which has very good user interface. There you can make any type of notes and that notes
being saved on your local device. </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  <a href="https://github.com/ANJani9web/IITISoC-23-Web-21-Note_Making_Chrome_Extension">Source code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

    </>
  )
}
