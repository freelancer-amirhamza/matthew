import React from "react";
import Button from "../Button";
import card1 from "../images/hover-cards/new-img.webp";
import card2 from "../images/hover-cards/sec8-img02.webp";
import card3 from "../images/hover-cards/sec8-img03.webp";
import card4 from "../images/hover-cards/sec8-img04.webp";
import Image from "next/image";
import img5 from "../images/hover-cards/sec8-img05.png"
import img6 from "../images/hover-cards/sec8-img06.png"


const Events = () => {
  const cards = [
    {
      bg: card1,
      title: "Live Coaching",
      text: " Want to say hello and meet me live? Come to one of our spectacular tour events when I’m in your city and let’s rock the place. I’vebuilt my reputation on stage, and can’t wait to actually see you in person! ",
    },
    {
      bg: card2,
      title: "Live Coaching",
      text: " Want to say hello and meet me live? Come to one of our spectacular tour events when I’m in your city and let’s rock the place. I’vebuilt my reputation on stage, and can’t wait to actually see you in person! ",
    },
    {
      bg: card3,
      title: "Live Coaching",
      text: " Want to say hello and meet me live? Come to one of our spectacular tour events when I’m in your city and let’s rock the place. I’vebuilt my reputation on stage, and can’t wait to actually see you in person! ",
    },
    {
      bg: card4,
      title: "Live Coaching",
      text: " Want to say hello and meet me live? Come to one of our spectacular tour events when I’m in your city and let’s rock the place. I’vebuilt my reputation on stage, and can’t wait to actually see you in person! ",
    },
  ];
  return (
    <>
      <div className=" ">
        <div className="wrapper">
          <div className=" grid grid-cols-1 grid-rows-4 md:grid-rows-1 md:grid-cols-4  w-full h-full items-center justify-center ">
            {cards.map(({ title, text, bg }) => {
              return (
                <div
                  className=" group w-full relative overflow-hidden gap-5 hover:scale-105 h-[30rem]
                        scale-100 duration-300 hover:z-20 z-0 transform-gpu 
                          flex bg-no-repeat bg-cover  bg-top mx-auto    items-center justify-center  "
                  // style={{ backgroundImage: `url(${bg})` }}
                >
                  <Image src={bg} className="absolute -z-10 object-cover "/>
                  <div className="absolute w-full h-full p-8 ">
                    <div className="  border-[2px]  flex items-center justify-center w-full h-full  ">
                      <div className="group-hover:hidden flex flex-col w-full h-full items-center justify-center ">
                        <Image
                          src={img5}
                          alt=""
                          className="w-24 max-h-24  "
                        />
                        <h3 className="text-white text-2xl tracking-wide font-bold uppercase ">
                          {" "}
                          {title}{" "}
                        </h3>
                      </div>
                      <div className="hidden absolute group-hover:flex gap-5 p-12 bg-[#34d5e1ae]  flex-col w-full h-full items-center justify-center ">
                        <div className="flex flex-col w-full   items-center justify-center ">
                          <Image
                            src={img6}
                            alt=""
                            className="w-24 max-h-24"
                          />
                          <h3 className="text-white text-2xl tracking-wide font-bold uppercase">
                            {title}{" "}
                          </h3>
                        </div>
                        <p className="flex w-full  text-center text-gray-50 ">
                          {text}{" "}
                        </p>
                        <Button className=" px-4 w-full py-1 "  />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="container w-full h-full items-center justify-center px-0 mx-auto">
            <div className="w-full h-full items-center justify-center">
              <div className="w-full">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
