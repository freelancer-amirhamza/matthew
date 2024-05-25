import React from 'react'

const LoveLife = () => {
  return (
    <>
    <div className="section w-full h-full  md:h-full  bg-gradient-to-b from-gray-200 to-transparent from-2% ">
        <div className=" w-full h-full bg-love-life bg-no-repeat md:bg-cover mx-auto  bg-contain ">
        <div className="container  md:py-16 mx-auto w-full h-full flex flex-col md:flex-row-reverse">
            <div className="flex md:-mr-20  mx-auto w-full h-full items-center justify-center ">
                <img className='mx-auto w-full h-full p-8 md:p-0  object-cover '
                src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-a178cb9/matthewhussey.com/wp-content/uploads/2024/01/LL_Book-Mockup-1_Edited-1536x1229.png" alt="" />
            </div>
            <div className="md:-mr-28 md:pl-20  flex flex-col mx-auto w-full h-full items-center   justify-center ">
              <div className="w-full h-full items-center flex flex-col gap-2 ">
                <h4 className="text-2xl font-semibold text-center md:text-start w-full md:text-xl "> THE <span className='italic'>NEW YORK</span> TIMES BESTSELLING AUTHOR OF GET <span className='italic'>THE GUY</span> BRINGS YOU...</h4>
                <h1 className="md:text-start w-full md:text-7xl text-5xl text-center font-extrabold text-pink-400 tracking-widest ">LOVE LIFE</h1>
                <p className="md:text-start  text-[28px] w-full text-center font-bold text-yellow-500 "> How to Raise Your Standards, Find Your Person, and Live Happily (No Matter What)</p>
                <div className="flex w-full ">
                <button className="md:w-fit md:px-11 md:py-3 md:text-[1em] md:tracking-tight  bg-zinc-800 w-full p-2 text-2xl font-bold  tracking-wider my-4
                rounded-lg hover:bg-pink-400 hover:text-zinc-800 text-pink-400 transition-colors ">ORDER HERE</button>
                </div>
              </div>
              <div className="md:flex-row  w-full h-full items-center justify-center flex flex-col">
                <img className='w-40 h-40 object-cover md:hidden  ' src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-a178cb9/matthewhussey.com/wp-content/uploads/2024/03/drew_barrymore_headshot-circle-1012x1024.png" alt="" />
                <img className='w-36 pr-3  hidden md:flex  h-[173px] object-cover  ' src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-a178cb9/matthewhussey.com/wp-content/uploads/2024/02/drew_barrymore_headshot-682x1024.jpg" alt="" />
                <div className="border-y border-blue-500 my-4 ">
                  <img className='md:-mt-3 -mt-4 px-0 h-9 md:h-5 ' src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-a178cb9/matthewhussey.com/site/wp-content/uploads/2021/05/sec10-quot.jpg" alt="" />
                  <p className="md:p-1 p-3 text-zinc-800 ">Matthew’s unique voice is one I return to again and again for both my confidence and my love life . . . perfect for anyone looking for actionable wisdom and a path to reconnecting with themselves.</p>
                  <div className="md:p-[6px] flex p-3 w-full md:gap-10 ">
                    <span className='text-md font-semibold text-zinc-800 tracking-wider ' >—DREW BARRYMORE</span>
                    <span className='text-blue-400 -tracking-wide mb-3 md:mb-0 ' >Actor, talk show host, writer, producer, business owner, and mom </span>
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

export default LoveLife