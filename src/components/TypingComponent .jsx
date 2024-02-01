import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypingComponent = () => {
  useEffect(() => {
    const options = {
      strings: ["Front-end Developer"],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    };

    const typing = new Typed(".text", options);

    return () => {
      typing.destroy();
    };
  }, []); 

  return (
    <>
        <div><span className="text text-5xl text-primaryColor font-extrabold"></span></div>
        
    </>
  );
};

export default TypingComponent;
