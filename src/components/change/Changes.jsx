import React from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide1 from "../images/change/Rachel-Weinhold.webp";
import slide2 from "../images/change/Lakshmi-Harilela-2.webp";
import slide3 from "../images/change/Navneet-Jhawar.webp";
import slide4 from "../images/change/Sarah-Hyndman-2.webp";
import slide5 from "../images/change/lavaniya-img.webp";
import slide6 from "../images/change/nadine-image.webp";
import clone from "../images/sec3-img03.png";
import Image from 'next/image';

const Changes = () => {
    const slides = [
        {
            image:slide1,
            title:"Lorem ipsum dolor sit adipisicing elit blanditiis neque ",
            text: "Since I started Matthew’s programs, I realized I needed to work more on my own life. Confidence developed, especially after completing Attraction to Commitment and the Virtual Retreat. I’m now in a new healthy relationship and living a full life I love!  Identifying happiness criteria, connecting with a globalcommunity and nurturing core confidence rebooted my life! THANK YOU!” ",
            name: "Rachel ",
            address: "Hong Kong "
        },
        {
          image:slide2,
            text: "Since I started Matthew’s programs, I realized I needed to work more on my own life. Confidence developed, especially after completing Attraction to Commitment and the Virtual Retreat. I’m now in a new healthy relationship and living a full life I love!  Identifying happiness criteria, connecting with a globalcommunity and nurturing core confidence rebooted my life! THANK YOU!” ",
            name: "Lakshmi ",
            address: "Hong Kong "
        },
        {
          image:slide3,
            title:"Lorem ipsum dolor sit adipisicing elit blanditiis neque ",
            text: "Since I started Matthew’s programs, I realized I needed to work more on my own life. Confidence developed, especially after completing Attraction to Commitment and the Virtual Retreat. I’m now in a new healthy relationship and living a full life I love!  Identifying happiness criteria, connecting with a globalcommunity and nurturing core confidence rebooted my life! THANK YOU!” ",
            name: "Navneet-Jhawar ",
            address: "Hong Kong "
        },
        {
          image:slide4,
            title:"Lorem ipsum dolor sit adipisicing elit blanditiis neque ",
            text: "Since I started Matthew’s programs, I realized I needed to work more on my own life. Confidence developed, especially after completing Attraction to Commitment and the Virtual Retreat. I’m now in a new healthy relationship and living a full life I love!  Identifying happiness criteria, connecting with a globalcommunity and nurturing core confidence rebooted my life! THANK YOU!” ",
            name: "Rachel ",
            address: "Hong Kong "
        },
        {
            image:slide5,
            title:"Lorem ipsum dolor sit adipisicing elit blanditiis neque ",
            text: "Since I started Matthew’s programs, I realized I needed to work more on my own life. Confidence developed, especially after completing Attraction to Commitment and the Virtual Retreat. I’m now in a new healthy relationship and living a full life I love!  Identifying happiness criteria, connecting with a globalcommunity and nurturing core confidence rebooted my life! THANK YOU!” ",
            name: "Rachel ",
            address: "Hong Kong "
        },
        {
          image:slide6,
            title:"Lorem ipsum dolor sit adipisicing elit blanditiis neque ",
            text: "Since I started Matthew’s programs, I realized I needed to work more on my own life. Confidence developed, especially after completing Attraction to Commitment and the Virtual Retreat. I’m now in a new healthy relationship and living a full life I love!  Identifying happiness criteria, connecting with a globalcommunity and nurturing core confidence rebooted my life! THANK YOU!” ",
            name: "Rachel ",
            address: "Hong Kong "
        },
    ]
  return (
    <>
      <div
        className=" bg-[url('https://iili.io/dV7Cfx2.webp')]
    bg-no-repeat bg-cover w-full h-full items-center justify-center overflow-x-auto -mt-36 "
      >
        <div className=" w-full flex flex-col h-full items-center justify-center ">
          <div className="flex w-full h-full items-center justify-center py-14 mt-32 ">
            <h2 className="tracking-wider text-8xl uppercase font-semibold text-secondary ">
              lives
            </h2>
            <h2 className=" font-mono text-7xl uppercase font-semibold text-secondary-light ">
              Changed
            </h2>
          </div>

          <div className=" gap-5 w-full relative h-full items-center justify-center flex  "
          
          m
            // 
            // },
          >
            <Swiper className="  flex w-full mx-auto h-full items-center justify-center  " 
                  modules={[Autoplay, Pagination, Navigation]}
                  
                  slidesPerView={1}
                  autoplay={{
                    delay: 25000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    
                  }}
                  navigation={{
                    clickable: true,
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                  }}
                  // navigation={true}
                  loop={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                  }}
                >
            {slides.map(({ image, title, text, name, address }) => {
              return (
                
                <SwiperSlide className='py-10 ' >
                  <div className="flex md:flex-row flex-col md:ml-[75px] md:max-w-[800px] md:w-full  md:px-0 h-full items-center justify-center bg-gray-100 ">
                  <div className="w-full h-full md:w-4/12  flex items-center justify-center  ">
                  <Image
                    src={image}
                    alt=""
                    className="w-full h-full md:min-h-[450px]  object-cover "
                  />
                  </div>
                  <div className="w-full md:w-8/12 flex flex-col items-center justify-center h-full">
                  <Image
                    src={clone}
                    alt=""
                    className="-mt-6 w-16 z-10 h-auto "
                  />
                  <div className="flex flex-col w-full md:w-10/12  h-full items-center justify-center px-5 py-11 md:py-4 ">
                    <h2 className="w-full md:text-xl text-3xl font-bold text-center md:text-start tracking-wide border-b-secondary-light ">
                      {title}{" "}
                    </h2>
                    <div className=" w-full h-[1px] bg-secondary-light my-10 md:my-5 "></div>
                    <span className="w-full md:text-sm text-[1.6rem] font-light  "> {text} </span>
                  </div>
                  <div className=" flex w-full pb-10 h-full md:w-10/12 md:px-10 items-center justify-center ">
                    <div className="bg-secondary-light w-10 h-[2px] "></div>
                    <h1 className="text-secondary-light md:text-3xl  text-4xl font-mono ">
                      {name}{" "}
                    </h1>
                    <h3 className="text-3xl md:text-xl text-secondary w-full  md:-mr-0 -mr-20 ml-10 flex ">
                      {address}{" "}
                    </h3>
                    <div className="bg-secondary-light w-9/12 md:w-full md:-ml-8 flex mt-4 h-[1px]"></div>
                  </div>
                </div>
                  </div>
                 
                </SwiperSlide>
                
              );
            })}
            </Swiper>
          </div>
          <div className=" flex items-center justify-between w-full px-6 absolute mt-56 z-50 ">
            <FaChevronCircleLeft className="swiper-button-prev text-secondary-light opacity-[0.7] w-6 h-6 cursor-pointer " />
            <FaChevronCircleRight className="swiper-button-next text-secondary-light opacity-[0.7] w-6 h-6 cursor-pointer " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Changes