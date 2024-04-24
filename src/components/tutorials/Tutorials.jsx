import React from 'react'

const Tutorials = () => {
  return (
    <>
    <div className=" w-full h-full md:pt-60 ">
        <div className="container w-full items-center justify-center flex flex-col gap-10 ">
            <div className=" w-full items-center justify-center flex gap-2 "> 
            <div className="w-full h-[2px] bg-blue-400  "></div>
            <img src="https://iili.io/JS49e5X.png" alt="" className="" />
            <div className="w-full h-[2px] bg-blue-400  "></div>
            </div>
            <div className="flex justify-center items-center w-full h-full  ">
              <h2 className=" uppercase text-3xl font-semibold  "> The Latest Love Life Advice </h2>
            </div>
            <div className=" w-full h-full items-center justify-center flex  "> 
            <div className="w-full h-[2px] bg-blue-400  "></div>
            <h2 className=" min-w-max px-3 text-xl flex items-center text-center justify-center  ">from Matthew Hussey </h2>
            <div className="w-full h-[2px] bg-blue-400  "></div>
            </div>
            <div className="flex flex-col w-full mx-auto md:flex-row ">
              <button className=" border border-blue-400 w-full h-28 text-4xl uppercase 
              text-secondary md:text-sm md:border-t-[1px] md:border-l-0 md:h-16   ">All </button>
              <button className="border border-blue-400 w-full h-28 text-4xl uppercase 
              text-secondary md:text-sm md:border-t-[1px] md:border-l-0 md:h-16  border-t-0 ">UNDERSTANDING MEN </button>
              <button className="border border-blue-400 w-full h-28 text-4xl uppercase 
              text-secondary md:text-sm md:border-t-[1px] md:border-l-0 md:h-16  border-t-0 ">DATING </button>
              <button className="border border-blue-400 w-full h-28 text-4xl uppercase 
              text-secondary md:text-sm md:border-t-[1px] md:border-l-0 md:h-16  border-t-0 ">TEXTING AND COMMUNICATION </button>
              <button className="border border-blue-400 w-full h-28 text-4xl uppercase 
              text-secondary md:text-sm md:border-t-[1px] md:border-l-0 md:h-16  border-t-0 ">COMMITMENT</button>
              <button className=" border border-blue-400 w-full h-28 text-4xl uppercase 
              text-secondary md:text-sm md:border-t-[1px] md:border-l-0 md:h-16  border-t-0 ">HEARTBREAK</button>
              <button className="border border-blue-400 w-full h-28 text-4xl uppercase 
              text-secondary md:text-sm md:border-t-[1px] md:border-l-0 md:h-16  border-t-0 ">CONFIDENCE</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Tutorials