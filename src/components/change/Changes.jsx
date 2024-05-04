import React from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Changes = () => {
    const slides = [
        {
            image:"https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-a178cb9/matthewhussey.com/wp-content/uploads/2021/11/sarah-img-01.jpg",
            title:"Lorem ipsum dolor sit adipisicing elit blanditiis neque ",
            text: "Since I started Matthew’s programs, I realized I needed to work more on my own life. Confidence developed, especially after completing Attraction to Commitment and the Virtual Retreat. I’m now in a new healthy relationship and living a full life I love!  Identifying happiness criteria, connecting with a globalcommunity and nurturing core confidence rebooted my life! THANK YOU!” ",
            name: "Rachel ",
            address: "Hong Kong "
        },
        {
            image:"https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-b1f0cd6/matthewhussey.com/wp-content/uploads/2021/11/lakshmi-img-01.jpg",
            title:"Lorem ipsum dolor sit adipisicing elit blanditiis neque ",
            text: "Since I started Matthew’s programs, I realized I needed to work more on my own life. Confidence developed, especially after completing Attraction to Commitment and the Virtual Retreat. I’m now in a new healthy relationship and living a full life I love!  Identifying happiness criteria, connecting with a globalcommunity and nurturing core confidence rebooted my life! THANK YOU!” ",
            name: "Rachel ",
            address: "Hong Kong "
        },
        {
            image:"https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-b1f0cd6/matthewhussey.com/wp-content/uploads/2021/11/navneet-img-01.jpg",
            title:"Lorem ipsum dolor sit adipisicing elit blanditiis neque ",
            text: "Since I started Matthew’s programs, I realized I needed to work more on my own life. Confidence developed, especially after completing Attraction to Commitment and the Virtual Retreat. I’m now in a new healthy relationship and living a full life I love!  Identifying happiness criteria, connecting with a globalcommunity and nurturing core confidence rebooted my life! THANK YOU!” ",
            name: "Rachel ",
            address: "Hong Kong "
        },
        {
            image:"https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-f702702/matthewhussey.com/wp-content/uploads/2021/08/Rachel-Weinhold-1.jpg",
            title:"Lorem ipsum dolor sit adipisicing elit blanditiis neque ",
            text: "Since I started Matthew’s programs, I realized I needed to work more on my own life. Confidence developed, especially after completing Attraction to Commitment and the Virtual Retreat. I’m now in a new healthy relationship and living a full life I love!  Identifying happiness criteria, connecting with a globalcommunity and nurturing core confidence rebooted my life! THANK YOU!” ",
            name: "Rachel ",
            address: "Hong Kong "
        },
        {
            image:"https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-f702702/matthewhussey.com/wp-content/uploads/2021/10/selena-1.jpg",
            title:"Lorem ipsum dolor sit adipisicing elit blanditiis neque ",
            text: "Since I started Matthew’s programs, I realized I needed to work more on my own life. Confidence developed, especially after completing Attraction to Commitment and the Virtual Retreat. I’m now in a new healthy relationship and living a full life I love!  Identifying happiness criteria, connecting with a globalcommunity and nurturing core confidence rebooted my life! THANK YOU!” ",
            name: "Rachel ",
            address: "Hong Kong "
        },
        {
            image:"https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-f702702/matthewhussey.com/wp-content/uploads/2021/10/Melissa.jpg",
            title:"Lorem ipsum dolor sit adipisicing elit blanditiis neque ",
            text: "Since I started Matthew’s programs, I realized I needed to work more on my own life. Confidence developed, especially after completing Attraction to Commitment and the Virtual Retreat. I’m now in a new healthy relationship and living a full life I love!  Identifying happiness criteria, connecting with a globalcommunity and nurturing core confidence rebooted my life! THANK YOU!” ",
            name: "Rachel ",
            address: "Hong Kong "
        },
    ]
  return (
    <>
      <div
        className=" bg-[url('https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-a178cb9/matthewhussey.com/wp-content/uploads/2021/10/sec6-bg.jpg')]
    bg-no-repeat bg-cover w-full h-full items-center justify-center overflow-x-auto "
      >
        <div className=" w-full flex flex-col h-full items-center justify-center ">
          <div className="flex w-full h-full items-center justify-center ">
            <h2 className="tracking-wider text-4xl uppercase font-semibold text-secondary ">
              lives
            </h2>
            <h2 className=" font-mono text-4xl uppercase font-semibold text-secondary-light ">
              Changed
            </h2>
          </div>

          <div className=" gap-10 w-full relative h-full items-center justify-center flex  "
          
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
                  navigation={true}
                  loop={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 1.4,
                      spaceBetween: 10,
                    },
                  }}
                >
            {slides.map(({ image, title, text, name, address }) => {
              return (
                
                <SwiperSlide className='py-10 ' >
                  <div className="flex md:flex-row flex-col md:ml-[75px] md:max-w-[900px] md:w-full px-16 md:px-0 h-full items-center justify-center bg-gray-100 ">
                  <div className="w-full h-full md:w-5/12  flex items-center justify-center  ">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full md:min-h-[450px]  object-cover "
                  />
                  </div>
                  <div className="w-full md:w-8/12 flex flex-col items-center justify-center h-full">
                  <img
                    src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-a178cb9/matthewhussey.com/wp-content/uploads/2021/10/sec3-img03.png"
                    alt=""
                    className="-mt-6 w-16 z-10 h-auto "
                  />
                  <div className="flex flex-col w-full md:w-10/12  h-full items-center justify-center px-10 py-11 md:py-4 ">
                    <h2 className="w-full md:text-xl text-4xl font-bold text-center md:text-start tracking-wide border-b-secondary-light ">
                      {title}{" "}
                    </h2>
                    <div className=" w-full h-[1px] bg-secondary-light my-10 md:my-5 "></div>
                    <span className="w-full md:text-sm text-4xl font-light  "> {text} </span>
                  </div>
                  <div className=" flex w-full pb-10 h-full md:w-10/12 md:px-10 items-center justify-center ">
                    <div className="bg-secondary-light w-10 h-[2px] "></div>
                    <h1 className="text-secondary-light md:text-3xl  text-5xl font-mono ">
                      {name}{" "}
                    </h1>
                    <h3 className="text-4xl md:text-xl text-secondary w-full  md:-mr-0 -mr-20 ml-10 flex ">
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
          <div className=" flex items-center justify-between w-full px-6 absolute  ">
            {/* <FaChevronCircleLeft className=" text-secondary-light w-6 h-6 cursor-pointer " />
            <FaChevronCircleRight className="swiper-button-next text-secondary-light w-6 h-6 cursor-pointer " /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Changes