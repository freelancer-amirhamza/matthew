import React from 'react'
import Button from '../Button'

const Guide = () => {
  return (
    <>
        <div className="section flex w-full bg-no-repeat bg-cover h-max bg-[url('https://iili.io/dVR81JS.webp')] ">
            <div className="wrapper w-full h-full">
            <div className="container flex justify-center md:h-full md:w-8/12 md:p-0 w-full px-4 mx-auto h-fit ">
                <div className="content w-full   flex flex-col gap-8 items-start justify-center py-8 pt-16 md:py-20 ">
                    <h1 className=" flex w-full h-full items-center justify-center text-secondary
                    text-3xl md:text-4xl uppercase font-semibold md:justify-start ">Let Me Guide You Through This…</h1>
                    <p className=" text-secondary w-full px-0 ">If you’re frustrated and tired of trying to figure out relationships on your own, I’m the partner you’ve been searching for. <br /> <br />
                        As the leading love life expert and confidence coach,
                        I’ve helped millions of women just like you get the love life of your dreams through my New York Times bestselling book,
                        sold-out live seminars, and powerful training videos.
                    </p>
                    <h3 className=" text-blue-400 text-xl font-semibold  "> And I’ll do the same for you.</h3>
                    <p className="text-secondary w-full px-0 "> 
                    Whether you’re brokenhearted from a fresh breakup, confused about what to text him, wondering why men disappear, casually dating but craving a commitment,
                    or feeling “stuck” and ready to level up your life in all areas  I’ve created a customized resource that will coach you, step-by-step, to get the exact result you want
                    </p>
                    <div className='w-full flex'>
                    
                    <Button 
                    className="py-2 text-black "
                    title='start here'/>
                    </div>
                </div>
                <div className="hidden md:flex w-5/12"></div>
                
            </div>
            <div className=" w-full md:hidden max-h-full ">
                    <img className='w-full h-full object-cover ' src="https://iili.io/dVAmOzv.webp" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Guide