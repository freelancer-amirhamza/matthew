import React from 'react'
import { FaDownload, FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa6'

const Count = () => {
  return (
    <>
    <div className="w-full h-full justify-center flex flex-col items-center ">
        <h2 className="text-[2.7rem] text-secondary uppercase font-semibold "> stay connected with Me</h2>
        <div className="grid grid-cols-2 text-secondary md:flex w-full py-4  ">
            <div className="border-r-[1px] border-b-[1px] md:border-b-0 border-gray-500 p-4 md:py-0 md:text-center hover:text-blue-500 gap-3 flex flex-col w-full items-center justify-center ">
                < FaYoutube className='text-6xl md:text-5xl text-blue-500 ' />
                <h3 className="capitalize text-4xl md:text-2xl  ">watch my videos</h3>
                <span className=" text-7xl font-semibold md:text-4xl"> 2.7M</span>
            </div>
            <div className=" border-b-[1px] md:border-r-[1px] md:border-b-0 border-gray-500 p-4 md:py-0 md:text-center hover:text-blue-500 gap-3 flex flex-col w-full items-center justify-center ">
                < FaFacebook className='text-6xl md:text-5xl text-blue-500 ' />
                <h3 className="capitalize text-4xl md:text-2xl  ">Connect with me</h3>
                <span className=" text-7xl font-semibold md:text-4xl"> 4.3M</span>
            </div>
            <div className="border-r-[1px] border-b-[1px] md:border-b-0 border-gray-500 p-4 md:py-0 md:text-center hover:text-blue-500 gap-3 flex flex-col w-full items-center justify-center ">
                < FaInstagram className='text-6xl md:text-5xl text-blue-500 ' />
                <h3 className="capitalize text-4xl md:text-2xl  ">Follow My life</h3>
                <span className=" text-7xl font-semibold md:text-4xl"> 1.4M</span>
            </div>
            <div className="border-b-[1px] md:border-r-[1px] md:border-b-0 border-gray-500 p-4 md:py-0 md:text-center hover:text-blue-500 gap-3 flex flex-col w-full items-center justify-center ">
                < FaTwitter className='text-6xl md:text-5xl text-blue-500 ' />
                <h3 className="capitalize text-4xl md:text-2xl  ">Podcast Download/m</h3>
                <span className=" text-7xl font-semibold md:text-4xl"> 1.3M</span>
            </div>
            <div className="border-r-[1px]  border-gray-500 p-4 md:py-0 md:text-center hover:text-blue-500 gap-3 flex flex-col w-full items-center justify-center ">
                < FaTiktok className='text-6xl md:text-5xl text-blue-500 ' />
                <h3 className="capitalize text-4xl md:text-2xl  ">Quick insights</h3>
                <span className=" text-7xl font-semibold md:text-4xl"> 100k</span>
            </div>
            <div className="  border-gray-500 p-4 md:py-0 md:text-center hover:text-blue-500 gap-3 flex flex-col w-full items-center justify-center ">
                < FaDownload className='text-6xl md:text-5xl text-blue-500 ' />
                <h3 className="capitalize text-4xl md:text-2xl  ">Follow me</h3>
                <span className=" text-7xl font-semibold md:text-4xl"> 2.9M</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Count