import React from 'react'

const Letter = () => {
  return (
    <>
    <div className="bg-news-letter
        bg-no-repeat md:bg-cover bg-right-top   ">
        <div className="w-full h-full  flex flex-col items-center justify-center bg-[#1eacb5] md:bg-transparent md:py-10 ">
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center ">
            <div className="w-full md:w-6/12 h-full flex  items-center justify-center ">
                <img src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-a178cb9/matthewhussey.com/wp-content/uploads/2021/10/footer-mobile.jpg" alt="" 
                className="md:hidden " />
            </div>
            <div className="w-full  min-h-max  flex text-center  flex-col items-center text-white justify-center gap-5  px-6 md:px-0 ">
                <h3 className="text-[2.5rem] md:text-3xl uppercase tracking-widest font-semibold "> Get More Than Just Dating Advice</h3>
                <h1 className="text-6xl font-bold  ">Fall In Love</h1>
                <h2 className="text-4xl uppercase font-semibold ">With Your Life </h2>
                <span className="md:text-3xl text-[2.1rem] px-4 ">Let’s get your personalized solution. What’s your name? </span>
                <div className="w-full md:w-10/12 flex flex-col md:py-4 gap-3 md:items-center md:flex-row md:justify-center ">
                <input placeholder=" First Name "
                className='text-[15px] py-5  md:text-xl md:text-start md:px-8 bg-gray-300 outline-none text-center placeholder:text-gray-600
                w-full md:w-10/12 placeholder:text-xl '
                type="text" name="name" id="search" />
                <button 
                className='md:w-4/12 w-full py-5 md:text-xl  text-[15px] bg-primary border border-primary
                hover:bg-white hover:text-primary uppercase font-semibold tracking-wider text-white '
                type='submit'> take a quiz</button>
                </div>
            </div>
        </div>
        <span className="text-gray-100 text-center md:text-xl text-2xl pt-5 ">Matthew Has Been Seen and Featured On: </span>
        <div className="text-white grid w-full h-full md:w-8/12 grid-flow-col-dense gap-4 md:grid-rows-1 grid-rows-2 items-center
        justify-items-center   ">
            <img src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-a178cb9/matthewhussey.com/wp-content/uploads/2021/10/footer-img01.png" alt="" className="" />
            <img  src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-a178cb9/matthewhussey.com/wp-content/uploads/2021/10/footer-img02.png" alt="" className="" />
            <img  src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-a178cb9/matthewhussey.com/wp-content/uploads/2021/10/footer-img03.png" alt="" className="" />
            <img  src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-a178cb9/matthewhussey.com/wp-content/uploads/2021/10/footer-img04.png" alt="" className="" />
            <img  src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-a178cb9/matthewhussey.com/wp-content/uploads/2021/10/footer-abc-logo.png" alt="" className="" />
            <img  src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-a178cb9/matthewhussey.com/wp-content/uploads/2021/10/footer-heart-logo.png" alt="" className="" />
        </div>
            </div>
    </div>
    </>
  )
}

export default Letter