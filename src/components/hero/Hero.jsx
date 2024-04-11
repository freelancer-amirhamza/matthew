import React from 'react'

const Hero = () => {
  return (
    <div className=" hero w-full flex  bg-hero-pattern h-auto bg-bottom bg-auto md:bg-center   
    bg-no-repeat  md:bg-cover  -z-0 -mt-32 ">
    <div className=" w-full h-full bg-gradient-to-t from-secondary to-transparent  ">
        <div className="container mx-auto flex w-full flex-col items-center justify-center">
          <div className="flex flex-col items-center text-gray-200 gap-2 py-3 md:pt-60 ">
          
          <h4 className="md:text-[26px] w-full text-center uppercase font-semibold
            tracking-[5px] md:tracking-[0.8rem] md:font-bold text-gray-200 ">Get More Than Just Dating Advice. </h4>
          
          <h2 className="title w-full text-center uppercase font-semibold text-[2.2rem]
          md:text-[4.3rem] md:tracking-[0.4rem]  ">Fall in Love With Your Life.</h2>
          
          <p className=' w-full text-center pt-8 text-sm md:text-2xl py-6 '>Hey, it's Matthew. Let’s get your personalized solution</p>
          
          </div>
          
          <div className="w-full md:w-9/12 flex flex-col md:py-4 gap-3 md:items-center md:flex-row md:justify-center ">
            <input placeholder=" What's Your Name? "
            className='text-[15px] py-5  md:text-xl md:text-start md:px-8 bg-gray-300 outline-none text-center placeholder:text-gray-600
            w-full md:w-10/12 '
            type="text" name="name" id="search" />
            <button 
            className='md:w-4/12 w-full py-5 md:text-xl  text-[15px] bg-primary border border-primary
             hover:bg-white hover:text-primary uppercase font-semibold tracking-wider text-white '
            type='submit'> start here</button>
          </div>
          <div className=" flex flex-col md:flex-row gap-5 mx-auto w-6/12 md:w- items-center justify-center py-44 md:py-8 mb-8  ">
            <img className='  ' src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-0a69723/matthewhussey.com/wp-content/uploads/2021/10/sec1-img01.png" alt="amirhamza" />
            <img className='  ' src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-0a69723/matthewhussey.com/wp-content/uploads/2021/10/sec1-img02.png" alt="amirhamza" />
            <img className=' ' src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-0a69723/matthewhussey.com/wp-content/uploads/2021/10/sec1-img03.png" alt="amirhamza" />

          </div>
        </div>
    </div>
    </div>
  )
}

export default Hero