import React from 'react'

const Button = ({text, className, href, target}) => {
  return (
    <button>
        <a className={`text-roboto text-primaryColor text-lg py-2.5 px-3.5 border-2 border-primaryColor rounded-md hover:bg-primaryColor hover:text-white ${className}`} href={href} target={target}>{text}</a>
    </button>
  )
}

export default Button