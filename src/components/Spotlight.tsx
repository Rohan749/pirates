"use client"

import React, { useEffect } from 'react';
import gsap from "gsap"
import Image from 'next/image';
import baseLight from "../assets/images/baselight.svg";

interface spotlightInterface {
  loading: boolean;
}

const Spotlight = ({loading}:spotlightInterface) => {

  useEffect(() => {
   if(!loading){ gsap.fromTo(".spotlight", {
      opacity: 0,
      clipPath: "polygon(40% 0%, 60% 0%, 60% 100%, 40% 100%)"
    }, {
      opacity: 0.1,
      duration: 1.5,
      delay: 0.5,
      clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)"
    })

    gsap.to(".baselight", {
      opacity: 1,
      duration: 1.5,
      delay: 0.9,
    })}
  }, [loading])

  return (
    <div className='lighting'>
   <div className='absolute spotlight left-1/2 -translate-x-1/2 top-0'> </div>
   <div className="absolute opacity-0 baselight bottom-0 left-1/2 -translate-x-1/2">
        <Image src={baseLight} alt="" />
      </div>
   </div>
  );
};

export default Spotlight;