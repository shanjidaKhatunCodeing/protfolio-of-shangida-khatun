import React from 'react'

const Card = ({src, alt, text, className, ptext, pclassName, iclassName}) => {
  return (
    <div>
        <img className={iclassName} src={src} alt={alt} />
        <h2 className={`text-roboto text-secoundaryColor text-3xl font-bold py-8 ${className}`}>{text}</h2>
        <p className={`text-roboto text-parayColor text-xl font-regular pb-8 px-2.5 ${pclassName}`}>{ptext}</p>
    </div>
  )
}

export default Card