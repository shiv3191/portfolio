import React from 'react'
import cplus from "../components/cplus.jpeg";
import c from "../components/c.jpeg";
import python from "../components/python.jpeg";
import react from "../components/react.jpeg";
import html from "../components/pp.jpeg";
import css from "../components/css.png";
import mongo from "../components/mongo.jpeg";
export default function Experience() {
    const cardItem = [
        {
          id: 1,
          logo: cplus,
          name: "C++",
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
  return (
    <>
    <div name="experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
    <h1 className="text-3xl font-bold mb-5">Experience
    </h1>
    <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[130px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>

    </div>
    </>
  )
}
