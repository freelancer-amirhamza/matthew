import React from 'react'
import Button from '../Button'
import MOB from "../images/sec-7.webp"
import Image from 'next/image'

const Texts = () => {
  return (
    <>
    <div className="w-full items-center justify-center h-full flex bg-[url('https://iili.io/dVWiRMF.webp')]
        bg-no-repeat bg-cover bg-right ">
        <div className="flex flex-col md:flex-row gap-5 w-full md:gap-7 md:w-10/12 md:px-10 md:py-20 md:pr-20 h-full items-center justify-center px-5 py-10 ">
            <div className="flex w-5/12 md:w-4/12 h-auto  justify-center ">
                <Image src={MOB} alt=""
                className="w-full h-full object-cover " />
            </div>
            <div className=" w-11/12 md:w-8/12 h-full pl-4 items-center md:items-start  justify-center flex flex-col gap-3 ">
                <h2 className=" md:text-3xl md:text-start w-full md:w-10/12  text-gray-50 uppercase text-center text-3xl font-semibold tracking-wide ">
                Are You Sick and Tired of Texting That Goes Nowhere?
                </h2>
                <h1 className=" text-secondary-light text-[3rem] -tracking-wider font-semibold font-mono ">Introducing... </h1>
                <span className=" text-3xl text-gray-50 font-semibold text-start w-full tracking-wide
                md:text-8xl "> THE MOMENTUM TEXTS</span>
                {/* <button
                className='md:w-6/12 w-full py-4 md:text-2xl text-2xl bg-primary border border-primary
                hover:bg-white hover:text-primary uppercase font-semibold tracking-wide text-white '
                type='submit'> get instant access </button> */}
                <Button title='get instant access' />
            </div>
        </div>
    </div>
    </>
  )
}

export default Texts