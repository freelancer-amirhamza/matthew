import React from 'react';
import plan1 from "../images/plans/sec4-img01.png";
import plan2 from "../images/plans/sec4-img02.png";
import plan3 from "../images/plans/sec4-img03.png";
import avter from "../images/plans/sec4-img04.webp";
import clone from "../images/sec3-img03.png";
import avter1 from "../images/plans/mobile-new-02.webp";
import Image from 'next/image';

const plans = [
    {
        image: plan1,
        title: " Tell Me About You (Start Here) ",
        text: " Your situation is unique to you. Answer a few quick questions to help me customize the perfect path to the love of your life. "
    },
    {
        image: plan2,
        title: " Get Personalized Advice ",
        text: " I analyze your answers and hand you only my most relevant and useful advice to your specific needs."
    },
    {
        image: plan3,
        text: " Put my advice into practice, create the relationship you deserve, and feel confident and in control of your own happiness, no matter what. "
    },
]
const Plan = () => {
  return (
    <>
        <div className="section justify-center flex w-full h-full md:bg-cover bg-cover bg-right-top md:bg-no-repeat bg-[url('https://iili.io/dVRmDKB.webp')] ">
            <div className="wrapper w-full h-full relative">
                <div className=" h-full w-full px-0 plan-line gap-10 py-12  flex flex-col justify-center items-center">
                    <div className="w-full flex py-5 pt-5 justify-center ">
                        <h1 className="text-center font-light tracking-wide uppercase text-3xl w-full text-gray-50 "> Ready to 
                        <span className="font-semibold "> Get the Love You Deserve?</span> <br /> Here’s the Plan:</h1>
                    </div>

                    {/* desktop */}
                    <div className=" w-8/12 hidden z-10 justify-center items-center  gap-14 h-full md:flex flex-col "> 
                    {plans.map(({ image, title, text}) => {
                        return(
                        <div className="w-full  flex  justify-center items-center gap-2 px-7 ">
                        <div className=" mx-auto w-5/12 flex  ">
                        </div>
                        <div className="w-2/12 flex justify-center items-center px-3 ">
                        <Image src={image} alt=""
                        className=" " />    
                        </div>
                        
                        <div className=" w-5/12 px-5 ">
                        <h2 className=" text-gray-50 text-2xl tracking-wider uppercase font-semibold "> {title} </h2>
                        <p className=" text-gray-50 text-start  w-full  "> {text} </p>
                        </div>
                        </div>
                        )
                    })}
                    </div>

                    {/* mobile */}
                    <div className=" w-full md:hidden  justify-center items-center  gap-8 h-full flex flex-col "> 
                    {plans.map(({ image, title, text}) => {
                        return(
                        <div className="w-full  flex flex-col justify-center items-center gap-2 px-7 ">
                        <Image src={image} alt=""
                        className=" w-56 h-full object-cover " />
                        <h2 className=" text-gray-50 text-2xl tracking-wider uppercase font-semibold "> {title} </h2>
                        <p className=" text-gray-50 text-center  w-full p "> {text} </p>
                            </div>
                        )
                    })}
                    </div>

                    <div className="w-full flex flex-col items-center justify-center gap-4 mt-16 py-3 px-5 ">
                        <h2 className="text-gray-50 text-2xl tracking-wider uppercase font-semibold  ">Let’s do this together… </h2>
                        <div className=" w-full justify-center flex items-center">
                        <button className="bg-primary border-primary uppercase p-3 hover:bg-transparent md:w-fit
                     w-full  flex items-center justify-center text-white border-2 
                    hover:text-primary  font-semibold tracking-wider
                    md:px-10    "> Start Here </button>
                        </div>
                    </div>

                    
                    
                    <div className=" w-full mx-auto h-full    md:-mb-64 z-10 flex flex-col items-center justify-center ">
                        <Image src={avter} alt="" 
                        className="md:hidden  " />

                        <div className="flex  w-full md:w-7/12 h-full  justify-items-center  items-center px-6  ">
                            
                            <div className=" mx-auto justify-center flex md:flex-row flex-col bg-secondary-light w-full pl-3 ">
                                <div className="md:w-4/12 justify-items-center items-center flex ">
                                    <Image src={avter1} alt="" 
                                    className="w-full  items-center h-full justify-self-center flex object-cover " />
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
            </div>
        </div>
    </>
)
}

export default Plan