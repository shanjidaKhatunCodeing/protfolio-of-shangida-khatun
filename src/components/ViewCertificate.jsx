import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

const ViewCertificate = ({href, className}) => {
  return (
    <a className={`font-roboto text-sm font-bold text-sm text-primaryColor flex ${className}`} href={href} target='_blank'>View Certificate <MdArrowOutward/> </a>
  )
}

export default ViewCertificate