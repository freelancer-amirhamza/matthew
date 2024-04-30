import Link from 'next/link'
import React from 'react'
import Count from './Count'
import Letter from './Letter'

const links = [
  {
    title:' HELP ME WITH ',
    text0: "What to text him ",
    text1: "Understanding men",
    text2: "Communication (Every Stage)",
    text3: "answer my burning question",
    text4: "heartbreak",
    text5: "getting a commitment",
    text6: "Building my confidence",
    text7: "guide me",
  },
  {
    title:' programs ',
    text0: " the momentum texts ",
    text1: "what men want",
    text2: "how to talk to men",
    text3: "answer my burning question",
    text4: "heartbreak",
    text5: "getting a commitment",
    text6: "Building my confidence",
    text7: "guide me",
  },
  {
    title:' FREE RESOURCES ',
    text0: "What to text him ",
    text1: "Understanding men",
    text2: "Communication",
    text3: "answer my burning question",
    text4: "heartbreak",
    text5: "getting a commitment",
    text6: "Building my confidence",
    text7: "guide me",
  },
  {
    title:'LIVE EXPERIENCES',
    text0: "matthew hussey live retreat",
    text1: "matthew hussey virtual retreat",
    text2: "matthew hussey live tour",
  },
  {
    title:'LEARN MORE',
    text0: "About Matthew",
    text1: "Success Stories",
  },
  {
    title:'CONTACT ',
    text0: "Help ",
    text1: "faq",
    text2: "media",
    text3: "book matthew to spaak",
  },
]

const Footer = () => {
  return (
    <div >
    
    <Count  />
    <Letter/>
    <div className="section absolute pt-10 bg-gray-200 w-full h-max flex flex-col">
      
      <div className="container mx-auto">
        <div className=" flex md:flex-row items-center text-center flex-col w-full h-full md:items-start justify-center gap-6 ">
          {links.map(({title, text0, text1, text2, text3, 
             text4, text5, text6, text7, text8, text9}) => {
              return(
                <>
                <ul className=" ">
                  <h2 className="text-blue-400 text-2xl uppercase md:text-sm py-3 font-semibold tracking-widest "> {title} </h2>
                  <li className=" capitalize md:text-sm hover:text-blue-400 text-gray-500 py-1 "> <Link href={'/'} > {text0} </Link> </li>
                  <li className="capitalize md:text-sm hover:text-blue-400 text-gray-500 py-1"> <Link href={'/'} > {text1} </Link> </li>
                  <li className="capitalize md:text-sm hover:text-blue-400 text-gray-500 py-1"> <Link href={'/'} > {text2} </Link> </li>
                  <li className="capitalize md:text-sm hover:text-blue-400 text-gray-500 py-1"> <Link href={'/'} > {text3} </Link> </li>
                  <li className="capitalize md:text-sm hover:text-blue-400 text-gray-500 py-1"> <Link href={'/'} > {text4} </Link> </li>
                  <li className="capitalize md:text-sm hover:text-blue-400 text-gray-500 py-1"> <Link href={'/'} > {text5} </Link> </li>
                  <li className="capitalize md:text-sm hover:text-blue-400 text-gray-500 py-1"> <Link href={'/'} > {text6} </Link> </li>
                  <li className="capitalize md:text-sm hover:text-blue-400 text-gray-500 py-1"> <Link href={'/'} > {text7} </Link> </li>
                  <li className="capitalize md:text-sm hover:text-blue-400 text-gray-500 py-1"> <Link href={'/'} > {text8} </Link> </li>
                  <li className="capitalize md:text-sm hover:text-blue-400 text-gray-500 py-1"> <Link href={'/'} > {text9} </Link> </li>
                </ul>
                </>
              )
             })}
          
        </div>
        
      </div>
      <div className="flex flex-col w-full items-center justify-center gap-6 py-10 bg-gray-300  ">
          <div className="font-semibold flex-wrap text-2xl text-secondary flex w-full h-full items-center justify-center "> 
          <h2 className=" px-3 ">TERMS & CONDITIONS   </h2>|
          <h2 className=" px-3 ">PRIVACY POLICY   </h2> |
          <h2 className=" px-3 ">  DISCLAIMER    </h2> |
          <h2 className=" px-3 ">SITEMAP </h2>
          </div>
          <div className="w-full h-full items-center justify-center text-gray-700 text-sm border- flex ">
            <span className='border-b border-gray-600'> Copyright &copy; { new Date().getFullYear } This Website Built For Practice & Developed By
            <Link className=' uppercase font-semibold text-secondary-light ' href={'https://amirhamzadev.com/'} > Amir Hamza </Link>  </span>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Footer