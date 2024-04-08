import React from 'react'

const Hero = () => {
  return (
    <div className=" hero w-full flex  bg-hero-pattern h-auto md:bg-top bg-center   
    bg-no-repeat  bg-cover  z-0 md:absolute 
    top-10">
    <div className=" w-full h-full bg-gradient-to-t from-secondary to-transparent  ">
        <div className="container mx-auto flex w-full flex-col items-center justify-center">
          <div className="flex flex-col items-center text-gray-200 gap-2 py-3 ">
          <h4 className="text w-full text-center uppercase font-semibold
            tracking-[5px] text-gray-200 ">Get More Than Just Dating Advice. </h4>
          <h2 className="title w-full text-center uppercase font-semibold text-[2.2rem] ">Fall in Love With Your Life.</h2>
          <p className=' w-full text-center pt-7 text-sm '>Hey, it's Matthew. Let’s get your personalized solution</p>
          </div>
          <div className="w-full flex flex-col gap-3 ">
            <input placeholder=" What's Your Name? "
            className='text-[15px] py-5 bg-gray-300 outline-none text-center placeholder:text-gray-600'
            type="text" name="name" id="search" />
            <button 
            className='py-5 text-[15px] bg-primary border border-primary
             hover:bg-white hover:text-primary uppercase font-semibold tracking-wider text-white '
            type='submit'> start here</button>
          </div>
          <div className=" flex flex-col gap-5 py-44  ">
            <img src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-0a69723/matthewhussey.com/wp-content/uploads/2021/10/sec1-img01.png" alt="amirhamza" />
            <img src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-0a69723/matthewhussey.com/wp-content/uploads/2021/10/sec1-img02.png" alt="amirhamza" />
            <img src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-0a69723/matthewhussey.com/wp-content/uploads/2021/10/sec1-img03.png" alt="amirhamza" />

          </div>
        </div>
    </div>
    </div>
  )
}

export default Hero