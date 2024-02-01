import React from 'react'

const Paragraph = ({text, className}) => {
    let patternt = /#([^#]+)#/g
    let findtext =text.replace(patternt, "<span class='two'>$1</span>");
  return (
    <p className={`font-roboto text-parayColor text-xl font-regular ${className}`} dangerouslySetInnerHTML={{ __html: findtext }}></p>
  )
}

export default Paragraph