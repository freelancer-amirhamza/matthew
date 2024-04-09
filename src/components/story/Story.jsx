import React from 'react'

const Story = () => {
    const cards = [
        {
            title: "Understand Men",
            link: "https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-0a69723/matthewhussey.com/wp-content/uploads/2021/10/sec2-img07.jpg",
            text: " My practical advice saves you from confusion and mistakes. "
        },
        {
            title: "Get Lasting Love",
            link: "https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-0a69723/matthewhussey.com/wp-content/uploads/2021/10/hompage-sec2-image.jpg",
            text: " Learn to meet, attract and keep your ideal man forever. "
        },
        {
            title: "Transform Your Life",
            link: "https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-0a69723/matthewhussey.com/wp-content/uploads/2021/10/sec2-img09.jpg",
            text: " Unlock core confidence and live the life of your dreams. "
        },

    ]
  return (
    <>
    <div className="container px-8 mx-auto flex flex-col items-center justify-items-center">
        <div className=" w-full h-full mx-auto items-center py-8 gap-5 justify-center flex flex-col md:flex-row ">
            {cards.map(({title, link, text}) => {
                return(
                <div className=" w-full relative ">
                <img src={link} alt="" 
                className=" relative w-full h-full object-cover flex z-0" />
                <div className=" absolute w-full h-full -bottom-[23rem] md:-bottom-52 text-center flex items-center
                flex-col justify-items-end ">
                    <h2 className=" text-gray-200 text-3xl md:text-2xl font-semibold uppercase ">{title}</h2>
                    <p className="text-gray-200 text-lg md:text-[16px] tracking-wider w-2/4 md:w-3/5 text-center items-center flex justify-center "> {text} </p>
                </div>
            </div>
                )
            })}
            
        </div>
        <div className=" grid  w-10/12 grid-flow-col-dense gap-4 md:grid-rows-1 grid-rows-2 items-center
        justify-items-center md:py-9  ">
            <img src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-0a69723/matthewhussey.com/wp-content/uploads/2021/10/sec2-img01.png" alt="" className="" />
            <img  src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-0a69723/matthewhussey.com/wp-content/uploads/2021/10/sec2-img02.png" alt="" className="" />
            <img  src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-0a69723/matthewhussey.com/wp-content/uploads/2021/10/sec2-img03.png" alt="" className="" />
            <img  src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-0a69723/matthewhussey.com/wp-content/uploads/2021/10/sec2-img04.png" alt="" className="" />
            <img  src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-0a69723/matthewhussey.com/wp-content/uploads/2021/10/sec2-img05.png" alt="" className="" />
            <img  src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-0a69723/matthewhussey.com/wp-content/uploads/2021/10/sec2-img06.png" alt="" className="" />
        </div>
    </div>
    </>
  )
}

export default Story