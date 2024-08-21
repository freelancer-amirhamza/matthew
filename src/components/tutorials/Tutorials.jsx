import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import card1 from "../images/tutorials/card1-01.webp";
import card2 from "../images/tutorials/card1-02.webp";
import card3 from "../images/tutorials/card-01.webp";
import card4 from "../images/tutorials/card-02.webp";
import card5 from "../images/tutorials/card-03.webp";
import card6 from "../images/tutorials/Rebel-Wilson.webp";
import clone from "../images/sec3-img03.png";
import Image from 'next/image';

const Tutorials = () => {
  const cards1 = [
    {
      id: 1,
      title:"how to deal with the fear of never finding your  ",
      image: card1,
    },
    {
      id:  2,
      title:"how to deal with the fear of never finding your  ",
      image: card2,
    },
  ]
  const cards = [
    {
      id: 3,
      title:"how to deal with the fear of never finding your  ",
      image: card3,
    },
    {
      id: 4,
      title:"how to deal with the fear of never finding your  ",
      image: card4,
    },
    {
      id: 5,
      title:"how to deal with the fear of never finding your  ",
      image: card5,
    },
  ]
  return (
    <>
      <div className=" w-full  h-full md:pt-60 ">
        <div className="container px-0 md:px-10 mx-auto md:w-10/12 items-center justify-center flex flex-col gap-10 ">
          <div className=" w-full items-center justify-center flex gap-2 ">
            <div className="w-full h-[2px] bg-blue-400  "></div>
            <img src="https://iili.io/JS49e5X.png" alt="" className="" />
            <div className="w-full h-[2px] bg-blue-400  "></div>
          </div>
          <div className="flex justify-center items-center w-full h-full  ">
            <h2 className=" uppercase text-3xl text-center font-semibold  ">
              {" "}
              The Latest Love Life Advice{" "}
            </h2>
          </div>
          <div className=" w-full h-full items-center justify-center flex  ">
            <div className="w-full h-[2px] bg-blue-400  "></div>
            <h2 className=" min-w-max px-3 text-xl flex items-center text-center justify-center  ">
              from Matthew Hussey
            </h2>
            <div className="w-full h-[2px] bg-blue-400  "></div>
          </div>
          <div className="flex flex-col w-full mx-auto md:flex-row ">
            <button
              className=" border border-blue-400 w-full h-28 text-3xl uppercase 
              text-secondary md:text-sm md:border-t-[1px] md:border-l-0 md:h-16   "
            >
              All{" "}
            </button>
            <button
              className="border border-blue-400 w-full h-28 text-3xl uppercase 
              text-secondary md:text-sm md:border-t-[1px] md:border-l-0 md:h-16  border-t-0 "
            >
              UNDERSTANDING MEN{" "}
            </button>
            <button
              className="border border-blue-400 w-full h-28 text-3xl uppercase 
              text-secondary md:text-sm md:border-t-[1px] md:border-l-0 md:h-16  border-t-0 "
            >
              DATING{" "}
            </button>
            <button
              className="border border-blue-400 w-full h-28 text-3xl uppercase 
              text-secondary md:text-sm md:border-t-[1px] md:border-l-0 md:h-16  border-t-0 "
            >
              TEXTING AND COMMUNICATION{" "}
            </button>
            <button
              className="border border-blue-400 w-full h-28 text-3xl uppercase 
              text-secondary md:text-sm md:border-t-[1px] md:border-l-0 md:h-16  border-t-0 "
            >
              COMMITMENT
            </button>
            <button
              className=" border border-blue-400 w-full h-28 text-3xl uppercase 
              text-secondary md:text-sm md:border-t-[1px] md:border-l-0 md:h-16  border-t-0 "
            >
              HEARTBREAK
            </button>
            <button
              className="border border-blue-400 w-full h-28 text-3xl uppercase 
              text-secondary md:text-sm md:border-t-[1px] md:border-l-0 md:h-16  border-t-0 "
            >
              CONFIDENCE
            </button>
          </div>

          <div className=" flex flex-col md:flex-row gap-16 w-full">
            {cards1.map(({ title, image, id }) => {
              return (
                <div key={id} className=" gap-6 flex flex-col">
                  <Link href={"/"}>
                    <Image src={image} alt="" className="" />
                  </Link>
                  <h3 className="w-full uppercase text-xl md:text-[1rem] tracking-wider font-semibold text-secondary ">
                    {title}{" "}
                  </h3>
                  <div className=" flex justify-between border-gray-500 p-1 border-y-2 ">
                    <div className=" flex gap-2 ">
                      <div className="flex w-max bg-blue-500 hover:transition h-full  items-center group justify-center ">
                        <FaFacebook className="text-white h-8 w-8  p-[6px] " />
                        <span
                          className=" text-white h-8 w-12 items-center group-hover:transition hidden 
                          group-hover:flex  justify-center text-center bg-blue-500 "
                        >
                          Share
                        </span>
                      </div>
                      <div className="flex w-max bg-black hover:transition h-full  items-center group justify-center ">
                        <FaXTwitter className="text-white h-8 w-8  p-[6px]  " />
                        <span
                          className="text-white h-8 w-12 items-center group-hover:transition hidden 
                          group-hover:flex justify-center text-center bg-black "
                        >
                          Tweet
                        </span>
                      </div>
                    </div>
                    <span className=" ">
                      {" "}
                      {new Date().toLocaleDateString()} 
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" flex flex-col md:flex-row gap-5 w-full">
            {cards.map(({ title, image, id }) => {
              return (
                <div key={id} className=" gap-6 flex flex-col ">
                  <Link href={"/"}>
                    <Image src={image} alt="" className="" />
                  </Link>
                <h3 className="w-full uppercase text-xl md:text-[1rem] tracking-wider font-semibold text-secondary ">
                    {title}{" "}
                  </h3>
                  <div className=" flex justify-between border-gray-500 p-1 border-y-2 ">
                    <div className=" flex gap-2 ">
                      <div className="flex w-max bg-blue-500 hover:transition h-full  items-center group justify-center ">
                        <FaFacebook className="text-white h-8 w-8  p-[6px] " />
                        <span
                          className=" text-white h-8 w-12 items-center group-hover:transition hidden 
                          group-hover:flex  justify-center text-center bg-blue-500 "
                        >
                          Share
                        </span>
                      </div>
                      <div className="flex w-max bg-black hover:transition h-full  items-center group justify-center ">
                        <FaXTwitter className="text-white h-8 w-8  p-[6px]  " />
                        <span
                          className="text-white h-8 w-12 items-center group-hover:transition hidden 
                          group-hover:flex justify-center text-center bg-black "
                        >
                          Tweet
                        </span>
                      </div>
                    </div>
                    <span className=" ">
                      {" "}
                      {new Date().toLocaleDateString()} 
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="hover:bg-primary border-primary uppercase p-3 bg-transparent md:w-fit
                     w-full  flex items-center justify-center hover:text-white border-2 
                    text-primary  font-semibold tracking-wider
                    md:px-10    "> load more 
          </button>

          <div className="flex  w-full md:w-7/12 h-full  justify-items-center  items-center px-6  ">
                            
                            <div className=" mx-auto justify-center flex md:flex-row flex-col bg-secondary-light w-full pl-3 ">
                                <div className="md:w-6/12 bg-white  w-full justify-center items-center flex ">
                                    <Image src={card6} alt="" 
                                    className="  items-center h-full justify-center flex object-cover " />
                                </div>
                                <div className=" bg-white md:-ml-5 p-10 gap-4 w-full md:items-start items-center justify-center flex flex-col ">
                                <Image src={clone} alt=""
                                className="" />
                                <p className=" ">
                                When you have someone who is a dating guru, an expert, a guy that knows everything that needs to be known about how to
                                find the perfect partner then you just want to spend a lot of time with them.
                                </p>
                                <div className=" flex w-full text-start justify-start gap-5 ">
                                    <h4 className="uppercase font-semibold tracking-wider text-lg "> Ryan Seacrest</h4>
                                    <span className="font-semibold text-secondary-light text-lg "> Radio Personality </span>
                                </div>
                            </div>
                            </div>
                            
                        </div>
          
        </div>
      </div>
    </>
  );
}

export default Tutorials