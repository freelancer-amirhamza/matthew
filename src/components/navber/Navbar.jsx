import React, { useState } from 'react'
import  Link  from 'next/link';
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Navbar = () => {

  const links = [
    { id: 1,
      title: 'Take the quiz',
      link: '/'
    },
    { id: 2,
      title: ' Home',
      link: '/'
    },
    { id: 3,
      title: ' Programs',
      link: '/'
    },
    { id: 4,
      title: ' live experiences',
      link: '/'
    },
    { id: 5,
      title: ' Success Stories',
      link: '/'
    },
    { id: 6,
      title: ' Podcast',
      link: '/'
    },
    { 
      id: 7,
      title: ' Blog',
      link: '/'
    },
  ]
  const links2 = [
    { id: 1,
      title: 'About Matthew',
      link: '/'
    },
    { id: 2,
      title: ' Media & press',
      link: '/'
    },
    { id: 3,
      title: ' book matthew to speak',
      link: '/'
    },
    { id: 4,
      title: ' upcomming events',
      link: '/'
    },
    { id: 5,
      title: ' Help',
      link: '/'
    },
    { id: 6,
      title: ' login',
      link: '/'
    },
  ]

  const [active, setActive] = useState(false)


  return (
      <div className='w-full  flex flex-col relative z-10'>
      <div className='flex  bg-[#ffb63d] uppercase underline font-semibold text-md w-full
      h-12 items-center justify-center  '> <Link href={'/'}> Learn more about my book, <span className="italic"> love life</span> </Link> </div>
      
      <div className="navbar relative  bg-secondary md:bg-transparent text-white w-full  h-[120px] ">
        <div className="wrapper w-full h-full px-4  flex items-center justify-between ">
          <div className="logo w-52 h-52 ml-6  flex items-center">
            <img className='w-full h-full ' src="https://cdn-jnadd.nitrocdn.com/oelCgpbWzhAPlAFkDVhzQDcTKKHAUyGY/assets/images/optimized/rev-f702702/matthewhussey.com/wp-content/uploads/2021/10/MH-Logo-white-1.svg" alt="amirhamza" />
          </div>
          <div className="links">
            <ul className=' lg:flex gap-8 w-full text-[0.8rem] tracking-wide  uppercase hidden '>
              <li> <Link href={'/'} > Programs</Link>  </li>
              <li><Link href={'/'} >live experience </Link> </li>
              <li> <Link href={'/'} > success stories </Link> </li>
              <li> <Link href={'/podcast'} > podcast </Link>  </li>
              <li><Link href={'/'} > blog</Link>  </li>
            </ul>
          </div>
          <div className="buttons flex gap-3 items-center ">
            <button className=" btn-trn items-center justify-center bg-transparent border-pink-600 lg:flex hidden "> <Link href={'/'} >login </Link> </button>
            <button className="btn lg:flex hidden justify-center "> <Link href={'/'} >take a  quiz </Link> </button>
            <Link className='py-[11px] px-8 md:px-1 bg-white text-primary text-3xl font-extrabold' href='/' ><TiThMenu onClick={() => setActive(!active)} /></Link>
            
          </div>
        </div>
      </div>

      <div 
      style={{ transform: active ? "translateX(0%)" : "translateX(100%) ", transition: 'all 0.9s ease-in-out',
                      opacity: active ? '1' : '0.5'  }}
        className={`menu-bar bg-gray-100  w-80 min-h-full   absolute top-0 right-0  z-10 ${ active ? 'translate-x-0' : 'translate-x-full  '}`} >
        <ImCross onClick={() => setActive(!active)}
        className='absolute font-mono text-white right-0 mr-8 mt-5  bg-primary w-9 h-9 p-[2px]  cursor-pointer ' />
          <ul className='absolute top-[75px] bg-gray-100 flex w-full flex-col gap-3 '>
            <div className='flex flex-col  text-xl uppercase font-bold tracking-wide text-secondary  '>
              {links.map(({id, title, link}) => {
                return(
                  <Link className='hover:bg-primary w-full px-7 py-[7px] ' key={id} href={link}> <li> {title} </li> </Link>
                )
              })}
            </div>
            <div className='flex flex-col  text-md uppercase font-bold tracking-wide text-secondary'>
              {links2.map(({id, title, link}) => {
                  return(
                    <Link className='hover:bg-primary w-full px-7 py-[6px] ' key={id} href={link}> <li> {title} </li> </Link>
                  )
              })}
            </div>
            
          </ul>
        </div>
        </div>
  )
}

export default Navbar