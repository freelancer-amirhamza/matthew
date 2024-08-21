import React from 'react';
import Button from '../Button';
import img1 from "../images/sec1-img01.png";
import img2 from "../images/sec1-img02.png";
import img3 from "../images/sec1-img03.png";
import Image from 'next/image';

const Hero = () => {
  return (
    <div
      className="hero w-full flex bg-hero-pattern h-auto bg-bottom bg-auto md:bg-center bg-no-repeat md:bg-cover -z-0 -mt-[120px]"
      // style={{
      //   backgroundImage: `url(${bg})`,

      // }}
    >
      <div className="w-full h-full bg-gradient-to-t from-secondary to-transparent">
        <div className="container mx-auto flex w-full flex-col items-center justify-center">
          <div className="flex flex-col items-center text-gray-200 gap-2 py-3 md:pt-60">
            <h4
              className="md:text-[26px] w-full text-center uppercase font-semibold
            tracking-[5px] md:tracking-[0.8rem] md:font-bold text-gray-200"
            >
              Get More Than Just Dating Advice.
            </h4>
            <h2
              className="title w-full text-center uppercase font-semibold text-[2.2rem]
          md:text-[4.3rem] md:tracking-[0.4rem]"
            >
              Fall in Love With Your Life.
            </h2>
            <p className="w-full text-center pt-8 text-sm md:text-2xl py-6">
              Hey, it's Matthew. Let’s get your personalized solution
            </p>
          </div>
          <div className="w-full md:w-9/12 flex flex-col md:py-4 gap-3 md:items-center md:flex-row md:justify-center">
            <input
              placeholder=" What's Your Name? "
              className="text-[15px] py-5 md:text-xl md:text-start md:px-8 bg-gray-300 outline-none text-center placeholder:text-gray-600 w-full md:w-10/12"
              type="text"
              name="name"
              id="search"
            />
            <Button title="start here" />
          </div>
          <div className="flex flex-col md:flex-row gap-5 mx-auto w-6/12 md:w- items-center justify-center py-44 md:py-8 mb-8">
            <Image
              className=""
              src={img1}
              alt="amirhamza"
            />
            <Image
            className=""
            src={img2}
            alt="amirhamza"
          />
            <Image
              className=""
              src={img3}
              alt="amirhamza"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
