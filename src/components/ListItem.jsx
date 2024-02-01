import React from 'react'
//import { Link } from 'react-router-dom'


const ListItem = ({text, className, href, icon}) => {
  return (
    <>
      <li>
        <a className={`text-roboto text-xl text-parayColor font-regular items-center flex list-none pr-5 hover:text-primaryColor hover:font-bold ${className}`} href={href}>{text} <span className="icon">{icon}</span> </a>
    </li>
    </>
  )
}

export default ListItem