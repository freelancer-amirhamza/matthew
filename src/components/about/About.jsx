import React from 'react'
import Button from '../Button';
import bg from "../images/hover-cards/sec12-bg.webp"
import Image from 'next/image';

const About = () => {
  return (
    <div className=" md:bg-cover bg-no-repeat bg-center relative  w-full flex items-center justify-center h-full
     ">
        <Image src={bg} className='absolute object-cover -z-10 hidden md:flex '/>
        <div className="md:container px-6 mx-auto w-full flex flex-col md:flex-row items-center justify-center h-full ">
            <div className=" flex-1   md:px-20 py-5 flex flex-col w-full items-center md:items-start justify-center gap-6 ">
                <h2 className="text-[2.3rem] md:text-[2.6rem] w-full font-semibold text-secondary tracking-wide ">ABOUT YOUR COACH</h2>
                <h3 className="text-3xl md:text-2xl uppercase font-semibold text-start w-full text-secondary-light ">Matthew Hussey </h3>
                <div className=" text-secondary gap-3 flex flex-col ">
                    <p className=" ">If you’re tired of trying to figure out relationships on your own, Matthew Hussey is the partner you’ve been searching for. </p>
                    <p className=" ">As the leading dating expert and confidence coach for women, Matthew has helped millions of women get the love life of their dreams through his New York Times bestselling book, sold-out live seminars, and powerful training videos.</p>
                    <p className=" ">His proven approach inspires women to find love through advice that is honest, authentic and practical; so they not only get the relationship they deserve but feel confident and in control of their own happiness. </p>
                    <p className=" ">Matthew’s advice reaches over 10 million followers weekly and his YouTube videos have been viewed over 380 million times. </p>
                </div>
                <Button title='Read my story'/>
            </div>
            <div className="flex flex-1 w-full "></div>
        </div>
    </div>
  )
}

export default About