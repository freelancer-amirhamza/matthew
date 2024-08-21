import React from 'react';

const Button = ({ title = "Learn more", className, ...rest }) => {
  return (
    <button 
    title={title}
    {...rest}
    className={`${className} md:w-4/12 w-full py-3 md:text-xl  text-[15px] bg-primary border border-primary
    hover:bg-white hover:text-primary uppercase font-semibold tracking-wider text-white`}
    type='submit'> {title} </button>
  )
}

export default Button;